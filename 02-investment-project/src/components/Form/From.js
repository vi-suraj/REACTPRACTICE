import { useState } from "react";

const Form = () => {
  const [currentSaving, setCurrentSaving] = useState("");
  const [yearlytSaving, setYearlytSaving] = useState("");
  const [expectedYear, setExpectedYear] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const investmentHandler = (e) => {
    e.preventDefault();
    setCurrentSaving("");
    setYearlytSaving("");
    setExpectedYear("");
    setInvestmentDuration("");
  };

  const onEnteredCurrentSaving = (e) => {
    setCurrentSaving(e.target.value);
  };

  const onEnteredYearlytSaving = (e) => {
    setYearlytSaving(e.target.value);
  };

  const onEnteredExpectedYear = (e) => {
    setExpectedYear(e.target.value);
  };

  const onEnteredInvestmentDuration = (e) => {
    setInvestmentDuration(e.target.value);
  };

  const resetHandler = () => {
    setCurrentSaving("");
    setYearlytSaving("");
    setExpectedYear("");
    setInvestmentDuration("");
  };

  return (
    <form className="form" onSubmit={investmentHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={onEnteredCurrentSaving} value={currentSaving} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={onEnteredYearlytSaving} value={yearlytSaving} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input type="number" id="expected-return" onChange={onEnteredExpectedYear} value={expectedYear} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={onEnteredInvestmentDuration} value={investmentDuration} />
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
