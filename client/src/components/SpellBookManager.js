import React, { useContext, useState } from "react";
import { UserContext } from "./App";
import SpellBooks from "./SpellBooks";

function SpellBookManager() {

    const userContext = useContext(UserContext)
    const [currentBook, setCurrentBook] = useState(null)

    return (
        userContext.user != null ? 
        <div>
            <SpellBooks userContext={userContext} spellBooks={userContext.user.spell_books} setCurrentBook={setCurrentBook}/>
        </div>
        :
        <div>
            Loading...
        </div>
    )
}

export default SpellBookManager