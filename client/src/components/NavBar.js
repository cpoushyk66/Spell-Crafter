import React from "react";
import {StyledLink} from "../styles/StyledComponents";
import styled from "styled-components";
import NavBarProfileIcon from "./NavBarProfileIcon";

const StyledNavbar = styled.div`
    display: flex;
    flex-direction: row;
    // background-color: #165100;
    align-items: center;
    border-bottom: #124400 10px ridge;
    margin: auto;

    background: linear-gradient(-45deg, #f59b4d, #479300, #c123ed, #336900, #f59b4d);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

     
    `

const SiteHeader = styled.h1`
    flex: 2;
    text-align: center;
    color: #d8ffca;
    align-self: center;
    font-weight: normal;
    font-size: xxx-large;

`

function NavBar() {

    return (
        <StyledNavbar>
            <SiteHeader>Spell Binder</SiteHeader>
            <StyledLink linkTo={"/"} linkText={"Home"} />
            <StyledLink linkTo={"/spell_books"} linkText={"Spell Books"} />
            <StyledLink linkTo={"/community"} linkText={"Community"} />
            <StyledLink linkTo={"/spell_maker"} linkText={"Spell Maker"} />
            <NavBarProfileIcon />
        </StyledNavbar>
    )
}

export default NavBar