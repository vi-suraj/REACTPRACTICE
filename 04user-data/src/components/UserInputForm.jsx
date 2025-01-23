import { useState } from "react";

import "./UserInputForm.css";
import Modal from "./Modal";
import Wrapper from "./Wrapper";

const UserInputForm = (props) => {
  const [error, setError] = useState();
  const [userData, setUserData] = useState({
    "user-name": "",
    "user-age": "",
  });

  const inputHandler = (input, value) => {
    setUserData((prevData) => {
      return { ...prevData, [input]: value, id: Math.random() };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (userData["user-name"].trim().length === 0 || userData["user-age"].trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid Name And Age (Not Empty Filed)",
      });
      return;
    }

    if (+userData["user-age"] <= 0) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valid Age",
      });
      return;
    }

    props.userData(userData);
    setUserData({
      "user-name": "",
      "user-age": "",
    });
  };

  const errorModalBtn = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <Modal title={error.title} message={error.message} onConfirm={errorModalBtn} btn="Okay" />}

      <form onSubmit={formSubmitHandler}>
        <div className="form-body">
          <label htmlFor="user-input">Username</label>
          <input type="text" id="user-input" value={userData["user-name"]} onChange={(e) => inputHandler("user-name", e.target.value)} />
        </div>
        <div className="form-body">
          <label htmlFor="user-age">Age (Yrears)</label>
          <input type="number" id="user-age" value={userData["user-age"]} onChange={(e) => inputHandler("user-age", e.target.value)} />
        </div>
        <div className="form-body">
          <button type="submit">Add User</button>
        </div>
      </form>

      {/* {negativeAge && (
        <div className="modal">
          <div className="modal-outer">
            <div className="modal-inner">
              <div className="modal-head">
                <h2>Invalid Input</h2>
              </div>
              <div className="modal-content">
                <p>Please Enter Valid Age</p>
                <button onClick={() => setNegativeAge(false)}>Okay</button>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </Wrapper>
  );
};

export default UserInputForm;
