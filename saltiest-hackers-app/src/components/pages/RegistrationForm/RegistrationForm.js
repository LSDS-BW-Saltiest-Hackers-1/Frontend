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

// const FormDiv = styled.div`
//   .first-name,
//   .last-name,
//   .username,
//   .password {
//     width: 40%;
//     padding: 0% 0 1% 0;
//     margin: 1% auto 1% auto;
//     background-color: #2ac4ef;
//     border-radius: 5px;
//   }

//   .submit {
//     width: 40%;
//     background-color: #2ac4ef;
//     border-radius: 5px;
//     padding: 0.5%;
//   }
// `;

// const RegistrationForm = (props) => {
//   const { values, onInputChange, onSubmit, disabled, errors } = props;

//   return (
//     <FormDiv className="form-container" onSubmit={onSubmit}>
//       <div className="title-container">
//         <h3>Register</h3>
//       </div>
//       <div className="errors">
//         <div>{errors.name}</div>
//         <div>{errors.username}</div>
//         <div>{errors.email}</div>
//         <div>{errors.password}</div>
//       </div>
//       <div className="first-name">
//         <h4>Enter Your First Name</h4>
//         <label>
//           <input
//             onChange={onInputChange}
//             type="text"
//             name="first_name"
//             value={values.first_name}
//           />
//         </label>
//       </div>
//       <div className="last-name">
//         <h4>Enter Your Last Name</h4>
//         <label>
//           <input
//             onChange={onInputChange}
//             type="text"
//             name="last_name"
//             value={values.last_name}
//           />
//         </label>
//       </div>
//       <div className="username">
//         <h4>Choose A Username</h4>
//         <label>
//           <input
//             onChange={onInputChange}
//             type="text"
//             name="username"
//             value={values.username}
//           />
//         </label>
//       </div>
//       <div className="password">
//         <h4>Choose a Password</h4>
//         <label>
//           <input
//             onChange={onInputChange}
//             type="text"
//             name="password"
//             value={values.password}
//           />
//         </label>
//       </div>
//       <div className="submit-button">
//         <p></p>
//         <button disabled={disabled} className="submit">
//           Submit
//         </button>
//       </div>
//     </FormDiv>
//   );
// };

// export default RegistrationForm;
