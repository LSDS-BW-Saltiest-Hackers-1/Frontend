import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Home from '../pages/HomePage/Home.js';
import NavBar from '../NavBar/NavBar.js';
import UserHome from '../pages/UserHome/UserHome.js';
import Login from '../pages/Login.js';

import PrivateRoute from "../PrivateRoute/PrivateRoute.js";

function App({ token }) {
  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   axios.put('https://saltiest-hacker-bw.herokuapp.com/api/users/5', {
  //     first_name: 'jim',
  //     last_name: 'jimmy',
  //     username: 'jimmy123',
  //     password: 'password'
  //   })
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, []);

  useEffect(() => {
    axios.get('https://saltiest-hacker-bw.herokuapp.com/api/users')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        {token ? <PrivateRoute exact path='/' component={UserHome}/> : <Route exact path='/' component={Home}/>}
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.userReducer.token
  };
};

export default connect(mapStateToProps, {})(App);
