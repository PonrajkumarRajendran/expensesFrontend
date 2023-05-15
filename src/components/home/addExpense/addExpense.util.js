export const inputInitial = {
  expenseTitle: "",
  expenseValue: 0,
  expenseType: "",
  expenseDate: "",
};
export const addExpense = async (fields) => {
  const userToken = localStorage.getItem("user");
  if (fields["expenseTitle"] === "") {
    window.alert("Add a title to your expense");
  } else if (fields["expenseValue"] <= 0) {
    window.alert("Expense has to be more than zero");
  } else if (fields["expenseType"] === "") {
    window.alert("Please select a type and submit");
  } else if (fields["expenseDate"] === "") {
    window.alert("Choose a date value");
  } else {
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
  }
};
