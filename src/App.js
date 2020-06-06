import React from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import "./App.scss";
import { Login, Register } from "./components/LogReg/index";

const App = () => {



  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
}


// const wrappedApp = withRouter(App);

const AppContainer = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  );
}



export default AppContainer;
