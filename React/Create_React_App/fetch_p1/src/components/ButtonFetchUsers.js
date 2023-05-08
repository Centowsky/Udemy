import React from "react";
const ButtonFetchUsers = (props) => {
  return (
    <button
      style={{
        padding: "10px 10px",
        border: "2px solid black",
        margin: "20px",
      }}
      onClick={props.click}
    >
      Dodaj użytkownika
    </button>
  );
};

export default ButtonFetchUsers;
