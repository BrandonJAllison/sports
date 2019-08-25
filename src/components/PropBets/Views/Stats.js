import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statOptions, playerOptions, statTypeOption } from '../../../assets/dummyData'
import { StyledButton, Flex, CountSet, CountDisplay } from '../styledComponents'

const Stats = (props) => {
    console.log('player props', props)
    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [statType, setStatType] = useState(null)
    const [playerSelectedOption, setPlayerSelectedOption] = useState(null)
    const [betSlip, setBetSlip] = useState({})

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
        console.log(`Option selected:`, selectedOption)
    }

    const handleChangePlayer = playerSelectedOption => {
        setPlayerSelectedOption(playerSelectedOption)
        console.log(`Option selected:`, playerSelectedOption)
    }

    const handleStatTypeChange = statType => {
        setStatType(statType)
        console.log(`Option selected:`, statType)
    }

    const betSlipUpdate = _ => {
        setBetSlip({ count, selectedOption, playerSelectedOption })
        console.log('Bet Slip', betSlip)
    }

    const clearOptions = _ => {
        setCount(0)
        setSelectedOption(null)
        setPlayerSelectedOption(null)
    }

    const stat = <FontAwesomeIcon icon={faChartLine} />
    const player = <FontAwesomeIcon icon={faUser} />
    return (

        <>

            <div style={{ margin: '2rem 0' }}>
                <Select
                    className='select-player'
                    value={playerSelectedOption}
                    onChange={handleChangePlayer}
                    options={playerOptions}
                    isSearchable={true}
                    placeholder={player}
                />
            </div>

            <div style={{ margin: '2rem 0' }}>
                <Select
                    className='select-stat'
                    value={selectedOption}
                    onChange={handleChange}
                    options={statOptions}
                    isSearchable={true}
                    placeholder={stat}
                />
            </div>

            <p><strong><i>Will Have</i></strong></p>

            <div>
                <StyledButton third small primary first>AT LEAST</StyledButton>
                <StyledButton third small primary>OVER</StyledButton>
                <StyledButton third small primary last>UNDER</StyledButton>
            </div>

            <Flex>
                <CountSet>
                    <p>{count}</p>
                    <StyledButton
                        onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}
                        half small >-</StyledButton>
                    <StyledButton
                        onClick={() => setCount(count + 1)}
                        half small >+</StyledButton>
                </CountSet>

                <CountDisplay>
                    <p>{count}</p>
                    <Select
                        value={statTypeOption}
                        onChange={handleStatTypeChange}
                        options={statType}
                        isSearchable={true}
                        defaultValue='American'
                    />
                </CountDisplay>
            </Flex>

            <Flex spaceAJ>
                <StyledButton primary style={{ borderRadius: '5px' }} onClick={clearOptions}>Clear</StyledButton>
                <StyledButton primary style={{ borderRadius: '5px' }} onClick={betSlipUpdate}>Send To Betslip</StyledButton>
            </Flex>

        </>

    )

}
export default Stats
