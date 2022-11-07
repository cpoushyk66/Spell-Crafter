import React, {useContext} from "react";
import styled from "styled-components";
import { UserContext } from "./App";
import Login from "./Login";

const StyledHeader = styled.h1`
    font-size: 50px;
    text-align: center;
`

function Home() {

    const userContext = useContext(UserContext)

    return (
        <div>
            <StyledHeader>Welcome to Spell Binder!</StyledHeader>
        </div>
    )
}

export default Home