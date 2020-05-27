import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ token, component: Component, ...rest }) {

  return (
    <Route {...rest} render={() => token ? <Component /> : <Redirect to='/'/>}/>
  );
};

const mapStateToProps = state => {
  return {
    token: state.userReducer.token
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);
