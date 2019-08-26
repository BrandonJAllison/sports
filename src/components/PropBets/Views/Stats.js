import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statOptions, playerOptions } from '../../../assets/dummyData'
import { StyledButton, Descriptor } from '../styledComponents'
import Count from './subComponents/Count'

const Stats = (props) => {
    console.log('player props', props)
    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [statType, setStatType] = useState(null)
    const [playerSelectedOption, setPlayerSelectedOption] = useState(null)
    const [betSlip, setBetSlip] = useState({})
    const [prop, setProp] = useState('AT_LEAST')

    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
        console.log(`Option selected:`, selectedOption)
    }

    const handleChangePlayer = playerSelectedOption => {
        setPlayerSelectedOption(playerSelectedOption)
        console.log(`Option selected:`, playerSelectedOption)
    }

    const handleStatTypeChange = type => setStatType(type)

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

            <Descriptor>Will Have</Descriptor>

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

            <div>
                <StyledButton
                    third small primary first
                    active={prop === 'AT_LEAST'}
                    onClick={() => setProp('AT_LEAST')}
                >AT LEAST</StyledButton>
                <StyledButton
                    third small primary
                    active={prop === 'OVER'}
                    onClick={() => setProp('OVER')}
                >OVER</StyledButton>
                <StyledButton
                    third small primary last
                    active={prop === 'UNDER'}
                    onClick={() => setProp('UNDER')}
                >UNDER</StyledButton>
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
