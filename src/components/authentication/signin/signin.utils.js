export const signinInitial = {
  email: "",
  password: "",
};
export const handleSignin = async (signinFields) => {
  try {
    const response = await fetch(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/email/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(signinFields),
      }
    );
    const result = await response.json();
    localStorage.setItem("username", result["userName"]);
    localStorage.setItem("user", result["token"]);
    window.location.reload();
  } catch (err) {
    window.alert(err);
  }
};
