import React, { useState } from "react";
import { StyledSpellBook } from "../styles/StyledComponents";

function SpellBook({spellBook}) {

    const [clicked, setClicked] = useState(false)

    return (
        <StyledSpellBook >
            <p onClick={() => setClicked(!clicked)}>{spellBook.name}</p>
            {clicked ? <p>{spellBook.description}</p> : null}
        </StyledSpellBook>
    )
}

export default SpellBook