import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Brand from "../brand/brand.component";
import "./navigation.styles.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { navigationItems, handleClick } from "./navigation.utils";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/users.context";
import Cookies from "js-cookie";
const Navigation = () => {
  const [navigationClass, setNavigationClass] = useState(
    "navigation-box-hidden"
  );
  const navigate = useNavigate();
  const navigationFunction = (location) => {
    navigate(location);
  };
  const [navigationValues, setNavigationValues] = useState(navigationItems);
  useEffect(() => {
    const localValue = localStorage.getItem("navigationFolder");

    const navigationObject = {
      HOME: "",
      MONTHLY_REPORT: "",
    };

    if (localValue) {
      setNavigationValues({ ...navigationObject, [localValue]: "active" });
      if (localValue === "HOME") {
        navigate("/home");
      } else {
        navigate(localValue.toLowerCase());
      }
    } else {
      setNavigationClass({ ...navigationObject, HOME: "active" });
    }
  }, []);
  const handleToggle = () => {
    if (navigationClass === "navigation-box-hidden") {
      setNavigationClass("navigation-box-visible");
    } else {
      setNavigationClass("navigation-box-hidden");
    }
  };
  const { user, setUser } = useContext(UserContext);
  // useEffect(() => {
  //   if (user === "") {
  //     navigate("/");
  //   }
  // }, [user]);
  const handleLogout = () => {
    window.open(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/user/auth/logout",
      "_self"
    );
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    Cookies.remove("user");
    setUser("");
  };
  return (
    <div className="navigation-container-whole">
      <div className="navigation-container">
        <Brand />
        {window.innerWidth > 1024 ? (
          <div className="navigation-desktop">
            {Object.keys(navigationValues).map((index) => {
              const classValue = "navigation-item " + navigationValues[index];
              const navName = index.replace("_", " ");
              return (
                <span
                  key={index}
                  className={classValue}
                  onClick={() =>
                    handleClick(index, setNavigationValues, navigationFunction)
                  }
                >
                  {navName}
                </span>
              );
            })}
            <span className="navigation-item" onClick={handleLogout}>
              LOG OUT
            </span>
          </div>
        ) : (
          <div className="navigation-mobile">
            <FontAwesomeIcon
              id="navigation-button"
              icon={faBars}
              onClick={handleToggle}
            />
            <div className={navigationClass}>
              <span className="navigation-box-close" onClick={handleToggle}>
                X
              </span>
              {Object.keys(navigationValues).map((index) => {
                const classValue =
                  "navigation-box-item " + navigationValues[index];
                const navName = index.replace("_", " ");
                return (
                  <span
                    key={index}
                    className={classValue}
                    onClick={() =>
                      handleClick(
                        index,
                        setNavigationValues,
                        navigationFunction
                      )
                    }
                  >
                    {navName}
                  </span>
                );
              })}
              <span className="navigation-box-item" onClick={handleLogout}>
                LOG OUT
              </span>
            </div>
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
};
export default Navigation;
