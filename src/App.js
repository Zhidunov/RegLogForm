import React, { useState } from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import { auth } from "./LogPass.js";
import "./App.scss";
import { Login, Register } from "./components/LogReg/index";
import { MainPage } from "./components/MainPage/MainPage";

const App = () => {

  let [isAuth, setIsAuth] = useState(false);

  let authUser = {};

  const login = (login, password) => {
    authUser = auth(login, password);
    if(authUser.isAuth){
      setIsAuth(true);
    }
    return isAuth;
  }

  const logout = () => {
    setIsAuth(false);
  }

  const registration = (values) => {
    alert(values);
  }

  return (
      <div className="App">
        <Switch>
          <Route exact path="/"
          render={() => {
            return (isAuth ? <MainPage logout={logout} authUser={authUser}/> : <Login login={login} isAuth={isAuth}/>)
          }}
          />
          <Route path="/register" render={() => <Register registration={registration}/>}/>
        </Switch>
      </div>
    );
}


const AppContainer = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  );
}



export default AppContainer;
