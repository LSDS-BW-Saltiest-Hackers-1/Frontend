import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

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
function LoginForm(){
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = values => console.log(values);


    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>
                    Username
                </Label>
                <Input type = 'text' name = 'username' ref={register({
                     validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.username && errors.username.message}
                <Label>
                    Password
                </Label>
                <Input type = 'password' name = 'password' ref={register({max: 50, min: 15, maxLength: 50})}
                />
                {errors.password && errors.password.message}
                <Button type = 'submit' name = 'submit' value = 'Log In' />
            </Form>
        </Wrapper>
    )
}
export default LoginForm;