import { useState } from "react";
import "./planner.styles.scss";
import Property from "./property/property.component";
import Retirement from "./retirement/retirement.component";
const Planner = () => {
  const [toggleChoice, setToggleChoice] = useState("retire");
  const [retireButtonClass, setRetireButtonClass] = useState(
    "planner-toggle-button active"
  );
  const [propertyButtonClass, setPropertyButtonClass] = useState(
    "planner-toggle-button"
  );
  const togglePane = (pane) => {
    setToggleChoice(pane);
    if (pane === "retire") {
      setRetireButtonClass("planner-toggle-button active");
      setPropertyButtonClass("planner-toggle-button");
    } else {
      setRetireButtonClass("planner-toggle-button");
      setPropertyButtonClass("planner-toggle-button active");
    }
  };
  return (
    <div className="planner-container">
      {window.innerWidth > 1024 ? (
        <div className="planner-desktop">
          <Retirement />
          <Property />
        </div>
      ) : (
        <div className="planner-mobile">
          <div className="planner-mobile-toggle">
            <span
              className={retireButtonClass}
              onClick={() => togglePane("retire")}
            >
              Retirement Planner
            </span>
            <span
              className={propertyButtonClass}
              onClick={() => togglePane("property")}
            >
              Property Planner
            </span>
          </div>
          {toggleChoice === "retire" ? <Retirement /> : <Property />}
        </div>
      )}
    </div>
  );
};

export default Planner;
