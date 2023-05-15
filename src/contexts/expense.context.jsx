import { createContext, useContext, useEffect, useState } from "react";
import {
  getWeekExpenses,
  deleteOneExpense,
  getTypeExpenses,
} from "../utils/expense.utils";
import { UserContext } from "./users.context";
export const ExpenseContext = createContext();
export const ExpenseProvider = ({ children }) => {
  const [weekExpenses, setWeekExpenses] = useState({});
  const [typeExpenses, setTypeExpenses] = useState({});
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user !== "") {
      getWeekExpenses(setWeekExpenses);
      getTypeExpenses(setTypeExpenses);
    }
  }, []);
  const deleteExpense = (id) => {
    deleteOneExpense(id);
  };
  const value = { weekExpenses, typeExpenses, deleteExpense };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
