export const signupInitial = {
  email: "",
  password: "",
};
export const handleSignup = async (signupFields, confirmPassword) => {
  try {
    const response = await fetch(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/email/signup",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(signupFields),
      }
    );
    const result = await response.json();
    localStorage.setItem("username", result["userName"]);
    localStorage.setItem("user", result["token"]);
    window.location.reload();
  } catch (err) {
    window.alert("Sign up issue");
  }
};
