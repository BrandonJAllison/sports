import React, { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Stats from './Views/Stats'
import HeadToHead from './Views/HeadToHead'
import Trios from './Views/Trios'
import InfoModal from './InfoModal'
import axios from 'axios';



const PropBets = props => {
    const [players, setPlayers] = useState()
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
    };


    function getPlayers() {
        axios
            .get(`https://api.sportsdata.io/v3/nfl/scores/json/Players?key=719ffa8e2fe5427a88dad8c81a92fb29`)
            .then(response => {
                console.log('player data', response.data)
                setPlayers(response.data)
            })
    }

    useEffect(() => {
        getPlayers()
    }, []);

    let playerOptions = players && players.map((player) =>
        <option key={player.PlayerID}>{player.Name}</option>
    );

    // if (!players) {
    //     return <h1>Loading...</h1>
    // }

    return (

        <div style={{ border: '1px solid black', height: '600px', width: '350px' }}>
            <div className='upper'>
                <InfoModal show={show} handleClose={hideModal} />
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                    <span>Build Your Bet <FontAwesomeIcon onMouseEnter={showModal} onMouseLeave={hideModal} icon={faInfoCircle} /></span>
                    <span>Betslip</span>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <NavLink to='/prop' ><button>STAT</button></NavLink>
                    <NavLink to='/headtohead'><button>H2H</button></NavLink>
                    <NavLink to='/trios'><button>TRIOS</button></NavLink>
                </div>
            </div>

            <div className='main'>

                <Switch>
                    <Route exact path='/prop' component={Stats} />
                    <Route exact path='/headtohead' component={HeadToHead} />
                    <Route exact path='/trios' component={Trios} />
                </Switch>

            </div>

        </div>
    )

}

export default PropBets

