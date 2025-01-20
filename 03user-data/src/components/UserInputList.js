import { useState } from "react";
import "./UserInputList.css";

const UserInputList = (props) => {
  const [showData, setShowData] = useState(false);
  return (
    <div className="user-data">
      {props.data.map((userData) => (
        <div className="particular-data" key={userData.id}>
          {userData["user-name"]} ({userData["user-age"]} Years Old)
        </div>
      ))}
    </div>
  );
};

export default UserInputList;
