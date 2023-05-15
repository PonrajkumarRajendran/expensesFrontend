import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../contexts/users.context";

const MiddlePage = () => {
  var { token } = useParams();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("inside");
    if (token) {
      localStorage.setItem("user", token);
      setUser(token);
      navigate("/home");
    }
  }, []);
  return <div></div>;
};
export default MiddlePage;
