import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
// import styled from "styled-components";
// import { Route, Switch, Link } from "react-router-dom";
import * as yup from "yup";
import {
  registerUser,
  clearNewUserData,
} from "../../redux/actions/userActions.js";

import RegistrationForm from "./RegistrationForm/RegistrationForm";
import RegFormSchema from "./RegistrationForm/RegFormSchema";

const initialFormValues = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
};

// const initialUsers = [];
const initialDisabled = true;

function Registration({
  newUser,
  registrationError,
  registerUser,
  clearNewUserData,
}) {
  // const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    yup
      .reach(RegFormSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newUserValues = { ...formValues };
    registerUser(newUserValues);
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    RegFormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  useEffect(() => {
    if (Object.keys(newUser).length !== 0) {
      alert(
        `Thank you ${newUser.first_name} ${newUser.last_name}. Your username is ${newUser.username} and your registration has been received!`
      );
      console.log(
        `Thank you ${newUser.first_name} ${newUser.last_name}. Your username is ${newUser.username} and your registration has been received!`
      );
      clearNewUserData();
      history.push("/login");
    }
  });

  return (
    <div className="App">
      <RegistrationForm
        errors={formErrors}
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
      />
      {registrationError && <h2>{registrationError}</h2>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.userReducer.isLoading,
    registrationError: state.userReducer.error,
    newUser: state.userReducer.newUser,
  };
};

export default connect(mapStateToProps, { registerUser, clearNewUserData })(
  Registration
);
