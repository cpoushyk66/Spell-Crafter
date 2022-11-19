import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../styles/StyledComponents";
import { UserContext } from "./App";
import SpellBookPage from "./SpellBookPage";
import SpellBooks from "./SpellBooks";

function SpellBookManager() {

    const userContext = useContext(UserContext)
    const navigate = useNavigate()
    const [currentBook, setCurrentBook] = useState(null)

    useEffect(() => {
        if (userContext.user == null)
            navigate("/login")
    }, [])

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