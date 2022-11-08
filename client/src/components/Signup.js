import React, { useState, useContext } from "react";
import { Form, Button } from "../styles/StyledComponents";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom"

function Signup() {

    const navigate = useNavigate()

    const userContext = useContext(UserContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [birthday, setBirthday] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
                email: email,
                image: image,
                birthday: birthday
            })
        })
        .then(res => {
            if (res.ok) {
                res.json().then(user => {
                    console.log(user)
                    userContext.setUser(user)
                    navigate("/")
                })
            }
            else {
                res.json().then(data => console.log(data))
            }
        })
    }

    return (
        <Form>
            <p>Are you new here? Sign up below to get started!</p>
            <form onSubmit={handleSubmit}> 

                <div>
                    <label htmlFor="username">Username: </label>
                    <input value={username} name="username" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="username..." />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input value={password} name="password" type="text" onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input value={email} name="email" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="email..." />
                </div>
                <div>
                    <label htmlFor="image">image: </label>
                    <input value={image} name="image" type="text" onChange={(e) => setImage(e.target.value)} placeholder="image url..." />
                </div>
                <div>
                    <label htmlFor="birthday">Birthday (YYYY/MM/DD): </label>
                    <input value={birthday} name="birthday" type="text" onChange={(e) => setBirthday(e.target.value)} placeholder="birthday..." />
                </div>
                
                <Button>Signup!</Button>
            </form>
        
        </Form>
    )
}

export default Signup