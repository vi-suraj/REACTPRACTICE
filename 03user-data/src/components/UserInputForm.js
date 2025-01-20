import { useState } from "react";

import "./UserInputForm.css";

const UserInputForm = (props) => {
  const [emptyField, setEmptyField] = useState(false);
  const [negativeAge, setNegativeAge] = useState(false);
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

    if (userData["user-name"].length === 0 || userData["user-age"].length === 0) {
      setEmptyField(true);
      return;
    }

    if (userData["user-age"] <= 0) {
      setNegativeAge(true);
      return;
    }

    props.userData(userData);
    setUserData({
      "user-name": "",
      "user-age": "",
    });
  };
  return (
    <div>
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

      {emptyField && (
        <div className="modal">
          <div className="modal-outer">
            <div className="modal-inner">
              <div className="modal-head">
                <h2>Invalid Input</h2>
              </div>
              <div className="modal-content">
                <p>Please Enter a valid name and age (non-empty field)</p>
                <button onClick={() => setEmptyField(false)}>Okay</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {negativeAge && (
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
      )}
    </div>
  );
};

export default UserInputForm;
