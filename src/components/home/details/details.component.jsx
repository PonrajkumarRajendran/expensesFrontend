import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./details.styles.scss";
import {
  faBus,
  faBowlFood,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ExpenseContext } from "../../../contexts/expense.context";
const Details = () => {
  const { typeExpenses } = useContext(ExpenseContext);
  if (window.innerWidth > 1024) {
    return (
      <div className="details-container-desktop">
        <span className="details-container-title">Month's Expenses</span>
        <div className="details-box-container">
          <div
            className="details-box"
            style={{ boxShadow: "2px 2px 16px -6px #77DD77" }}
          >
            <FontAwesomeIcon className="details-box-icon" icon={faBowlFood} />
            <span className="details-box-detail">
              {typeExpenses["foodTotal"]}
            </span>
          </div>
          <div
            className="details-box"
            style={{ boxShadow: "2px 2px 16px -6px #957DAD" }}
          >
            <FontAwesomeIcon className="details-box-icon" icon={faBus} />
            <span className="details-box-detail">
              {typeExpenses["travelTotal"]}
            </span>
          </div>
        </div>
        <div className="details-box-container">
          <div
            className="details-box"
            style={{ boxShadow: "2px 2px 16px -6px #78A2CC" }}
          >
            <FontAwesomeIcon
              className="details-box-icon"
              icon={faBagShopping}
            />
            <span className="details-box-detail">
              {typeExpenses["shoppingTotal"]}
            </span>
          </div>
          <div
            className="details-box"
            style={{ boxShadow: "2px 2px 16px -6px #55CBCD" }}
          >
            <span className="details-box-misc">Misc.</span>
            <span className="details-box-detail">
              {typeExpenses["miscTotal"]}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="details-container-mobile">
        <div
          className="details-box"
          style={{ boxShadow: "2px 2px 16px -6px #77DD77" }}
        >
          <FontAwesomeIcon className="details-box-icon" icon={faBowlFood} />
          <span className="details-box-detail">
            {typeExpenses["foodTotal"]}
          </span>
        </div>
        <div
          className="details-box"
          style={{ boxShadow: "2px 2px 16px -6px #957DAD" }}
        >
          <FontAwesomeIcon className="details-box-icon" icon={faBus} />
          <span className="details-box-detail">
            {typeExpenses["travelTotal"]}
          </span>
        </div>
        <div
          className="details-box"
          style={{ boxShadow: "2px 2px 16px -6px #78A2CC" }}
        >
          <FontAwesomeIcon className="details-box-icon" icon={faBagShopping} />
          <span className="details-box-detail">
            {typeExpenses["shoppingTotal"]}
          </span>
        </div>
        <div
          className="details-box"
          style={{ boxShadow: "2px 2px 16px -6px #55CBCD" }}
        >
          <span className="details-box-misc">Misc.</span>
          <span className="details-box-detail">
            {typeExpenses["miscTotal"]}
          </span>
        </div>
      </div>
    );
  }
};
export default Details;
