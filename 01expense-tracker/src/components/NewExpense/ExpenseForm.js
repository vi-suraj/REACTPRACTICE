import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // 1.
  // onsubmit is event when the form is submit any form that has type submit can be used the on submit event handler

  // two way binding where you do two things in one input like onChange to hanlde the change in the value and value method to clear that previous enterd value

  // 2. child to paraent component communication

  // props can only be passed from parent to child and you cant skip any componet same as when you pass the data from child to parent you cant skip the component

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    props.onSaveExpenseData(expenseData);
  };

  const [formShow, setFormShow] = useState(false);

  return (
    <div>
      <form onSubmit={submitHandler}>
        {formShow && (
          <div className="new-expense__controls ">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" min="2023-01-01" max="2026-01-01" value={enteredDate} onChange={dateChangeHandler} />
            </div>
          </div>
        )}
        <div className={formShow === true ? "new-expense__actions" : "new-expense__actions center"}>
          <button type="text" onClick={() => setFormShow(!formShow)}>
            {formShow === true ? "Cancel" : "Add New Expense"}
          </button>
          {formShow && <button type="submit">Add Expense</button>}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
