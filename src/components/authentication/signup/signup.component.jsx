import { useContext, useEffect, useState } from "react";
import "./signup.styles.scss";
import { useNavigate } from "react-router-dom";
import { signupInitial, handleSignup } from "./signup.utils";
import { UserContext } from "../../../contexts/users.context";

const SignUp = () => {
  const [signupFields, setSignUpFields] = useState(signupInitial);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user !== "") {
      navigate("/home");
    }
  }, [user]);

  const handleSignInClick = () => {
    navigate("/");
  };
  const { email, password } = signupFields;
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      handleSignup(signupFields);
    } else {
      window.alert("passwords don't match");
    }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setSignUpFields({ ...signupFields, [name]: value });
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <span className="signup-box-title">SIGN UP</span>
        <div>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="signup-input"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              className="signup-input"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <input
              type="text"
              className="signup-input"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleChange}
            />
            <button className="signup-button" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div className="signup-options-container">
          <span className="signin-link">
            Already a user?
            <span className="signin-button" onClick={handleSignInClick}>
              Sign In
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
