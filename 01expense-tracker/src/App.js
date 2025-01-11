import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// const dummyExpense = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  const [expense, setExpense] = useState([]);

  const saveExpenseDataHandler = (enterdExpenseData) => {
    setExpense((prev) => {
      return [enterdExpenseData, ...prev];
    });
  };

  console.log(expense);

  return (
    <>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses items={expense} />

      {/* <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} /> */}

      {/*second approch passign whole data as props  */}
      {/* <ExpenseItems expenses={expenses[0]} /> */}
    </>
  );
}

export default App;
