import React from "react";

function IngredientContainer({ingredients}) {

    function ingredientList() {
        return ingredients.map(ingredient => <p>1</p>)
    }

    return (
        <div>
            {ingredients != null ? ingredientList() : null}
        </div>
    )
}

export default IngredientContainer