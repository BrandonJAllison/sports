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
import { faInfo } from '@fortawesome/free-solid-svg-icons'
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
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

const PropBetsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background: ${colors.darkGrey};
    color: #fff;
    border: 1px solid black;
    padding: 1.5rem; 
    width: 100%;
    
${'' /* style={{ border: '1px solid black', height: '400px', width: '300px' }} */}
`

export const PropBets = props => {
    const [players, setPlayers] = useState()
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)

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

    // if (!players) {
    //     return (
    //         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //             <img style={{ marginLeft: '5rem' }} src={Logo} alt='Rivers Casino Logo Loading' />
    //             <p>RIVERS
    //             SPORTSBOOK</p>
    //             <Loader
    //                 type="ThreeDots"
    //                 color="#C5960C"
    //                 height="100"
    //                 width="100"
    //             />
    //         </div>
    //     )
    // } 

    return (
        <PropBetsContainer>
            <PropBetsHeader>
                <span>Build Your Bet <i onMouseOver={hover} onMouseOut={hover}>
                    <FontAwesomeIcon icon={faInfo} />
                    <InfoModal show={show} />
                </i></span>

                <span>Betslip</span>

            </PropBetsHeader>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Button primary small>STAT</Button>
                <Button style={{
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black'
                }} primary small>H2H</Button>
                <Button primary small>TRIOS</Button>
            </div>
            <div>
                {/* <Stats /> */}
                <HeadToHead />
            </div>


        </PropBetsContainer>

    )

}