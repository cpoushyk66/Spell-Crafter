import styled from "styled-components";
import { Link } from "react-router-dom";


function StyledLink({linkTo, linkText}) {

    const StyledLink = styled.div`
        display: flex;
        flex: 1;
        align-items: center;
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

    return (
        <StyledLink><Link to={linkTo}>{linkText}</Link></StyledLink>
    )
}

export default StyledLink