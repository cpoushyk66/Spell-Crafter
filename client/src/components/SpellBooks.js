import React, { useState } from "react";
import SpellBook from "./SpellBook";
import styled from "styled-components";
import { Form } from "../styles/StyledComponents";

const SpellBookContainer = styled.div`

    width: 100%;

`

const AddSpellBook = styled.div`

    width: 20%;
    float: left;
    background-color: #b66d00;
    height: 200px;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 3px black dashed;
    outline-offset: -3px;
    
    > p, form p {
        font-size: 25px;
        text-align: center;
    }

    > p:hover {
        color: red;
    }

    > form {
        width: 100%;
        margin: auto;
        padding-bottom: 10px;
        text-align: center;
    }

    > form div {
        width: 100%;
    }

    > form div button {
        width: 50%;
        background-color: transparent;
        border: none;
        outline: 3px black dashed;
        outline-offset: -3px;
        font-size: 25px;

        &:hover {
            color: white;
            background-color: #e7940560;
        }

    }

    > form input {
        width: 80%;
    }
`

function SpellBooks({userContext, spellBooks, setCurrentBook}) {

    const [addBook, setAddBook] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    function spellbookPopulate() {
        return spellBooks.map(spellBook => <SpellBook spellBook={spellBook} />)
    }

    function submitBook(e) {

        e.preventDefault()

        fetch("/spell_books", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: name,
                description: description,
                user_id: userContext.user.id
            })
        })
        .then(res => {
            if (res.ok) {
                userContext.refresh()
            }
        })
    }

    return (
        <SpellBookContainer>
            {spellBooks != null ? spellbookPopulate() : null}
            <AddSpellBook>
                {!addBook ? 
                <p onClick={() => setAddBook(true)}>Create New Spell Book</p>
                :
                    <form onSubmit={submitBook}> 
                        
                        <div>
                            <button onClick={() => setAddBook(false)}>Cancel</button>
                            <button type="submit">Add Book</button>
                        </div>

                        <p>Name</p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="ex: Healing Spell, Abundance Spells, Spell Book #9"/>

                        <p>Description</p>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="ex: My favorite Hexes, Weekend Rituals"/>
                        
                    </form>
                }
            </AddSpellBook>
        </SpellBookContainer>
    )
}

export default SpellBooks