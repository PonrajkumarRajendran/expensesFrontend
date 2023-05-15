import { useContext, useState } from "react";
import "./allowanceModal.styles.scss";
import { AllowanceContext } from "../../../../contexts/allowance.context";
const AllowanceModal = () => {
  const { allowance, setAllowance } = useContext(AllowanceContext);
  const [allowanceValue, setAllowanceValue] = useState(allowance);
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllowance(allowanceValue);
  };
  const handleChange = (event) => {
    const { value } = event.target;
    setAllowanceValue(value);
  };
  return (
    <div className="allowance-modal-container">
      <div className="allowance-modal-box">
        <form onSubmit={handleSubmit}>
          <label className="allowance-modal-label">Add Allowance</label>
          <input
            type="number"
            className="allowance-modal-input"
            value={allowanceValue}
            onChange={handleChange}
            placeholder="Allowance"
          />
          <button type="submit" className="allowance-modal-submit">
            Modify Allowance
          </button>
        </form>
      </div>
    </div>
  );
};

export default AllowanceModal;
