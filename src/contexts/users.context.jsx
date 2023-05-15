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
    } else if (Cookies.get("auth")) {
      const tempObject = Cookies.get("auth");
      setUser(Cookies.get(tempObject["token"]));
      localStorage.setItem("user", tempObject["token"]);
    }
  }, []);
  const value = { user, setUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
