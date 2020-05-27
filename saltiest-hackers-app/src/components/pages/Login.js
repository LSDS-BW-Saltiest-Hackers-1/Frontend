import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { loginUser } from '../../redux/actions/userActions.js';

const Wrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    height: 100vh;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* border: 8px solid #0000ff; */
    width: 50%;
    border-radius: 4px;
    margin-top: 1%;
    padding-bottom: 3%;
    height: 55vh;
`
const Label = styled.label`
    display: flex;
    font-size: x-large;
    width: 60%;
`
const Input = styled.input`
    width: 60%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: x-large;
`
const Button = styled.input`
    border: 2px blue solid;
    width: 60%;
    cursor: pointer;
    font-size: x-large;
    border-radius: 4px;
    margin-top: 5%;
    color: #ffffff;
    background: #8080ff;
`
const Error = styled.p`
    color: red;
`
function LoginForm({ token, isLoading, loginError, loginUser }){
    const {register, handleSubmit, errors} = useForm();
    const history = useHistory();
    const onSubmit = values => {
        loginUser(values.username, values.password);
    };

    useEffect(() => {
        if (token) {
            history.push('/');
        }
    });

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {isLoading && <h2>Logging In...</h2>}
                {loginError && <h2>{loginError}</h2>}
                <Label>
                    Username
                </Label>
                <Input type = 'text' name = 'username' ref={register({required: true, max: 50, min: 15, maxLength: 50, message: 'Something wrong with your username!'})}
                />
                {errors.username && <Error>An Error has Occured! Min 15 Characters</Error>}
                <Label>
                    Password
                </Label>
                <Input type = 'password' name = 'password' ref={register({required: true, max: 50, min: 15, maxLength: 50})}
                />
                {errors.password && <Error>An Error has Occured! Min 15 Characters</Error>}
                <Button type = 'submit' name = 'submit' value = 'Log In' />
            </Form>
        </Wrapper>
    )
}

const mapStateToProps = state => {
  return {
    token: state.userReducer.token,
    isLoading: state.userReducer.isLoading,
    loginError: state.userReducer.error
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
