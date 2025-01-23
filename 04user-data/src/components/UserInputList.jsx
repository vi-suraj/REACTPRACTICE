import "./UserInputList.css";

const UserInputList = (props) => {
  return (
    <div>
      {props.data.length !== 0 && (
        <div className="user-data">
          {props.data.map((userData) => (
            <div className="particular-data" key={userData.id}>
              {userData["user-name"]} ({userData["user-age"]} Years Old)
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserInputList;
