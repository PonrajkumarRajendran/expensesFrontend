import { createContext, useEffect, useState } from "react";
import {
  getWeekExpenses,
  deleteOneExpense,
  getTypeExpenses,
} from "../utils/expense.utils";
export const ExpenseContext = createContext();
export const ExpenseProvider = ({ children }) => {
  const [weekExpenses, setWeekExpenses] = useState({});
  const [typeExpenses, setTypeExpenses] = useState({});

  useEffect(() => {
    getWeekExpenses(setWeekExpenses);
    getTypeExpenses(setTypeExpenses);
  }, []);
  const deleteExpense = (id) => {
    deleteOneExpense(id);
  };
  const value = { weekExpenses, typeExpenses, deleteExpense };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
