import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from 'react-loader-spinner'
import styled from 'styled-components'
import { colors, buttonSize } from '../../theme/variables.js'
import Logo from '../../assets/logo.png'
import Stats from './Views/Stats'
import HeadToHead from './Views/HeadToHead'
import Trios from './Views/Trios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import InfoModal from './InfoModal'

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.secondary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    };
`
const PropBetsContainer = styled.button`
    background: #fff;
    color: ${colors.darkGrey};
    border: 1px solid black;
    padding: 1.5rem;
    cursor: default;
    min-width: 350px;
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

const PropBetsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${colors.secondary};
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem; 
    width: 100%;
    
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

export const PropBets = props => {
    const [players, setPlayers] = useState()
    const [show, setShow] = useState(false)
    const [type, setType] = useState('stats')

    const hover = _ => setShow(!show)

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img style={{ marginLeft: '5rem' }} src={Logo} alt='Rivers Casino Logo Loading' />
                <p>RIVERS
                SPORTSBOOK</p>
                <Loader
                    type="ThreeDots"
                    color="#C5960C"
                    height="100"
                    width="100"
                />
            </div>
        )
    }

    return (
        <PropBetsContainer>
            <PropBetsHeader>
                <span >Build Your Bet <i onMouseOver={hover} onMouseOut={hover}>
                    <FontAwesomeIcon size='xs' icon={faQuestionCircle} />
                    <InfoModal show={show} />
                </i></span>

                <span>Betslip</span>

            </PropBetsHeader>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button
                    style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderRight: '1px solid black' }}
                    primary small
                    onClick={() => setType(1)}
                >STAT</Button>
                <Button style={{
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black'
                }} primary small
                    onClick={() => setType(2)}
                >H2H</Button>
                <Button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px', borderLeft: '1px solid black' }} primary small
                    onClick={() => setType(3)}
                >TRIOS</Button>
            </div>
            <div>
                {(() => {
                    switch (type) {
                        case 1:
                            return <Stats />
                        case 2:
                            return <HeadToHead />
                        case 3:
                            return <Trios />
                        default:
                            return <Stats />
                    }
                })()}
            </div>


        </PropBetsContainer>

    )

}