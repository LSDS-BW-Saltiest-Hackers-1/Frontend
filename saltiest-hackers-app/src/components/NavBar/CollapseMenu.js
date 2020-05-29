import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/actions/navbarActions.js";
import { logoutUser } from "../../redux/actions/userActions.js";

import { useSpring, animated } from "react-spring";

const CollapseMenu = ({ token, isOpen, toggleMenu, logoutUser }) => {
  const { open } = useSpring({ open: isOpen ? 0 : 1 });

  if (isOpen === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            {!token && (
              <Link to="/register" onClick={toggleMenu}>
                Register
              </Link>
            )}
          </li>
          <li>
            {token ? (
              <Link to="/" onClick={logoutUser} onClick={toggleMenu}>
                Logout
              </Link>
            ) : (
              <Link to="/login" onClick={toggleMenu}>
                Login
              </Link>
            )}
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    isOpen: state.navbarReducer.isOpen,
  };
};

export default connect(mapStateToProps, { toggleMenu, logoutUser })(
  CollapseMenu
);

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
