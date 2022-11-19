import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Line, Loading } from "../styles/StyledComponents";
import IngredientContainer from "./IngredientContainer";
import InstructionContainer from "./InstructionContainer";
import { UserContext } from "./App";

const Page = styled.div`

    width: 100%;
    height: 100%;
    margin: auto;

    > h1 {

        font-weight: normal;
        text-align: center;
        font-size: 40px;
    }

    > p {
        font-size: 30px;
        text-align: center;
    }
`

const SaveSpell = styled.button`

    margin: auto;
    display: flex;
    align-self: center;
    font-size: 25px;
    background-color: transparent;
    border: none;

    &:hover {

        color: red;
        background-color: #e7940560;
        border-radius: 10px;

    }

`

const SpellBookOptions = styled.div`

    text-align: center;
    background-color: #e7940560;

    > p {
        font-size: 30px;
    }

    > div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        > button {
            flex: 1;
            max-width: 33%;
            min-width: 25%;
            font-size: 25px;
            background-color: transparent;
            border: none;

            &:hover {

                color: red;
                background-color: #e7940560;
                border-radius: 10px;
        
            }
        }
    }



`

function SpellPage() {

    const location = useLocation()
    const userContext = useContext(UserContext)
    const navigate = useNavigate()
    const [spellData, setSpellData] = useState(null)
    const [addingSpell, setAddingSpell] = useState(false)


    useEffect(() => {

        if (location.state != null && location.state.spellId != null) {

            fetch(`/spells/${location.state.spellId}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(setSpellData)
                }
            })
        }
        else {
            navigate("/spell_books")
        }
        }, [])
        
    return (
        spellData != null ?
        <Page>
            <h1>{spellData.name} by {spellData.original_poster}</h1>
            <p>{spellData.description}</p>
            <SaveSpell onClick={() => setAddingSpell(!addingSpell)}>{addingSpell ? "Cancel" : "Copy Spell"}</SaveSpell>
            {addingSpell ? <SpellBookOptions>
                <p>Which spell book should we add this to?</p>
                <div>
                    {userContext.user.spell_books.map(spellBook => <button onClick={() => console.log("Whatup?")}>{spellBook.name}</button>)}
                </div>
            </SpellBookOptions> :
            null}
            <Line />
            <InstructionContainer instructions={spellData.instructions} />
            <IngredientContainer ingredients={spellData.ingredients} />
        </Page>
        :
        <Loading />
    )
}

export default SpellPage