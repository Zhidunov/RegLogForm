import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

const App = () => {



  return (
      <div className="App">
        <div className="login">
          <div className="container">
            <Register />
          </div>
        </div>
      </div>
    );
}


export default App;
