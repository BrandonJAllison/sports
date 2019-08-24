import React, { useState, useEffect } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Stats from './Views/Stats'
import HeadToHead from './Views/HeadToHead'
import Trios from './Views/Trios'
import InfoModal from './InfoModal'
import axios from 'axios';

<<<<<<< HEAD
import './PropBets.scss'

const PropBets = props => {
=======
import styled from 'styled-components'
import { colors, buttonSize } from '../../theme/variables.js'

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.secondary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    }
`

const PropBetsContainer = styled.button`
    background: #fff;
    color: ${colors.darkGrey};
    border: 1px solid black
    padding: 1.5rem;
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

const PropBetsHeader = styled.button`
    background: ${colors.darkGrey}
    color: #fff;
    border: 1px solid black;
    ${'' /* padding: 1.5rem; */}
    width: 100%;
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

export const PropBets = props => {
>>>>>>> d4a0ecc71672b6eec9d70b4eac27807b265e2962
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
<<<<<<< HEAD

    // if (!players) return <h1>Loading...</h1>

    return (

        <div style={{
            border: '1px solid black',
            height: '600px',
            width: '350px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div className='upper' id='upper'>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
                    <span>
                        Build Your Bet <FontAwesomeIcon
                            onMouseEnter={showModal}
                            onMouseLeave={hideModal}
                            icon={faInfoCircle}
                        />
                        <InfoModal
                            show={show}
                            handleClose={hideModal}
                        />
                    </span>
=======
    if (!players) {
        return <h1>Loading...</h1>
    } else {
        return (
            <PropBetsContainer>
                <PropBetsHeader>
                    <span>Build Your Bet</span>
>>>>>>> 3ebf0d09a341d58eef677882c329292f7df9fe65
                    <span>Betslip</span>

                </PropBetsHeader>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
<<<<<<< HEAD
                    <NavLink className='links' activeClass='active' to='/stats'><button>STAT</button></NavLink>
                    <NavLink className='links' to='/headtohead'><button>H2H</button></NavLink>
                    <NavLink className='links' to='/trios'><button>TRIOS</button></NavLink>
=======
                    <Button primary small>STAT</Button>
                    <Button primary small>H2H</Button>
                    <Button primary small>TRIOS</Button>
                </div>
                <div>
                    <span>Add Player</span>
                    <select style={{ width: '90%', margin: '0 10px' }}>
                        {playerOptions}
                    </select>
                </div>
                <div>
                    <p>Select Statistic</p>
                    <select style={{ width: '90%', margin: '0 10px' }}>

                    </select>
                </div>
                <p>will have</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button primary>AT LEAST</Button>
                    <Button primary>OVER</Button>
                    <Button primary>UNDER</Button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ border: '1px solid black', textAlign: 'center', width: '35%', margin: '25px 10px 10px 10px' }} >
                        <p style={{ borderBottom: '1px solid black', paddingBottom: '10px' }}>{count}</p>
                        <button style={{ width: '50%' }} onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
                            -
                    </button>
                        <button style={{ width: '50%' }} onClick={() => setCount(count + 1)}>
                            +
                    </button>

                    </div>
                    <div style={{ border: '1px solid black', textAlign: 'center', width: '35%', margin: '25px 10px 10px 10px' }} >
                        <p>{count}</p>
                        <p>ODDS</p>

                    </div>
>>>>>>> d4a0ecc71672b6eec9d70b4eac27807b265e2962
                </div>
<<<<<<< HEAD
            </div>
=======
            </PropBetsContainer>
        )
>>>>>>> 3ebf0d09a341d58eef677882c329292f7df9fe65

            <div className='main'>

                <Switch>
                    <Route exact path='/stats' render={props => <Stats playerOptions={playerOptions} />} />
                    <Route exact path='/headtohead' component={HeadToHead} />
                    <Route exact path='/trios' component={Trios} />
                </Switch>

            </div>

            <div className='lower'>
                <p>Clear</p>
                <button>Add To Betslip</button>
            </div>

        </div>
    )

}

export default PropBets

