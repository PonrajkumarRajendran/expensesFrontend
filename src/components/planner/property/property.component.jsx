import { useState } from "react";
import "./property.styles.scss";
import { pullPropertyPlan } from "./property.utils";
const propertyInitial = {
  currentSalary: 0,
  currentPropertyValue: 0,
};
const Property = () => {
  const [propertyFields, setPropertyFields] = useState(propertyInitial);
  const [propertyPlan, setPropertyPlan] = useState("");
  const [propertyLoader, setPropertyLoader] = useState(
    "property-loader-hidden"
  );
  const { currentSalary, currentPropertyValue } = propertyFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPropertyFields({ ...propertyFields, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    pullPropertyPlan(propertyFields, setPropertyPlan, setPropertyLoader);
  };
  return (
    <div className="property-container">
      {window.innerWidth > 1024 && (
        <span className="property-title">Property Planner</span>
      )}

      <div className="property-form">
        <form onSubmit={handleSubmit}>
          <div className="property-input-container">
            <label className="property-label">
              Current Salary (Monthly) :{" "}
            </label>
            <input
              type="number"
              name="currentSalary"
              value={currentSalary}
              className="property-input"
              onChange={handleChange}
            />
          </div>
          <div className="property-input-container">
            <label className="property-label">Current Property Value : </label>
            <input
              type="number"
              name="currentPropertyValue"
              value={currentPropertyValue}
              className="property-input"
              onChange={handleChange}
            />
          </div>
          <button className="property-submit" type="submit">
            GET PROPERTY PURCHASE PLAN
          </button>
        </form>
      </div>
      <div className={propertyLoader}>
        <div className="property-loader"></div>
      </div>
      {propertyPlan !== "" ? (
        <div className="property-plan-box">
          <span className="property-plan-header">
            Purchase Plan <br />
            <br />
          </span>
          <span className="property-plan-text">{propertyPlan}</span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Property;
