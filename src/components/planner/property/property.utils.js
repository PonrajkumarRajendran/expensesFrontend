export const pullPropertyPlan = async (fields, setFunction, setloaderClass) => {
  setFunction("");

  const userToken = localStorage.getItem("user");
  if (fields["currentSalary"] === 0) {
    return window.alert("Salary cannot be 0");
  } else if (fields["currentPropertyValue"] === 0) {
    return window.alert("Give a property value");
  }
  setloaderClass("property-loader-visible");
  try {
    const response = await fetch(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/planner/propertyplan",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": userToken,
        },
        body: JSON.stringify(fields),
      }
    );
    const result = await response.json();
    var propertyString = result["text"];
    propertyString = propertyString.replace("\n\n", "");
    setloaderClass("property-loader-hidden");
    setFunction(propertyString);
  } catch (err) {
    console.log(err);
  }
};
