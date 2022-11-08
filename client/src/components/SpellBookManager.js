import React, { useContext } from "react";
import { UserContext } from "./App";
import SpellBooks from "./SpellBooks";

function SpellBookManager() {

    const userContext = useContext(UserContext)

    return (
        <div>
            <SpellBooks spellBooks={userContext.user.spell_books} />
        </div>
    )
}

export default SpellBookManager