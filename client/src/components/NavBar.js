import React from "react";
import StyledLink from "../styles/StyledComponents";
import styled from "styled-components";
import NavBarProfileIcon from "./NavBarProfileIcon";

const StyledNavbar = styled.div`
        display: flex;
        flex-direction: row;
        background-color: #165100;
        align-items: center;
    `

const SiteHeader = styled.h1`
    flex: 2;
    text-align: center;
    color: #d8ffca;
    align-self: center;

`

function NavBar() {

    return (
        <StyledNavbar>
            <SiteHeader>Spell Binder</SiteHeader>
            <StyledLink linkTo={"/"} linkText={"Home"} />
            <StyledLink linkTo={"/000"} linkText={"Spell Books"} />
            <StyledLink linkTo={"/000"} linkText={"Community"} />
            <StyledLink linkTo={"/000"} linkText={"Spell Maker"} />
            <NavBarProfileIcon />
        </StyledNavbar>
    )
}

export default NavBar