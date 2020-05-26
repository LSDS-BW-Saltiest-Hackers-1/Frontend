import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 8px solid blue;
    width: 50%;
    border-radius: 10px;
    margin-top: 8%;
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
const Header = styled.h1`
    font-size: xx-large;
`
const Button = styled.input`
    border: 2px blue solid;
    width: 20%;
    cursor: pointer;
    font-size: x-large;
    border-radius: 4px;
    margin-top: 2.5%;
`
function LoginForm(){
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = values => console.log(values);


    return (
        <Wrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    Login
                </Header>
                <Label>
                    Username:
                </Label>
                <Input type = 'text' name = 'username' ref={register({
                     validate: value => value !== "admin" || "Nice try!"
                    })}
                />
                {errors.username && errors.username.message}
                <Label>
                    Password:
                </Label>
                <Input type = 'password' name = 'password' ref={register({max: 50, min: 15, maxLength: 50})}
                />
                {errors.username && errors.username.message}
                <Button type = 'submit' name = 'submit' value = 'Submit' />
            </Form>
        </Wrapper>
    )
}
export default LoginForm;