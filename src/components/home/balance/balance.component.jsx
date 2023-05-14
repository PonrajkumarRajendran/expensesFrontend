import { useContext, useState } from "react";
import "./balance.styles.scss";
import { AllowanceContext } from "../../../contexts/allowance.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import AllowanceModal from "./allowanceModal/allowanceModal.component";
import { ExpenseContext } from "../../../contexts/expense.context";

const Balance = () => {
  const { allowance, setAllowance } = useContext(AllowanceContext);
  const [modalClass, setModalClass] = useState("allowance-modal-hidden");
  const toggleModal = () => {
    if (modalClass === "allowance-modal-hidden") {
      setModalClass("allowance-modal-visible");
    } else if (modalClass === "allowance-modal-visible") {
      setModalClass("allowance-modal-hidden");
    }
  };
  const { typeExpenses } = useContext(ExpenseContext);
  var balance = "0";
  if (Object.keys(typeExpenses).length !== 0) {
    const tempValue = allowance - typeExpenses["total"];
    balance = tempValue.toString();
  }
  return (
    <div className="balance-container">
      <div className={modalClass}>
        <span className="allowance-modal-close" onClick={toggleModal}>
          GO BACK
        </span>
        <AllowanceModal></AllowanceModal>
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
      <div className="balance-box">
        <span className="balance-box-title">Balance</span>
        <span className="balance-box-content">{balance}</span>
      </div>
    </div>
  );
};
export default Balance;
