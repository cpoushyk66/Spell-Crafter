import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "./App";
import { Button, Form } from "../styles/StyledComponents";
import {useNavigate} from "react-router-dom"


function Login() {

    const userContext = useContext(UserContext)
    const navigate = useNavigate()

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
                    userContext.setUser(user)
                    navigate('/')
                })
            }
            else {
            }
        })
    }

    return (
        <Form >
            <p>Whisper the magic words to regain your compendiums...</p>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="username">Username: </label>
                    <input value={loginUsername} name="username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username..." />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input value={loginPassword} name="password" type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
                </div>
                
                <Button>Log in!</Button>
        
            </form>
        </Form>
    )
}

export default Login