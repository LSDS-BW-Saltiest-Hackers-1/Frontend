import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Home from "../Pages/HomePage/Home";
import NavBar from "../NavBar/NavBar.js";
import UserHome from "../Pages/UserHome/UserHome";
import Login from "../Pages/Login";
import Registration from "../Pages/Register";

import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import GlobalStyle from "../../styles/Global";
import Cards from "../Pages/Cards";

function App({ token }) {
  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   axios.delete('https://saltiest-hacker-bw.herokuapp.com/api/users/12')
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, []);

  useEffect(() => {
    axios
      .get("https://saltiest-hacker-bw.herokuapp.com/api/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <GlobalStyle />
      {/* <Cards /> */}
      <Switch>
        {token ? (
          <PrivateRoute exact path="/" component={UserHome} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
  };
};

export default connect(mapStateToProps, {})(App);
