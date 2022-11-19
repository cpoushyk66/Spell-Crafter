import React, { useState } from "react";
import styled from "styled-components";

const StyledIngredient = styled.div`

    background-color: #f2d4ff;
    height: 350px;
    overflow-y: auto;
    float: left;
    width: 25%;
    outline: black 3px solid;
    outline-offset: -3px;


    > p {
        text-align: center;
        font-size: 25px;

        > span {
            font-size: 15px;
        }
    }

`

const ExtraDetail = styled.p`

    color: black;

`

function Ingredient({ingredient}) {

    const [nameClicked, setNameClicked] = useState(false)
    const [nameHover, setNameHover] = useState(false)

    function extraDetails() {

        let details = {}

        if (ingredient.gender != null) {
            details = {...details, "Gender": ingredient.gender}
        }
        if (ingredient.planet != null) {
            details = {...details, "Planet": ingredient.planet}
        }
        if (ingredient.parts_used != null) {
            details = {...details, "Part Used": ingredient.parts_used}
        }
        if (ingredient.element != null) {
            details = {...details, "Element": ingredient.element}
        }
        if (ingredient.notes != null) {
            details = {...details, "Notes": ingredient.notes}
        }

        return Object.keys(details).map(key => <ExtraDetail style={{"fontSize": "20px"}} key={key}>{key}: {details[key]}</ExtraDetail>)
    }

    return (
        <StyledIngredient>
            <p  
                onMouseEnter={() => setNameHover(true)} 
                onMouseLeave={() => setNameHover(false)}
                style={{"color": nameClicked ? "blue" : "initial"}}
                >{ingredient.name} <span onClick={() => setNameClicked(!nameClicked)}>{nameClicked ? "🔒" : "🔓"}</span></p>
            {nameHover || nameClicked ? extraDetails() : null}
            <p>Quantity: {ingredient.quantity}</p>
            <p>Purpose: {ingredient.purpose}</p>
            <p>Instructions: {ingredient.instructions}</p>
        </StyledIngredient>
    )
}

export default Ingredient