import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statOptions, playerOptions, statTypeOption } from '../../../assets/dummyData'
import { StyledButton, Flex, CountSet, CountDisplay } from '../styledComponents'
import Count from './subComponents/Count'

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

    const handleStatTypeChange = type => {
        setStatType(type)
        console.log(`Option selected:`, type)
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

            <Count
                count={count}
                setCount={setCount}
                statType={statType}
                handleStatTypeChange={handleStatTypeChange}
                clearOptions={clearOptions}
                betSlipUpdate={betSlipUpdate}
            />

        </>

    )

}
export default Stats
