import React from 'react'
import { Link, Route } from "react-router-dom";
import { PropBets } from './components/PropBets/PropBets'
import { NFL, NBA, MLB, NCAA, CFL } from "./components"
import NavBar from './components/NavBar'
import './App.scss'

function App() {
  return (

    <div className="App">

      <NavBar />

      <header className="navbar">
        <Link to="/"><h1>SportsBook</h1></Link>
        <nav>
          <Link to="/nfl">NFL</Link>
          <Link to="/mlb">MLB</Link>
          <Link to="/ncaa">NCAA</Link>
          <Link to="/cfl">CFL</Link>
          <Link to="/nba">NBA</Link>
        </nav>
      </header>

      <main>
        <Route exact path="/NFL" component={NFL} />
        <Route exact path="/nba" component={NBA} />
        <Route exact path="/mlb" component={MLB} />
        <Route exact path="/ncaa" component={NCAA} />
        <Route exact path="/cfl" component={CFL} />
      </main>
      <div>
        <PropBets />
      </div>

    </div>

  )
}

export default App
