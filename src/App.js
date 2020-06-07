import React, { useState } from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import { auth, setNewUser } from "./LogPass.js";
import "./App.scss";
import { Login, Register } from "./components/LogReg/index";
import { MainPage } from "./components/MainPage/MainPage";


const App = () => {

  let [isAuth, setIsAuth] = useState(false);

  let [authUser, setAuthUser] = useState({});

  const login = (login, password) => {
    let user = auth(login, password);
    setAuthUser(user);
    if(user.isAuth){
      setIsAuth(true);
    }
    return isAuth;
  }

  const logout = () => {
    setIsAuth(false);
  }

  return (
      <div className="App">
        <Switch>
          <Route path="/main" render={() => <MainPage username={authUser.username} logout={logout} isAuth={isAuth} />}/>
          <Route exact path="/" render={() => <Login login={login} isAuth={isAuth}/>} />
          <Route path="/register" render={() => <Register />}/>
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
