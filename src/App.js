import React, { useState } from 'react';
import { Link, Router } from "react-router-dom";
import './App.scss';
import Logo from './assets/logo.png'

import PropBets from './components/PropBets/PropBets'
import NavBar from './components/NavBar'
import { NFL } from "./components"
<<<<<<< HEAD
import SideBar from './components/SideBar'
=======
import CardContainer from './components/CardContainer'

import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import { colors, buttonSize } from './theme/variables.js'

import './theme/index.js'

const NavContainer = styled.div`
background-color: #fff;
max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 2rem;
  flex-wrap: wrap;
`

const NavLinks = styled.div`

    a {
      padding-right: 50px;
      font-size: 2rem;
      color: ${colors.darkGrey};
      text-decoration: none;

      :hover {
        color: ${colors.primary}
      }

      :active {
        color: ${colors.primary}
      }
    }

`

const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const PageContent = styled.div`
  width: 100%;
  background: #fff;
  padding: 3rem 1rem;
`



>>>>>>> d4a0ecc71672b6eec9d70b4eac27807b265e2962
function App() {

  // const [result, setResult] = useState([]);
  const [sport, setSport] = useState("NFL");



  return (

    <div className="App">
      <GlobalStyle />

<<<<<<< HEAD
      <NavBar />
      {/* <SideBar /> */}
      <header className="navbar">
        <Link to="/"><h1>SportsBook</h1></Link>
        <nav>
          <Link onClick={() => { setSport('nfl') }}>NFL</Link>
          <Link onClick={() => { setSport('mlb') }}>MLB</Link>
          <Link onClick={() => { setSport('ncaa') }}>NCAA</Link>
          <Link onClick={() => { setSport('cfl') }}>CFL</Link>
          <Link onClick={() => { setSport('nba') }}>NBA</Link>
        </nav>
      </header>
=======
      <NavContainer>
        <NavRow>
          <Link to="/">
            <img alt='Logo' style={{ width: '60%' }} src={Logo} />
          </Link>
        </NavRow>
        <NavLinks>
          <NavRow>
            <Link onClick={() => { setSport('nfl') }}>NFL</Link>
            <Link onClick={() => { setSport('mlb') }}>MLB</Link>
            <Link to="/ncaa">NCAA</Link>
            <Link to="/cfl">CFL</Link>
            <Link to="/nba">NBA</Link>
            <NavBar />
          </NavRow>
        </NavLinks>
      </NavContainer>
      <CardContainer />
>>>>>>> d4a0ecc71672b6eec9d70b4eac27807b265e2962

      <main>
        <NFL sport={sport} />

      </main>
<<<<<<< HEAD
      <div>

        <PropBets />

      </div>
=======
      <PageContent>
        <PropBets />
      </PageContent>
>>>>>>> 3ebf0d09a341d58eef677882c329292f7df9fe65

    </div>
  )
}

export default App
