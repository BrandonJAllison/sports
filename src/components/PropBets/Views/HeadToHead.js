import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statTypeOption } from '../../../assets/dummyData'
import { Selection, Descriptor, Flex, StyledButton, CountDisplay } from '../styledComponents'

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

            <CountDisplay>
                <p>{count}</p>
                <Select
                    value={statType}
                    onChange={handleStatTypeChange}
                    options={statTypeOption}
                    isSearchable={true}
                    defaultValue={statTypeOption[0].value}
                    placeholder={statTypeOption[0].label}
                />
            </CountDisplay>

            <Flex spaceAJ>
                <StyledButton primary onClick={clearOptions}>Clear</StyledButton>
                <StyledButton primary onClick={betSlipUpdate}>Send To Betslip</StyledButton>
            </Flex>

        </>

    )

}
export default HeadToHead