import React, {useContext} from "react";
import styled from "styled-components";
import { UserContext } from "./App";
import Login from "./Login";

const StyledHeader = styled.h1`
    font-size: x-large;
`

function Home() {

    const userContext = useContext(UserContext)

    return (
        <div>
            <StyledHeader>{userContext.user != null ? `Welcome back ${userContext.user.username}` : "Please login to see stuff."}</StyledHeader>
        </div>
    )
}

export default Home