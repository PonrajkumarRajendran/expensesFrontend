export const inputInitial = {
  expenseTitle: "",
  expenseValue: 0,
  expenseType: "",
  expenseDate: "",
};
export const addExpense = async (fields) => {
  const userToken = localStorage.getItem("user");

  try {
    const response = await fetch(
      "https://serene-lokum-53b06d.netlify.app/.netlify/functions/api/expense/addexpense",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "auth-token": userToken,
        },
        body: JSON.stringify(fields),
      }
    );
    const result = await response.text();
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};
