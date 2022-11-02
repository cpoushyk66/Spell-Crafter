import React, {useState, createContext, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import "../App.css"

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then (res => {
      if (res.ok) {
        res.json().then(setUser)
      }
    })

  }, [])

  const UserContext = createContext()

  const UserContextValue = {
    user: user,
    setUser: setUser,
  }

  const StyledApp = styled.div`
    height: 100%;
  `



  return (
    <UserContext.Provider value={UserContextValue}>
      <StyledApp>

        <Routes>
          <Route exact path="/" element={<h1>Hello</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </StyledApp>
    </UserContext.Provider>
  );
}

export default App;
