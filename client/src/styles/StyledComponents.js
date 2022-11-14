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

export function StyledLink({linkTo, linkText}) {
    return (
        <StyledLinks><Link to={linkTo}>{linkText}</Link></StyledLinks>
    )
}

export const Button = styled.button`
    
    background-color: #9ab900;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    font-size: 25px;

    margin-left: 5px;
    margin-right: 5px;
    &:hover {
       
    }

    &:active {
        box-shadow: 0 0.3em 1em -0.5em #14a73e98;
    }

    animation:bouncy 5s infinite linear;
    position:relative;
    
    @keyframes bouncy {
        0%{top:0em}
        40%{top:0em}
        43%{top:-0.9em}
        46%{top:0em}
        48%{top:-0.4em}
        50%{top:0em}
        100%{top:0em;}
    }
`

export const Form = styled.div`
width: 100%;
padding-bottom: 15px;
padding-top: 5px;
border-bottom: #1d6e00 5px ridge;
background-color: #299a00;


> form {
    align-items: center;
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

> form div {
    flex: 3;
    flex-direction: column;
    width: 100%;
}

> p {
    font-size: 35px;
    text-align: center;
}

> form div label {
    flex: 1;
    text-align: center;
    font-size: 25px;
    
}
> form div input {
    flex: 2;
    text-align: center;
    font-size: 25px;
    border-radius: 10px;
}

> form button {
    flex: 1;
}
`

const LoadingStyle = styled.div`

    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {

        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;

        border-radius: 50%;
        
        background: radial-gradient(circle, #f59b4d, #479300, #c123ed, #336900, #f59b4d);
        background-size: 400% 400%;
        animation: loading 5s linear infinite;
        
        @keyframes loading {
            0% {
                background-position: 500% 50%;
                transform: scale(100%);
            }
            50% {
                background-position: 200% 50%;
                transform: scale(50%);
            }
            100% {
                background-position: 0% 500%;
                transform: scale(100%);
            }
        }
    }


`

export function Loading() {

    return (
        <LoadingStyle>
            <div>Loading</div>
        </LoadingStyle>
    )
}

export const Line = styled.div`
    width: 90%;
    height: 0;
    border-bottom: black 5px solid;
    text-align: center;
    margin: auto;
`