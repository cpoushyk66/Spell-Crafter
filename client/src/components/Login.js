import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "./App";
import { Button } from "../styles/StyledComponents";

const LoginForm = styled.form`
    width: 100%;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    border-bottom: #1d6e00 5px ridge;
    background-color: #299a00;
    align-items: center;
    text-align: center;
    margin: auto;
    

    > p {
        font-size: 35px;
        text-align: center;
    }

    > label {
        text-align: center;
        font-size: 25px;
        margin-left: 10px;
        
    }
    > input {
        text-align: center;
        font-size: 25px;
        margin-right: 10px;
        border-radius: 10px;
    }
`

function Login() {

    const userContext = useContext(UserContext)

    const [loginUsername, setUsername] = useState("")
    const [loginPassword, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: loginUsername,
                password: loginPassword
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                    console.log(user)
                    userContext.setUser(user)
                })
            }
            else {
                res.json().then(data => console.log(data))
            }
        })
    }

    return (
        <LoginForm onSubmit={handleSubmit}>
            <p>Whisper the magic words to regain your compendiums...</p>
            <label htmlFor="username">Username: </label>
            <input value={loginUsername} name="username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username..." />
            <label htmlFor="password">Password: </label>
            <input value={loginPassword} name="password" type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
            
            <Button>Log in!</Button>
        
        </LoginForm>
    )
}

export default Login