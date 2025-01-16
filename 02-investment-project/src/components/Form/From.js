import { useState } from "react";

const initialState = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const Form = (props) => {
  const [userInput, setUserInput] = useState(initialState);

  const investmentHandler = (e) => {
    e.preventDefault();
    props.calculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialState);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <form className="form" onSubmit={investmentHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={userInput["current-savings"]} onChange={(e) => inputChangeHandler("current-savings", e.target.value)} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={userInput["yearly-contribution"]} onChange={(e) => inputChangeHandler("yearly-contribution", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input type="number" id="expected-return" value={userInput["expected-return"]} onChange={(e) => inputChangeHandler("expected-return", e.target.value)} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={userInput["duration"]} onChange={(e) => inputChangeHandler("duration", e.target.value)} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
