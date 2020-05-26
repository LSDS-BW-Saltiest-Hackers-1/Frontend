import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};

const initialUsers = [];
const initialDiabled = true;

function Register() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDiabled);

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
          `Thank you ${newUser.name}. Your registration has been received!`
        );
        console.log(
          `Thank you ${newUser.name}. Your registration has been received!`
        );
        setFormValues(initialFormValues);
      });
  };

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const onCheckboxChange = (event) => {
    const { name } = event.target;
    const { checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const onSubmit = (event) => {
    event.preventdefault();
    const newUser = { ...formValues };
    registerUser(newUser);
  };

  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

export default App;
