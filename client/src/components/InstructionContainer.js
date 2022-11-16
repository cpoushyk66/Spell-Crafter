import React from "react";
import styled from "styled-components";

const Instructions = styled.div`

    float: left;
    width: 50%;
    background-color: #5e6bf9;

    > p {
        
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