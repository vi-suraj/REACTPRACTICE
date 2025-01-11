import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const onFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter select={filterYear} onFilterChange={onFilterHandler} />

      {props.items.map((expense) => (
        <ExpenseItems title={expense.title} amount={expense.amount} date={expense.date} />
      ))}

      {/* <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
      <ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
      <ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      <ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
    </Card>
  );
}

export default Expenses;
