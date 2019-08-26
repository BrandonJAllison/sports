import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner'

import { PropBetsContainer, PropBetsHeader, StyledButton, Flex } from './styledComponents'
import Logo from '../../assets/logo.png'
import { Stats, HeadToHead, Trios } from './Views'
import InfoModal from './InfoModal'

export const PropBets = _ => {
    const [players, setPlayers] = useState()
    const [show, setShow] = useState(false)
    const [type, setType] = useState(1)
    const [betSlip, setBetSlip] = useState({})

    useEffect(() => console.log(betSlip), [betSlip])

    // function getPlayers() {
    //     axios
    //         .get(`https://api.sportsdata.io/v3/nfl/scores/json/Players?key=719ffa8e2fe5427a88dad8c81a92fb29`)
    //         .then(response => {
    //             console.log('player data', response.data)
    //             setPlayers(response.data)
    //         })
    // }

    // useEffect(() => {
    //     getPlayers()
    // }, [])

    // let playerOptions = players && players.map((player) =>
    //     <option key={player.PlayerID}>{player.Name}</option>
    // )

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
                <span>Build Your Bet <i
                    style={{ cursor: 'help' }}
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}
                    onClick={() => setShow(!show)}
                >
                    <FontAwesomeIcon size='s' icon={faQuestionCircle} />
                    <InfoModal show={show} />
                </i></span>
                <span>Betslip</span>
            </PropBetsHeader>

            <Flex>
                <StyledButton
                    primary small first
                    active={type === 1}
                    onClick={() => setType(1)}
                >STAT</StyledButton>
                <StyledButton
                    primary small
                    active={type === 2}
                    onClick={() => setType(2)}
                >H2H</StyledButton>
                <StyledButton
                    primary small last
                    active={type === 3}
                    onClick={() => setType(3)}
                >TRIOS</StyledButton>
            </Flex>

            <div>
                {(() => {
                    switch (type) {
                        case 1:
                            return <Stats setBetSlip={setBetSlip} />
                        case 2:
                            return <HeadToHead setBetSlip={setBetSlip} />
                        case 3:
                            return <Trios setBetSlip={setBetSlip} />
                        default:
                            return <Stats setBetSlip={setBetSlip} />
                    }
                })()}
            </div>

        </PropBetsContainer>

    )

}