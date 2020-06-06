import React from "react";

export const MainPage = (props) => {
  
  return (
    <div>
        <h1>Main Page</h1>
          <p>{`Привет, ${props.username}!`}</p>
        <button onClick={props.logout}>Выйти из аккаунта</button>
    </div>
  );
};
