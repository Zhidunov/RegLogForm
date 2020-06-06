import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";



const WrappedApp = () => (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(<WrappedApp />, document.getElementById("root"));

// serviceWorker.unregister();
