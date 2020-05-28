import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/HomePage/Home.js";
import NavBar from "../NavBar/NavBar";
import UserHome from "../Pages/UserHome/UserHome.js";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import "./App.css";
import GlobalStyle from "../../styles/Global";
import Cards from "../Pages/Cards";
import TestLogin from "../Pages/TestLogin";
import RegistrationForm from "../Pages/RegistrationForm/RegistrationForm";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <NavBar />
      {/* <GlobalStyle /> */}
      {/* <Cards /> */}
      <Switch>
        {token ? (
          <PrivateRoute exact path="/" component={UserHome} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
      </Switch>
      <RegistrationForm />
    </div>
  );
}

export default App;
