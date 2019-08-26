import React, { useState } from 'react';
import { Link, Router } from "react-router-dom";
import './App.scss';

import PropBets from './components/PropBets/PropBets'
import NavBar from './components/NavBar'
import { NFL } from "./components"
import SideBar from './components/sidebar.js'
function App() {

  // const [result, setResult] = useState([]);
  const [sport, setSport] = useState("NFL");
  

  


  return (

    <div className="App">

      {/* <NavBar />
      <SideBar /> */}
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

      <main>
        <NFL sport={sport} />

      </main>
      <div>

        {/* <PropBets /> */}

      </div>

    </div>

  )
}

export default App
