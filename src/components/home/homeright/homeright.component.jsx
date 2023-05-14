import AddExpense from "../addExpense/addExpense.component";
import WeekReport from "../weekreport/weekreport.component";
import "./homeright.styles.scss";
const HomeRight = () => {
  return (
    <div className="homeright-container">
      <AddExpense />
      <WeekReport />
    </div>
  );
};
export default HomeRight;
