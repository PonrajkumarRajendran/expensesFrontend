import { useEffect, useState } from "react";
import "./monthlyreport.styles.scss";
const requestInitial = {
  month: 1,
  year: 2023,
};
const MonthlyReport = () => {
  const [requestFields, setRequestFields] = useState(requestInitial);
  const [expenses, setExpenses] = useState([]);
  const { month, year } = requestFields;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userToken = localStorage.getItem("user");
    const yearString = year.toString();
    var monthString = month.toString();
    if (month < 10) {
      monthString = "0" + monthString;
    }
    const monthValue = monthString + "/" + yearString;
    const requestObject = {
      monthValue: monthValue,
    };
    try {
      const response = await fetch(
        "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/expense/getmonthreport",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": userToken,
          },
          body: JSON.stringify(requestObject),
        }
      );
      const result = await response.json();
      setExpenses(result);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "month" && value <= 12 && value >= 0) {
      setRequestFields({ ...requestFields, [name]: value });
    } else if (name === "year") {
      setRequestFields({ ...requestFields, [name]: value });
    }
  };
  return (
    <div className="monthlyreport-container">
      <div className="monthly-request-box">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="monthly-request-label">Month:</label>
            <input
              type="number"
              name="month"
              value={month}
              onChange={handleChange}
              className="monthly-request-input"
            />
          </div>
          <div>
            <label className="monthly-request-label">Year:</label>
            <input
              type="number"
              name="year"
              value={year}
              onChange={handleChange}
              className="monthly-request-input"
            />
          </div>

          <button type="submit" className="monthly-request-submit">
            Pull Expenses
          </button>
        </form>
      </div>
      <div className="monthly-report-box">
        <div className="monthly-report-list">
          {expenses.map((index) => {
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
              <div className="monthly-report-item">
                <span className="mr-expense-title">
                  {tempObject["expenseTitle"]}
                </span>
                <span className="mr-expense-value">
                  {tempObject["expenseValue"]}
                </span>
                <span
                  className="mr-expense-type"
                  style={{
                    backgroundColor: background,
                    color: color,
                    fontWeight: 600,
                  }}
                >
                  {tempObject["expenseType"]}
                </span>
                <span className="mr-expense-date">
                  {tempObject["expenseDate"]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MonthlyReport;
