export const getWeekExpenses = async (setFunction) => {
  const todayDate = new Date();
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    var tempString = todayDate.toISOString();
    var tempString = tempString.slice(0, 10);
    weekDates.push(tempString);
    todayDate.setDate(todayDate.getDate() - 1);
  }
  var results = {};
  weekDates.map(async (index) => {
    const requestObject = {
      dates: index,
    };
    const userToken = localStorage.getItem("user");
    try {
      const response = await fetch(
        "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/expense/getweekexpense",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "auth-token": userToken,
          },
          body: JSON.stringify(requestObject),
        }
      );
      const result = await response.json();
      results = { ...results, [index]: result };
      setFunction(results);
    } catch (err) {
      console.log(err);
    }
  });
};
export const deleteOneExpense = async (id) => {
  const requestObject = {
    id: id,
  };
  const userToken = localStorage.getItem("user");
  try {
    const response = await fetch(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/expense/deleteexpense",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": userToken,
        },
        body: JSON.stringify(requestObject),
      }
    );
    const result = await response.text();
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
export const getTypeExpenses = async (setFunction) => {
  const userToken = localStorage.getItem("user");
  const todayDate = new Date();
  const dateString = todayDate.toISOString();
  const monthValue = dateString.slice(5, 7) + "/" + dateString.slice(0, 4);
  const requestObject = {
    monthValue: monthValue,
  };
  try {
    const response = await fetch(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/expense/getmonthstotal",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": userToken,
        },
        body: JSON.stringify(requestObject),
      }
    );
    const result = await response.json();
    setFunction(result);
  } catch (err) {
    console.log(err);
  }
};
