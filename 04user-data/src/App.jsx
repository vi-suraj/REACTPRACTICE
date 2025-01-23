import { useState } from "react";

import "./App.css";
import UserInputList from "./components/UserInputList";
import UserInputForm from "./components/UserInputForm";

function App() {
  const inputUserData = [];
  const [userData, setUserData] = useState(inputUserData);

  const onInputData = (data) => {
    setUserData((prev) => {
      return [...prev, data];
    });
  };
  return (
    <>
      <div>
        <UserInputForm userData={onInputData} />
        <UserInputList data={userData} />
      </div>
    </>
  );
}

export default App;

