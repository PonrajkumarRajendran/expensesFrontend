export const inputInitial = {
  expenseTitle: "",
  expenseValue: 0,
  expenseType: "",
  expenseDate: "",
};
export const addExpense = async (fields) => {
  const userToken = localStorage.getItem("user");
  console.log("inside");
  try {
    const response = await fetch(
      "http://localhost:5000/api/expense/addexpense",
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
