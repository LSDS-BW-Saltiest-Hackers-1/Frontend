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
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>
          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">Sign In</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
  );
};

export default TestLogin;
