import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

// function ExpenseItems(props) {
//   return (
//     <div className="expense-item">
//       <div>{props.expenses.date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.expenses.title}</h2>
//         <div className="expense-item__price">${props.expenses.amount}</div>
//       </div>
//     </div>
//   );
// }

// function ExpenseItems({ date, title, amount }) {
//   return (
//     <div className="expense-item">
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${amount}</div>
//       </div>
//     </div>
//   );
// }

export default ExpenseItems;
