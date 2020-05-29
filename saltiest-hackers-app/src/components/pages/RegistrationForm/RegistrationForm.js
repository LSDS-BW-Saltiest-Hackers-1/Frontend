import React from "react";
import styled from "styled-components";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
  CardLink,
} from "../FormStyles";

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RegistrationForm = (props) => {
  const { values, onInputChange, onSubmit, disabled, errors } = props;

  return (
    <Wrapper>
      <CardWrapper onSubmit={onSubmit}>
        <CardHeader>
          <CardHeading>Sign Up</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder="First Name"
              type="text"
              name="first_name"
              // value={values.first_name}
              onChange={onInputChange}
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Last Name"
              type="text"
              name="last_name"
              // value={values.last_name}
              onChange={onInputChange}
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Username"
              type="text"
              name="username"
              // value={values.username}
              onChange={onInputChange}
            />
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Password"
              type="password"
              name="password"
              // value={values.password}
              onChange={onInputChange}
            />
          </CardFieldset>
          <CardFieldset>
            <CardButton onClick={onSubmit} disabled={disabled} type="button">
              Sign Up
            </CardButton>
          </CardFieldset>
          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </Wrapper>
  );
};

export default RegistrationForm;
