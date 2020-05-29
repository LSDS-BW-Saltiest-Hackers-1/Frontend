import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Home from "../pages/HomePage/Home";
import NavBar from "../NavBar/NavBar.js";
import UserHome from "../pages/UserHome/UserHome";
import Login from "../pages/Login";
import Registration from "../pages/Register";
import SavedPage from "../pages/SavedPage/SavedPage";

import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import GlobalStyle from "../../styles/Global";

function App({ token }) {
  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   axios.delete('https://saltiest-hacker-bw.herokuapp.com/api/users/19')
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

  // useEffect(() => {
  //   axios
  //     .get("https://saltyapp.herokuapp.com/top20_saltiest_users")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <GlobalStyle />
      <Switch>
        {token ? (
          <PrivateRoute exact path="/" component={UserHome} />
        ) : (
          <Route exact path="/" component={Home} />
        )}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        {/* <Route path="/about" component={About} /> */}
        {/* <PrivateRoute path="/account" component={AccountPage} /> */}
        <PrivateRoute path="/saved" component={SavedPage} />
        {/* <PrivateRoute path="/search" component={SearchPage} /> */}
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
