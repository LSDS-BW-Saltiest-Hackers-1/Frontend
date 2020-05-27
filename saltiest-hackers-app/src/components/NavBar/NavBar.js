import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='nav-bar'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/search'>Search</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
}

export default NavBar;
