import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Line, Loading } from "../styles/StyledComponents";
import IngredientContainer from "./IngredientContainer";

const Page = styled.div`

    width: 100%;
    height: 100%;

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

function SpellPage() {

    const location = useLocation()
    const navigate = useNavigate()
    const [spellData, setSpellData] = useState(null)


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
            <h1>{spellData.name}</h1>
            <p>{spellData.description}</p>
            <Line />
            <IngredientContainer ingredients={spellData.ingredients} />
        </Page>
        :
        <Loading />
    )
}

export default SpellPage