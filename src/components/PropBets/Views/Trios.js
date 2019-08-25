import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { Selection, Flex, StyledButton, CountDisplay, CountSet } from '../styledComponents'
import { statTypeOption } from '../../../assets/dummyData'
import Count from './subComponents/Count'

const Trios = props => {
    const [count, setCount] = useState(0)
    const [statType, setStatType] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)
    const [playerSelectedOption, setPlayerSelectedOption] = useState(null)
    const [betSlip, setBetSlip] = useState({})

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

    return (

        <>

            <Selection>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
            </Selection>

            <Selection>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
            </Selection>

            <Selection>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
            </Selection>
            <p>In order of most</p>
            <Selection>
                <FontAwesomeIcon icon={faChartLine} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT STAT</p>
            </Selection>

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
export default Trios