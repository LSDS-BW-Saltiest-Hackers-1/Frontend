import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import * as yup from "yup";
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

const initialUsers = [];
const initialDisabled = true;

function Registration() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const registerUser = (newUser) => {
    axios
      .post("https://reqres.in/api/orders", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((error) => {
        console.error("Server Error", error);
      })
      .finally(() => {
        alert(
          `Thank you ${newUser.first_name}. Your registration has been received!`
        );
        console.log(
          `Thank you ${newUser.first_name}. Your registration has been received!`
        );
        setFormValues(initialFormValues);
      });
  };

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

  // const onCheckboxChange = (event) => {
  //   const { name } = event.target;
  //   const { checked } = event.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: checked,
  //   });
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = { ...formValues };
    registerUser(newUser);
  };

  useEffect(() => {
    RegFormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <RegistrationForm
        errors={formErrors}
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
      />
    </div>
  );
}

export default Registration;
