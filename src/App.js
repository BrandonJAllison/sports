import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from './assets/logo.png'


import PropBets from './components/PropBets/PropBets'
import { PropBetsContainer, PropBetsHeader, StyledButton, Flex } from './components/PropBets/styledComponents/'
import NavBar from './components/NavBar'
import BetSlip from './components/betSlip'
// import { NFL } from "./components/Nfl"

// import SideBar from './components/Sidebar'

import CardContainer from './components/Cards/CardContainer'

import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import { colors, buttonSize } from './theme/variables.js'

import './theme/index.js'

const NavContainer = styled.div`
background-color: #fff;
width: 100%;
  display: flex;
  justify-content: baseline;
  flex-direction: row;
  padding: 0 2rem;
  padding-bottom: 1.4rem;
`

const NavLinks = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
align-items: flex-end;
flex-wrap: wrap;
${'' /* border: 2px solid purple; */}
      ${'' /* align-items: flex-start; */}
    a {
      flex-wrap: wrap;
      padding-right: 3rem;
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
  justify-content: space-between;
  align-items: baseline;
`

const PageContent = styled.div`
  width: 100%;
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
`
function App() {

  // const [result, setResult] = useState([]);
  const [sport, setSport] = useState("NFL");

  return (

    <div className="App">
      <GlobalStyle />

      <NavContainer>
        <NavRow>
          <Link to="/">
            <img alt='Logo' style={{ width: '60%' }} src={Logo} />
          </Link>
        </NavRow>
        <NavLinks>
          <NavRow activeStyle={{ textDecoration: 'underline' }}>
            <Link to='/nfl' onClick={() => { setSport('nfl') }}>NFL</Link>
            <Link to='/mlb' onClick={() => { setSport('mlb') }}>MLB</Link>
            <Link to="/ncaa">NCAA</Link>
            <Link to="/cfl">CFL</Link>
            <Link to="/nba">NBA</Link>

          </NavRow>
          <NavRow>
            <NavBar />
          </NavRow>

        </NavLinks>
      </NavContainer>
      <CardContainer sport={sport} />

      <PageContent>
        <PropBets />
        <BetSlip />
      </PageContent>






    </div>
  )
}

export default App