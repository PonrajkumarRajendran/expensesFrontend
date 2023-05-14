import { useNavigate } from "react-router-dom";
import "./signin.styles.scss";
import { signinInitial, handleSignin } from "./signin.utils";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/users.context";
const SignIn = () => {
  const [signinFields, setSigninFields] = useState(signinInitial);
  const { email, password } = signinFields;
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (user !== "") {
      navigate("/home");
    }
  }, [user]);

  const handleClick = async () => {
    window.open("https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/user/auth/facebook", "_self");
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
          <span className="facebook-login-click" onClick={handleClick}>
            Login with facebook
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
