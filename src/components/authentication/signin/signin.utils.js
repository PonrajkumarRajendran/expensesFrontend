export const signinInitial = {
  email: "",
  password: "",
};
export const handleSignin = async (signinFields) => {
  try {
    const response = await fetch("http://localhost:5000/api/email/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signinFields),
    });
    const result = await response.json();
    localStorage.setItem("username", result["userName"]);
    localStorage.setItem("user", result["token"]);
    window.location.reload();
  } catch (err) {
    window.alert("Sign in issue");
  }
};
