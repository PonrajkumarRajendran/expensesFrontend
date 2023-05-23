export const navigationItems = {
  HOME: "active",
  MONTHLY_REPORT: "",
  PLANNER: "",
};
export const handleClick = (value, setFunction, navigateFunction) => {
  const navigationObject = {
    HOME: "",
    MONTHLY_REPORT: "",
    PLANNER: "",
  };
  setFunction({ ...navigationObject, [value]: "active" });
  localStorage.setItem("navigationFolder", value);
  var location;
  if (value.toLowerCase() === "home") {
    location = "/home";
  } else {
    location = value.toLowerCase();
  }
  navigateFunction(location);
};
