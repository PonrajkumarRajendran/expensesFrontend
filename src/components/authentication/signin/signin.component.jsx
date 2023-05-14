import { useNavigate } from "react-router-dom";
import "./signin.styles.scss";
import { signinInitial, handleSignin } from "./signin.utils";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/users.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
const SignIn = () => {
  const [signinFields, setSigninFields] = useState(signinInitial);
  const { email, password } = signinFields;
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user !== "") {
      navigate("/home");
    }
  }, [user]);

  const handleClick = async () => {
    window.open(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/user/auth/facebook",
      "_self"
    );
  };
  const handleSignUpclick = () => {
    navigate("signup");
  };
  const handleSigninClick = (event) => {
    event.preventDefault();
    handleSignin(signinFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigninFields({ ...signinFields, [name]: value });
  };
  return (
    <div className="signin-container">
      <div className="signin-box">
        <span className="signin-box-title">SIGN IN</span>
        <form onSubmit={handleSigninClick}>
          <input
            type="text"
            className="signin-input"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={handleChange}
          />
          <input
            type="password"
            className="signin-input"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <div className="signin-options">
          <span className="signup-navigate-link">
            New Here?
            <span className="signup-button" onClick={handleSignUpclick}>
              Sign Up
            </span>
          </span>
          <div className="signin-or-container">
            <span className="signin-or">OR</span>
          </div>
          <span className="facebook-login-click" onClick={handleClick}>
            <FontAwesomeIcon className="facebook-icon" icon={faFacebook} />
            Login with facebook
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
