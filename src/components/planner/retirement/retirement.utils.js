export const pullRetirementPlan = async (
  fields,
  setFunction,
  setFunction2,
  setloaderClass
) => {
  setFunction([]);
  setFunction2([]);
  if (fields["currentAge"] === 0 || fields["currentAge"] === "") {
    return window.alert("Age cannot be 0");
  } else if (fields["currentSalary"] === 0 || fields["currentSalary"] === "") {
    return window.alert("Please enter your current salary to get a plan");
  } else if (fields["retirementAge"] === 0 || fields["retirementAge"] === "") {
    return window.alert("Please choose a retirement age");
  } else if (fields["retirementAge"] < fields["currentAge"]) {
    return window.alert("Retirement age cannot be lower than your current age");
  }
  setloaderClass("retirement-loader-visible");
  const userToken = localStorage.getItem("user");
  try {
    const response = await fetch(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/planner/retirementplan",
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
    var retirementString = result["text"];
    retirementString = retirementString.replace("\n\n", "");
    const retirementArray = retirementString.split("\n");
    const suggestionsArray = retirementArray.slice(0, 17);
    const otherArray = retirementArray.slice(18);
    setloaderClass("retirement-loader-hidden");
    setFunction(suggestionsArray);
    setFunction2(otherArray);
    console.log(otherArray);
  } catch (err) {
    console.log(err);
  }
};
