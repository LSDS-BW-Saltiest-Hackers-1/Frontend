import React from "react";
import styled from "styled-components";

const FormDiv = styled.div`
  .first-name,
  .last-name,
  .username,
  .password {
    width: 40%;
    padding: 0% 0 1% 0;
    margin: 1% auto 1% auto;
    background-color: #2ac4ef;
    border-radius: 5px;
  }

  .submit {
    width: 40%;
    background-color: #2ac4ef;
    border-radius: 5px;
    padding: 0.5%;
  }
`;

const RegistrationForm = (props) => {
  const { values, onInputChange, onSubmit, disabled, errors } = props;

  return (
    <FormDiv className="form-container" onSubmit={onSubmit}>
      <div className="title-container">
        <h3>Register</h3>
      </div>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
      </div>
      <div className="first-name">
        <h4>Enter Your First Name</h4>
        <label>
          <input
            onChange={onInputChange}
            type="text"
            name="first_name"
            value={values.first_name}
          />
        </label>
      </div>
      <div className="last-name">
        <h4>Enter Your Last Name</h4>
        <label>
          <input
            onChange={onInputChange}
            type="text"
            name="last_name"
            value={values.last_name}
          />
        </label>
      </div>
      <div className="username">
        <h4>Choose A Username</h4>
        <label>
          <input
            onChange={onInputChange}
            type="text"
            name="username"
            value={values.username}
          />
        </label>
      </div>
      <div className="password">
        <h4>Choose a Password</h4>
        <label>
          <input
            onChange={onInputChange}
            type="text"
            name="password"
            value={values.password}
          />
        </label>
      </div>
      <div className="submit-button">
        <p></p>
        <button disabled={disabled} className="submit">
          Submit
        </button>
      </div>
    </FormDiv>
  );
};

export default RegistrationForm;
