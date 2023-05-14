import Brand from "../brand/brand.component";
import Navigation from "../navigation/navigation.component";
import "./home.styles.scss";
import HomeLeft from "./homeleft/homeleft.component";
import HomeRight from "./homeright/homeright.component";
const Home = () => {
  return (
    <div className="home-container">
      {window.innerWidth > 1024 ? (
        <div className="home-desktop">
          <HomeLeft />
          <HomeRight />
        </div>
      ) : (
        <div className="home-mobile">
          <HomeLeft />
          <HomeRight />
        </div>
      )}
    </div>
  );
};
export default Home;
