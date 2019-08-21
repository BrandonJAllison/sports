import React from 'react';
import {Link, Route} from"react-router-dom";
import './App.scss';
import {NFL, NBA, MLB, NCAA, CFL} from "./components"

function App() {
  return (
    <div className="App">
     <header className="navbar">
      <h1>SportsBook</h1>
        <nav>
            <Link to="/nfl">NFL</Link>
            <Link to="/mlb">MLB</Link>
            <Link to="/ncaa">NCAA</Link>
            <Link to="/cfl">CFL</Link>
            <Link to="/nba">NBA</Link>
        </nav>
     </header>
      <main>
        <Route exact path="/" component={NFL}/>
        <Route exact path="/nba" component={NBA}/>
        <Route exact path="/mlb" component={MLB}/>
        <Route exact path="/ncaa" component={NCAA}/>
        <Route exact path="/cfl" component={CFL}/>
      </main>
    </div>
  );
}

export default App;
