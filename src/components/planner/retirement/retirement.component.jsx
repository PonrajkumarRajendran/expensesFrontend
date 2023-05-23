import { useState } from "react";
import "./retirement.styles.scss";
import { pullRetirementPlan } from "./retirement.utils";

const retirementInitial = {
  currentAge: 0,
  retirementAge: 0,
  currentSalary: 0,
  yearlyIncrement: 0,
};

const Retirement = () => {
  const [retirementFields, setRetirementFields] = useState(retirementInitial);
  const [retirementSuggestion, setRetirementSuggestion] = useState([]);
  const [loaderClass, setLoaderClass] = useState("retirement-loader-hidden");
  const [otherOptions, setOtherOptions] = useState([]);
  const { currentAge, currentSalary, retirementAge, yearlyIncrement } =
    retirementFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRetirementFields({ ...retirementFields, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(retirementFields);
    pullRetirementPlan(
      retirementFields,
      setRetirementSuggestion,
      setOtherOptions,
      setLoaderClass
    );
  };
  return (
    <div className="retirement-container">
      {window.innerWidth > 1024 && (
        <span className="retirement-title">Retirement Planner</span>
      )}

      <div className="retirement-form">
        <form onSubmit={handleSubmit}>
          <div className="retirement-input-container">
            <label className="retirement-label">Age : </label>
            <input
              type="number"
              className="retirement-input"
              value={currentAge}
              name="currentAge"
              onChange={handleChange}
            />
          </div>
          <div className="retirement-input-container">
            <label className="retirement-label">
              Current Salary (Monthly) :{" "}
            </label>
            <input
              type="number"
              className="retirement-input"
              value={currentSalary}
              name="currentSalary"
              onChange={handleChange}
            />
          </div>
          <div className="retirement-input-container">
            <label className="retirement-label">Retirement Age</label>
            <input
              type="number"
              className="retirement-input"
              value={retirementAge}
              name="retirementAge"
              onChange={handleChange}
            />
          </div>
          <div className="retirement-input-container">
            <label className="retirement-label">Yearly Increment (%) : </label>
            <input
              type="number"
              className="retirement-input"
              value={yearlyIncrement}
              name="yearlyIncrement"
              onChange={handleChange}
            />
          </div>

          <button className="retirement-submit" type="submit">
            GET RETIREMENT SUGGESTIONS
          </button>
        </form>
      </div>
      <div className={loaderClass}>
        <div className="retirement-loader"></div>
      </div>
      {retirementSuggestion.length > 0 ? (
        <div className="retirement-suggestion-box">
          <span className="retirement-suggestion-header">
            Saving Suggestions
            <br />
            <br />
          </span>
          {retirementSuggestion.map((index) => {
            if (index.includes("Savings:")) {
              return (
                <span className="retirement-suggestion-text-block" key={index}>
                  {index}
                  <br />
                </span>
              );
            } else {
              return (
                <span className="retirement-suggestion-text" key={index}>
                  {index}
                  <br />
                </span>
              );
            }
          })}
        </div>
      ) : (
        <div></div>
      )}
      {otherOptions.length > 0 ? (
        <div className="other-suggestion-box">
          <span className="other-suggestion-header">
            Other Suggestions
            <br />
            <br />
          </span>
          {otherOptions.map((index) => {
            return (
              <span className="other-suggestion-text" key={index}>
                {index} <br />
              </span>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Retirement;
