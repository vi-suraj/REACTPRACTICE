import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2025");

  const onFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter select={filterYear} onFilterChange={onFilterHandler} />
      <ExpenseChart expense={filteredExpense} />
      <ExpenseList items={filteredExpense} />
      {/* <ExpenseItems title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
      <ExpenseItems title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
      <ExpenseItems title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
      <ExpenseItems title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} /> */}
    </Card>
  );
}

export default Expenses;
