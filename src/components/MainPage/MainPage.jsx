import React from "react";
import { Redirect } from "react-router-dom";

export const MainPage = (props) => {

  if(!props.isAuth) {
    return <Redirect to="/" />
  }
  
  return (
    <div>
        <h1>Main Page</h1>
          <p>{`Привет, ${props.username}!`}</p>
        <button onClick={props.logout}>Выйти из аккаунта</button>
    </div>
  );
};
