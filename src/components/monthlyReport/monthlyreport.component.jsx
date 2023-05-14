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
        "http://localhost:5000/api/expense/getmonthreport",
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
    if (name === "month" && value <= 12 && value > 0) {
      setRequestFields({ ...requestFields, [name]: value });
    } else if (name === "year") {
      setRequestFields({ ...requestFields, [name]: value });
    }
  };
  return (
    <div className="monthlyreport-container">
      <div className="monthly-request-box">
        <form onSubmit={handleSubmit}>
          <label className="monthly-request-label">Month:</label>
          <input
            type="number"
            name="month"
            value={month}
            onChange={handleChange}
            className="monthly-request-input"
          />
          <label className="monthly-request-label">Year:</label>
          <input
            type="number"
            name="year"
            value={year}
            onChange={handleChange}
            className="monthly-request-input"
          />
          <button type="submit" className="monthly-request-submit">
            Pull Expenses
          </button>
        </form>
      </div>
      <div className="monthly-report-box">
        <div className="monthly-report-list">
          {expenses.map((index) => {
            const tempObject = index;
            return (
              <div className="monthly-report-item">
                <span className="mr-expense-title">
                  {tempObject["expenseTitle"]}
                </span>
                <span className="mr-expense-value">
                  {tempObject["expenseValue"]}
                </span>
                <span className="mr-expense-type">
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
