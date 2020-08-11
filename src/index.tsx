import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";
import GlobalStyle from "index.styled";

import { PublicRoute, PrivateRoute } from "routes";
import { getDashboardPath, getLoginPath } from "utils/routes";
import configureStore from "store";

import Dashboard from "pages/Dashboard";
import Login from "pages/Login";

import * as serviceWorker from "serviceWorker";

const store = configureStore();

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />

    <Provider store={store}>
      <Router>
        <Switch>
          <PublicRoute exact path={getLoginPath()}>
            <Login />
          </PublicRoute>

          <PrivateRoute path={getDashboardPath()}>
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  </React.Fragment>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
