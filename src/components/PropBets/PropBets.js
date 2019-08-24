import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { colors, buttonSize } from '../../theme/variables.js'
import Logo from '../../assets/logo.png'
const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.secondary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    }
`

const PropBetsContainer = styled.button`
    background: #fff;
    color: ${colors.darkGrey};
    border: 1px solid black;
    padding: 1.5rem;
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

const PropBetsHeader = styled.button`
    background: ${colors.darkGrey};
    color: #fff;
    border: 1px solid black;
    ${'' /* padding: 1.5rem; */}
    width: 100%;
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

export const PropBets = props => {
    const [players, setPlayers] = useState()
    const [count, setCount] = useState(0);

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
    if (!players) {
        return (
            <>
                <img src={Logo} alt='Rivers Casino Logo Loading' />
                <Loader
                    type="MutatingDots"
                    color="#C5960C"
                    height="100"
                    width="100"
                />
            </>
        )
    } else {
        return (
            <PropBetsContainer>
                <PropBetsHeader>
                    <span>Build Your Bet</span>
                    <span>Betslip</span>

                </PropBetsHeader>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
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
                </div>
            </PropBetsContainer>
        )

    }



}