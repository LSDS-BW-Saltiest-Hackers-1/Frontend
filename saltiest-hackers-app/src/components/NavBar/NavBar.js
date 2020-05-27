import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ token, logoutUser }) {
  return (
    <nav className='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/search'>Search</Link>
      {/* {token ?  : } */}
    </nav>
  );
}

const mapStateToProps = state => {
  token: state.userReducer.token
};

export default connect(mapStateToProps, { logoutUser })(NavBar);
