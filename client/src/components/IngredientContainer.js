import React from "react";
import styled from "styled-components";
import Ingredient from "./Ingredient";

const Ingredients = styled.div`

    width: 50%;
    float: left;
    text-align: center;
    margin: auto;


`

function IngredientContainer({ingredients}) {

    function ingredientList() {
        return ingredients.map(ingredient => <Ingredient ingredient={ingredient} />)
    }

    return (
        <Ingredients>
            {ingredients != null ? ingredientList() : null}
        </Ingredients>
    )
}

export default IngredientContainer