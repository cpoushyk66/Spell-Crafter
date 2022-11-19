import React from "react";
import styled from "styled-components";

const Instructions = styled.div`

    width: 100%;
    background-color: #76a7dfc8;

    > p {
        text-align: center;
        color: white;
        font-size: 20px;
    }

`

function InstructionContainer({instructions}) {

    function populateInstructions() {
        let index = 1;
        return instructions.split("\n").map(instruction => <p key={index+"instructions"}>{index++}. {instruction}</p>)

    }

    return (
        <Instructions>
            {instructions != null ? populateInstructions() : null}
        </Instructions>
    )
}

export default InstructionContainer