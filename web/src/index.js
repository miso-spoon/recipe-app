import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import * as serviceWorker from "./serviceWorker";

/* Components */
import App from "./App";

/* Store */
import configureStore from "./store/configure-store";

/* Styles */
import "./index.scss";

const store = configureStore();

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
