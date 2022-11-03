import React, { useContext, useState } from "react";
import { UserContext } from "./App";

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
        <div>
            <form onSubmit={handleSubmit}>
                <input value={loginUsername} onChange={(e) => setUsername(e.target.value)} placeholder="username..." />
                <input value={loginPassword} onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
                <button type="submit" />
            </form>
        </div>
    )
}

export default Login