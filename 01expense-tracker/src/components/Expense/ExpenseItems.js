import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// how stats works under the hood

// when you intialize the state it store the value of props.title in title for the first time

// when the click event occur then state update occur where we tell react to re render the component where the state changed

// when react re render that component it remembers that the stats was rendered before and take the setTitle value and change the value of the title

// in the state we use const because we do not assign value using assignment operator we pass value to setTitle where react handle the value

// state are seperated on a per component instance basis

function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);

  const titleHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={titleHandler}>Update Title</button>
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
