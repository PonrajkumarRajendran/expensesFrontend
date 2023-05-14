import { useState } from "react";
import "./addExpense.styles.scss";
import { inputInitial, addExpense } from "./addExpense.util";
const AddExpense = () => {
  const [inputFields, setInputFields] = useState(inputInitial);
  const { expenseTitle, expenseType, expenseDate, expenseValue } = inputFields;
  const expenseTypes = ["Food", "Travel", "Shopping", "Miscellaneous"];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addExpense(inputFields);
  };
  return (
    <div className="add-expense-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          className="add-expense-input"
          name="expenseTitle"
          value={expenseTitle}
          placeholder="Expense Title"
        />
        <input
          type="number"
          onChange={handleChange}
          className="add-expense-input"
          name="expenseValue"
          value={expenseValue}
          placeholder="Expense Value"
        />
        <select
          name="expenseType"
          value={expenseType}
          onChange={handleChange}
          className="add-expense-dropdown"
        >
          <option value="" className="add-expense-value">
            Expense Type
          </option>
          {expenseTypes.map((value) => {
            return (
              <option className="add-expense-value" key={value} value={value}>
                {value}
              </option>
            );
          })}
        </select>
        <input
          type="date"
          name="expenseDate"
          value={expenseDate}
          onChange={handleChange}
          className="add-expense-date"
        />
        <button type="submit" className="add-expense-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddExpense;
