import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statOptions, playerOptions, statTypeOption } from '../../../assets/dummyData'
import { StyledButton, Descriptor, Flex, CountDisplay, CountSet } from '../styledComponents'

const HeadToHead = props => {
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
    const rotate = <FontAwesomeIcon icon={faSyncAlt} />

    return (
        <div>



            <div style={{ margin: '2rem 0' }}>
                <Select
                    className='ninety'
                    value={playerSelectedOption}
                    onChange={handleChangePlayer}
                    options={playerOptions}
                    isSearchable={true}
                    placeholder={player}
                />
            </div>

            <Descriptor>Will Have More</Descriptor>

            <div style={{ margin: '2rem 0' }}>


                <Select
                    className='ninety'
                    value={selectedOption}
                    onChange={handleChange}
                    options={statOptions}
                    isSearchable={true}
                    placeholder={stat}
                />


            </div>

            <Descriptor> Than</Descriptor>



            <div style={{ margin: '2rem 0' }}>

                <Select
                    className='ninety'
                    value={playerSelectedOption}
                    onChange={handleChangePlayer}
                    options={playerOptions}
                    isSearchable={true}
                    placeholder={player}
                />

            </div>

            <CountDisplay>
                <p>{count}</p>
                <Select
                    value={statType}
                    onChange={(sel) => setStatType(sel)}
                    options={statTypeOption}
                    isSearchable={true}
                    defaultValue={statTypeOption[0].value}
                    placeholder={statTypeOption[0].label}
                />
            </CountDisplay>

            <Flex spaceAJ>
                <StyledButton primary onClick={clearOptions}>Clear</StyledButton>
                <StyledButton primary onClick={() => props.setBetSlip({
                    count, selectedOption, playerSelectedOption, prop
                })}>Send To Betslip</StyledButton>
            </Flex>
        </div>
    )

}
export default HeadToHead