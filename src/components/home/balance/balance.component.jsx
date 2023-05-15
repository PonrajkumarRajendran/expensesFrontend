import { useContext, useEffect, useState } from "react";
import "./balance.styles.scss";
import { AllowanceContext } from "../../../contexts/allowance.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import AllowanceModal from "./allowanceModal/allowanceModal.component";
import { ExpenseContext } from "../../../contexts/expense.context";

const Balance = () => {
  const { allowance } = useContext(AllowanceContext);
  const [modalClass, setModalClass] = useState("allowance-modal-hidden");
  const [balance, setBalance] = useState("0");
  const [shadowValue, setShadowValue] = useState("2px 2px 16px -10px #121212");
  const [balanceBackground, setBalanceBackground] = useState("white");
  const toggleModal = () => {
    if (modalClass === "allowance-modal-hidden") {
      setModalClass("allowance-modal-visible");
    } else if (modalClass === "allowance-modal-visible") {
      setModalClass("allowance-modal-hidden");
    }
  };
  const { typeExpenses } = useContext(ExpenseContext);

  useEffect(() => {
    if (Object.keys(typeExpenses).length !== 0) {
      const tempValue = allowance - typeExpenses["total"];
      setBalance(tempValue.toString());
      if (tempValue >= 0.75 * allowance) {
        setShadowValue("2px 2px 16px -6px #00FF00");
        setBalanceBackground("white");
      } else if (tempValue >= 0.5 * allowance) {
        setShadowValue("2px 2px 16px -6px #FFFF00");
        setBalanceBackground("white");
      } else if (tempValue >= 0) {
        setShadowValue("2px 2px 16px -6px #ff0000");
        setBalanceBackground("white");
      } else {
        setShadowValue("2px 2px 16px -6px #ff0000");
        setBalanceBackground("#ff0000");
      }
    }
  }, [allowance]);

  return (
    <div className="balance-container">
      <div className={modalClass}>
        <span className="allowance-modal-close" onClick={toggleModal}>
          GO BACK
        </span>
        <AllowanceModal closeFunction={toggleModal}></AllowanceModal>
      </div>

      <div className="allowance-box">
        <span className="allowance-box-title">Allowance</span>
        <span className="allowance-box-content">{allowance}</span>
        <FontAwesomeIcon
          className="allowance-edit-icon"
          onClick={toggleModal}
          icon={faPenToSquare}
        />
      </div>
      <div
        className="balance-box"
        style={{ boxShadow: shadowValue, backgroundColor: balanceBackground }}
      >
        <span className="balance-box-title">Balance</span>
        <span className="balance-box-content">{balance}</span>
      </div>
    </div>
  );
};
export default Balance;
