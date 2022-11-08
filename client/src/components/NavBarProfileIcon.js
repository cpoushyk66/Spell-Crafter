import React, {useContext, useState} from "react";
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

    &:hover {
        border: #0b9083 3px solid;
    }
`
const StyledDiv = styled.div`
    
`

const LogoutButton = styled.button`
    margin: auto;
    background-color: transparent;
    border: none;
    font-size: 25px;

    &:hover {
        color: #0b9083;

    }
`

function NavBarProfileIcon() {

    const [clicked, setClicked] = useState(false)

    const navigate = useNavigate()

    const userContext = useContext(UserContext)

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        userContext.setUser(null)
        navigate("/")
    }

    return (
        <StyledNavBarProfileIcon>
            {userContext.user != null ?
            <StyledDiv>
                <StyledImage onClick={() => setClicked(!clicked)} src={userContext.user.image} />
                {clicked ? <div><LogoutButton onClick={handleLogout}>Log out?</LogoutButton></div> : null}
            </StyledDiv>
            :
            <StyledImage  onClick={() => navigate("/login")} src={"https://assets.stickpng.com/thumbs/5a461410d099a2ad03f9c998.png"}/>}
        </StyledNavBarProfileIcon>
    )

}


export default NavBarProfileIcon