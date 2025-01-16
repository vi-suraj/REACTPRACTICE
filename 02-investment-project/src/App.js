import { useState } from "react";
import Form from "./components/Form/From";
import Header from "./components/Header/Header";
import Table from "./components/Table/Tabel";

function App() {
  const [results, setResults] = useState(null);

  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResults(yearlyData);

    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <Form calculate={calculateHandler} />

      {!results && <p>No Investment Calculated Yet.</p>}

      {results && <Table data={results} />}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
