import React, {useState, useEffect} from 'react';
import {Link, Route} from"react-router-dom";
import axios from 'axios';
import './App.scss';
import {NFL} from "./components"
import Ticon from "./DEMOSTUFF/Ticon.png"

function App() {

// const [result, setResult] = useState([]);
const [sport, setSport] = useState("NFL");



  return (
    <div className="App">
     <header className="navbar">
      <Link to="/"><h1>SportsBook</h1></Link>
        <nav>
            <Link onClick={() => { setSport('nfl')}}>NFL</Link>
            <Link onClick={() => { setSport('mlb')}}>MLB</Link>
            <Link to="/ncaa">NCAA</Link>
            <Link to="/cfl">CFL</Link>
            <Link to="/nba">NBA</Link>
        </nav>
     </header>
      <main>
        <NFL sport={sport}/>

      </main>
    </div>
  );
}

export default App;
