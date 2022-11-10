import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SpellPreview from "./SpellPreview";

const Page = styled.div`

    width: 100%;
    
    text-align: center;

    > h1, h2 {
        text-align: center;
        font-weight: normal;
    }

    > button {
        background-color: transparent;
        border: none;
        font-size: 20px;

        &:hover {
            color: red;
        }
    }

`

const SpellContainer = styled.div`

    width: 100%;
    border-top: #124400 10px ridge;

`

const AddSpell = styled.div`

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


function SpellBookPage({spellBook, closeBook}) {

    const [spellBookData, setSpellBookData] = useState(null)

    useEffect(() => {
        fetch(`/spell_books/${spellBook.id}`)
        .then(res => {
            if (res.ok) {
                res.json().then(setSpellBookData)
            }
        })
    }, [])

    return (
        <Page>
            <h1>{spellBook.name}</h1>
            <h2>{spellBook.description}</h2>
            <button onClick={closeBook}>Close Book</button>

            <SpellContainer>
                {spellBookData != null ? spellBookData.spells.map(spell => <SpellPreview spell={spell} />) : null}
                <AddSpell>
                    <p>Add New Spell</p>
                </AddSpell>
            </SpellContainer>

        </Page>
    )
}

export default SpellBookPage