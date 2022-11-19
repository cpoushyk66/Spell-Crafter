import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSpell = styled.div`

    width: 20%;
    height: 200px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
        text-align: center;
        font-size: 25px;

        &:hover {
            color: red;
        }
    }

`
function SpellPreview({spell}) {

    const navigate = useNavigate()

    const [isName, setIsName] = useState(false)

    return(
        <StyledSpell onMouseEnter={() => setIsName(false)} onMouseLeave={() => setIsName(true)} onClick={() => navigate(`/spell`, {state:{spellId: spell.id}})}>
            <p>{isName ? `${spell.name} by ${spell.original_poster}` : spell.description}</p>
        </StyledSpell>
    )

}

export default SpellPreview