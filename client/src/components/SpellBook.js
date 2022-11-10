import React, { useState } from "react";
import styled from "styled-components";

const StyledSpellBook = styled.div`

    width: 20%;
    float: left;
    background-color: #b66d00;
    height: 200px;
    overflow-y: auto;
    outline: 3px black dashed;
    outline-offset: -3px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    
    > p, div p {
        font-size: 25px;
        text-align: center;
        width: 100%;
    }

    > p:hover {
        color: red;
    }

    > div button {
        background-color: transparent;
        border: none;
        margin: auto;
        font-size: 20px;
    }

    > div button:hover {
        color: blue;
    }
`

function SpellBook({spellBook}) {

    const [clicked, setClicked] = useState(false)

    return (
        <StyledSpellBook >
            <p onClick={() => setClicked(!clicked)}>{spellBook.name}</p>
            {clicked ? 
            <div>
                <p>{spellBook.description}</p>
                <button>Open Spell Book</button>
            </div> : null}
        </StyledSpellBook>
    )
}

export default SpellBook