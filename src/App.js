import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './App.scss';

import { PropBets } from './components/PropBets/PropBets'
import NavBar from './components/NavBar'
import { NFL } from "./components"

function App() {

  // const [result, setResult] = useState([]);
  const [sport, setSport] = useState("NFL");



  return (

    <div className="App">

      <NavBar />

      <header className="navbar">
        <Link to="/"><h1>SportsBook</h1></Link>
        <nav>
          <Link onClick={() => { setSport('nfl') }}>NFL</Link>
          <Link onClick={() => { setSport('mlb') }}>MLB</Link>
          <Link to="/ncaa">NCAA</Link>
          <Link to="/cfl">CFL</Link>
          <Link to="/nba">NBA</Link>
        </nav>
      </header>

      <main>
        <NFL sport={sport} />

      </main>
      <div>
        <PropBets />
      </div>

    </div>

  )
}

export default App
