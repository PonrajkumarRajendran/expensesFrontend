import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export const UserContext = createContext({
  user: "",
});
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    } else if (Cookies.get("user")) {
      setUser(Cookies.get("user"));
      localStorage.setItem("user", Cookies.get("user"));
    }
  }, []);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
