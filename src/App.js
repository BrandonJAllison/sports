import React from 'react';
import {Link, Route} from"react-router-dom";
import './App.scss';
import {NFL, NBA, MLB, NCAA, CFL} from "./components"

function App() {
  return (
    <div className="App">
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
        <Route exact path="/NFL" component={NFL}/>
        <Route exact path="/nba" component={NBA}/>
        <Route exact path="/mlb" component={MLB}/>
        <Route exact path="/ncaa" component={NCAA}/>
        <Route exact path="/cfl" component={CFL}/>
      </main>
    </div>
  );
}

export default App;
