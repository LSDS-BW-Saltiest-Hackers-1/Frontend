import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { toggleMenu } from "../../redux/actions/navbarActions.js";

const Burgermenu = ({ isOpen, toggleMenu }) => {
  return (
    <Wrapper onClick={toggleMenu}>
      <div className={isOpen ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    isOpen: state.navbarReducer.isOpen
  };
};

export default connect(mapStateToProps, { toggleMenu })(Burgermenu);

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: 0.4rem;
    margin-bottom: 0.7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`;
