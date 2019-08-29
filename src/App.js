import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import Logo from './assets/logo.png'
import SideBar from './components/sidebar'
import NavBar from './components/NavBar'
import BetSlip from './components/betSlip'
import PageContent from './components/PageContent'
import Favorites from './components/Favorites/Favorites'

import CardContainer from './components/Cards/CardContainer'

import styled from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import { colors, buttonSize } from './theme/variables.js'
import './index.css'

import './theme/index.js'

const PageContainer = styled.div`
  background-color: #fff;
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 20px;
`

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

function App() {

  return (
    <div style={{ overflow: 'auto' }}>
      <SideBar />
      <PageContainer>
        <GlobalStyle />

        <NavContainer>

          <NavRow>
            <Link to="/">
              <img alt='Logo' style={{ width: '60%' }} src={Logo} />
            </Link>
          </NavRow>

          <NavLinks>
            <NavRow activeStyle={{ textDecoration: 'underline' }}>
              <Link to='/nfl'>NFL</Link>
              <Link to='/mlb'>MLB</Link>
              <Link to="/ncaa">NCAA</Link>
              <Link to="/cfl">CFL</Link>
              <Link to="/nba">NBA</Link>
            </NavRow>

            <NavRow>
              <NavBar />
            </NavRow>
          </NavLinks>

        </NavContainer>

        <CardContainer />
        <Favorites />
        <PageContent />
        <div id='wrapper' className='wrap'>
          <BetSlip />
        </div>
      </PageContainer>
    </div>
  )
}

export default App
