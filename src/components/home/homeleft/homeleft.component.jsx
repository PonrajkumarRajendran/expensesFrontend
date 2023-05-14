import Balance from "../balance/balance.component";
import Details from "../details/details.component";
import "./homeleft.styles.scss";
const HomeLeft = () => {
  return (
    <div className="homeleft-container">
      <Balance />
      <Details />
    </div>
  );
};
export default HomeLeft;
