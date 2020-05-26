import React from 'react';
import styled from 'styled-components';

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
    border: 5px solid blue;
    width: 50%;
    border-radius: 10px;
    margin-top: 8%;
    padding-bottom: 3%;
    height: 55vh;
`
const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: x-large;
    width: 90%;
    align-items: center;
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
`
function LoginForm(){
    return (
        <Wrapper>
            <Form>
                <Header>
                    Login
                </Header>
                <Label>
                    Username:
                    <Input type = 'text' name = 'username' />
                </Label>
                <Label>
                    Password:
                    <Input type = 'email' name = 'email' />
                </Label>
                <Button type = 'submit' name = 'submit' value = 'Submit' />
            </Form>
        </Wrapper>
    )
}
export default LoginForm;