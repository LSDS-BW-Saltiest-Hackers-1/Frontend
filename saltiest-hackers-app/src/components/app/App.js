import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../Pages/HomePage/Home.js";
import NavBar from "../NavBar/NavBar.js";
import UserHome from "../Pages/UserHome/UserHome.js";

import PrivateRoute from "../PrivateRoute/PrivateRoute.js";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <NavBar />
      <Switch>
        {token ? (
          <PrivateRoute exact path="/" component={UserHome} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
      </Switch>
    </div>
  );
}

export default App;
