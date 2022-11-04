import React, {useState, createContext, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import "../App.css"
import Home from './Home';
import LoginManager from './LoginManager';
import NavBar from './NavBar';

export const UserContext = createContext()

const StyledApp = styled.div`
  height: 100%;
  `

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


  const UserContextValue = {
    user: user,
    setUser: setUser,
  }

  
  
  
  
  
  return (
    <UserContext.Provider value={UserContextValue}>
      <StyledApp>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginManager />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </StyledApp>
    </UserContext.Provider>
  );
}

export default App;
