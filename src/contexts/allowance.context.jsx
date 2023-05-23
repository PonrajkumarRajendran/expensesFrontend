import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./users.context";

export const AllowanceContext = createContext({
  allowance: 0,
});
export const AllowanceProvider = ({ children }) => {
  const [allowance, setAllowance] = useState();
  const value = { allowance, setAllowance };
  const { user } = useContext(UserContext);
  const getAllowance = async () => {
    const userToken = localStorage.getItem("user");
    try {
      const response = await fetch(
        "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/allowance/getallowance",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": userToken,
          },
        }
      );
      const result = await response.json();
      setAllowance(result["allowance"]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user !== "") {
      getAllowance();
    }
  }, [user]);

  useEffect(() => {
    const setAllowanceFunction = async () => {
      const requestObject = {
        allowance: allowance,
      };
      try {
        const userToken = localStorage.getItem("user");
        const response = await fetch(
          "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/allowance/addallowance",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "auth-token": userToken,
            },
            body: JSON.stringify(requestObject),
          }
        );
        const result = await response.text();
        getAllowance();
      } catch (err) {
        console.log(err);
      }
    };
    if (user !== "") {
      setAllowanceFunction();
    }
  }, [allowance]);
  return (
    <AllowanceContext.Provider value={value}>
      {children}
    </AllowanceContext.Provider>
  );
};
