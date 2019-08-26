import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'

import { Selection, Descriptor } from '../styledComponents'
import Count from './subComponents/Count'

const HeadToHead = _ => {
    const [count, setCount] = useState(0)
    const [statType, setStatType] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)
    const [playerSelectedOption, setPlayerSelectedOption] = useState(null)
    const [betSlip, setBetSlip] = useState({})

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

    return (

        <>

            <Selection>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
            </Selection>

            <Descriptor>Will have more</Descriptor>

            <Selection>
                <FontAwesomeIcon icon={faChartLine} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT STAT</p>
            </Selection>

            <Descriptor>Than</Descriptor>

            <Selection>
                <FontAwesomeIcon icon={faUser} />
                <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
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
export default HeadToHead