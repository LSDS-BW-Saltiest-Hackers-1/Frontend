import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/userActions.js';

function NavBar({ token, logoutUser }) {
  return (
    <nav className='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/search'>Search</Link>
      {token ? <Link to='/' onClick={logoutUser}>Logout</Link> : <Link to='/login'>Login</Link>}
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    token: state.userReducer.token
  };
};

export default connect(mapStateToProps, { logoutUser })(NavBar);
