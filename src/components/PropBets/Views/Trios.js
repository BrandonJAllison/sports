import React, { useState } from 'react'
import Select from 'react-select'

import { statTypeOption, playerOptions, statOptions } from '../../../assets/dummyData'
import { Descriptor, Flex, StyledButton, CountDisplay } from '../styledComponents'

const Trios = props => {
    const [count, setCount] = useState(0)
    const [statType, setStatType] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)
    const [playerOneSelection, setPlayerOneSelection] = useState(null)
    const [playerTwoSelection, setPlayerTwoSelection] = useState(null)
    const [playerThreeSelection, setPlayerThreeSelection] = useState(null)

    const clearOptions = _ => {
        setCount(0)
        setSelectedOption(null)
        setPlayerOneSelection(null)
        setPlayerTwoSelection(null)
        setPlayerThreeSelection(null)
    }

    return (

        <>

            <Flex column>

                <Select
                    className='ninety third'
                    value={playerOneSelection}
                    onChange={(sel) => setPlayerOneSelection(sel)}
                    options={playerOptions}
                    isSearchable={true}
                />

                <Select
                    className='ninety third'
                    value={playerTwoSelection}
                    onChange={(sel) => setPlayerTwoSelection(sel)}
                    options={playerOptions}
                    isSearchable={true}
                />

                <Select
                    className='ninety third'
                    value={playerThreeSelection}
                    onChange={(sel) => setPlayerThreeSelection(sel)}
                    options={playerOptions}
                    isSearchable={true}
                />

            </Flex>

            <Descriptor>In order of most</Descriptor>

            <Flex>

                <Select
                    className='ninety'
                    value={selectedOption}
                    onChange={(sel) => setSelectedOption(sel)}
                    options={statOptions}
                    isSearchable={true}
                />

            </Flex>

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
                    count, selectedOption, playerOneSelection, playerTwoSelection, playerThreeSelection
                })}>Send To Betslip</StyledButton>
            </Flex>

        </>

    )

}
export default Trios