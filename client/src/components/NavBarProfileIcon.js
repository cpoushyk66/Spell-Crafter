import React, {useContext} from "react";
import { UserContext } from "./App";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledNavBarProfileIcon = styled.div`
        flex: 1;
        text-align: center;
        height: 100%;
    `

const StyledImage = styled.img`
    height: 50px;
    width: auto;
    border-radius: 50%;
`

function NavBarProfileIcon() {

    const navigate = useNavigate()

    const userContext = useContext(UserContext)

    return (
        <StyledNavBarProfileIcon>
            {userContext.user != null ?
            <StyledImage src={userContext.user.image} />
            :
            <StyledImage  onClick={() => navigate("/login")} src={"http://assets.stickpng.com/thumbs/5a461418d099a2ad03f9c999.png"}/>}
        </StyledNavBarProfileIcon>
    )

}


export default NavBarProfileIcon