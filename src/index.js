import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/users.context";
import { AllowanceProvider } from "./contexts/allowance.context";
import { ExpenseProvider } from "./contexts/expense.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AllowanceProvider>
          <ExpenseProvider>
            <App />
          </ExpenseProvider>
        </AllowanceProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
