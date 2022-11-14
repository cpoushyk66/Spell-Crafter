import React, { useContext, useState } from "react";
import { Loading } from "../styles/StyledComponents";
import { UserContext } from "./App";
import SpellBookPage from "./SpellBookPage";
import SpellBooks from "./SpellBooks";

function SpellBookManager() {

    const userContext = useContext(UserContext)
    const [currentBook, setCurrentBook] = useState(null)

    function closeBook() {
        setCurrentBook(null)
    }
    return (
        userContext.user != null ? 
        <div>
            {currentBook == null ? <SpellBooks userContext={userContext} spellBooks={userContext.user.spell_books} setCurrentBook={setCurrentBook}
            />:
            <SpellBookPage spellBook={currentBook} closeBook={closeBook}/>}
        </div>
        :
        <Loading />
    )
}

export default SpellBookManager