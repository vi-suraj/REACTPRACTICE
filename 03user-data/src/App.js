import { useState } from "react";
import "./App.css";
import UserInputForm from "./components/UserInputForm";
import UserInputList from "./components/UserInputList";

function App() {
  const inputUserData = [];
  const [userData, setUserData] = useState(inputUserData);

  const onInputData = (data) => {
    setUserData((prev) => {
      return [...prev, data];
    });
  };

  console.log(userData);

  return (
    <div>
      <UserInputForm userData={onInputData} />
      <UserInputList data={userData} />
    </div>
  );
}

export default App;

