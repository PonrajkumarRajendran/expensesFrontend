import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./weekreport.styles.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ExpenseContext } from "../../../contexts/expense.context";
const WeekReport = () => {
  const { weekExpenses, deleteExpense } = useContext(ExpenseContext);
  return (
    <div className="weekreport-container">
      <span className="weekreport-title">Week's Expenses</span>
      <div className="weekreport-list">
        {Object.keys(weekExpenses).map((index1) => {
          const templist = weekExpenses[index1];
          return (
            <div key={index1} className="weekreport-inner-container">
              {templist.map((index) => {
                const tempObject = index;
                var background;
                var color;
                if (tempObject["expenseType"] === "Food") {
                  background = "#77DD77";
                  color = "white";
                } else if (tempObject["expenseType"] === "Shopping") {
                  background = "#78A2CC";
                  color = "white";
                } else if (tempObject["expenseType"] === "Travel") {
                  background = "#957DAD";
                  color = "white";
                } else {
                  background = "#55CBCD";
                  color = "white";
                }
                return (
                  <div key={tempObject["_id"]} className="weekreport-item">
                    <span className="weekreport-item-title">
                      {tempObject["expenseTitle"]}
                    </span>
                    <span className="weekreport-item-value">
                      {tempObject["expenseValue"]}
                    </span>
                    <span
                      className="weekreport-item-type"
                      style={{
                        backgroundColor: background,
                        color: color,
                        fontWeight: 600,
                      }}
                    >
                      {tempObject["expenseType"]}
                    </span>
                    <span className="weekreport-item-date">
                      {tempObject["expenseDate"]}
                    </span>
                    <FontAwesomeIcon
                      className="weekreport-item-delete"
                      icon={faTrash}
                      onClick={() => deleteExpense(tempObject["_id"])}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default WeekReport;
