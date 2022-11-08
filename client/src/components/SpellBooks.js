import React from "react";
import SpellBook from "./SpellBook";
import { StyledSpellBook } from "../styles/StyledComponents";
import styled from "styled-components";

const SpellBookContainer = styled.div`

    width: 100%;

`

function SpellBooks({spellBooks}) {

    function spellbookPopulate() {
        return spellBooks.map(spellBook => <SpellBook spellBook={spellBook} />)
    }

    return (
        <SpellBookContainer>
            {spellBooks != null ? spellbookPopulate() : null}
            <StyledSpellBook>
                <p>Create New Spell Book</p>
            </StyledSpellBook>
        </SpellBookContainer>
    )
}

export default SpellBooks