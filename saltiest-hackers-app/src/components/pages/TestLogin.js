import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardInput,
  CardButton,
} from "./FormStyles";
import "./styles.css";

const TestLogin = () => {
  return (
    <div className="TestLogin">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder="Username"
              type="text"
              name="username"
              ref={register({
                required: true,
                max: 50,
                min: 15,
                maxLength: 50,
                message: "Something wrong with your username!",
              })}
            />
            {errors.username && (
              <Error>An Error has Occurred! Min 15 Characters</Error>
            )}
          </CardFieldset>
          <CardFieldset>
            <CardInput
              placeholder="Password"
              type="password"
              name="password"
              ref={register({
                required: true,
                max: 50,
                min: 15,
                maxLength: 50,
              })}
            />
            {errors.password && (
              <Error>An Error has Occurred! Min 15 Characters</Error>
            )}
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button" name="submit" value="Log In">
              Sign In
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
};

export default TestLogin;
