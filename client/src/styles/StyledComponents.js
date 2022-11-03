import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLinks = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 10px;
    &:hover {
        background: rgb(0, 0, 0, .75);
    }
    > a {
        text-align: center;
        font-family: Impact, Charcoal, sans-serif;
        font-size: 25px;
        letter-spacing: 2px;
        word-spacing: 2px;
        font-weight: 400;
        text-transform: uppercase;
        color: white;
        display: inline-block;
        text-decoration: none;
        width: 100%;
    }

    > a:hover {
        color: #195f00;
    }
`

function StyledLink({linkTo, linkText}) {
    return (
        <StyledLinks><Link to={linkTo}>{linkText}</Link></StyledLinks>
    )
}

export default StyledLink
