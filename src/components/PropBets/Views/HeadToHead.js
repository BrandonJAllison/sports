import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select'

import { statOptions, playerOptions, statTypeOption } from '../../../assets/dummyData'
import { StyledButton, Descriptor, Flex, CountDisplay, CountSet } from '../styledComponents'

const HeadToHead = props => {
<<<<<<< HEAD
    console.log('player props', props)
=======
>>>>>>> a8952f4fc9357bb9d79ba04c04e5a68ab45b74f5
    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [statType, setStatType] = useState(null)
    const [playerSelectedOption, setPlayerSelectedOption] = useState(null)
<<<<<<< HEAD
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
=======
>>>>>>> a8952f4fc9357bb9d79ba04c04e5a68ab45b74f5

    const clearOptions = _ => {
        setCount(0)
        setSelectedOption(null)
        setPlayerSelectedOption(null)
    }

    const stat = <FontAwesomeIcon icon={faChartLine} />
    const player = <FontAwesomeIcon icon={faUser} />
    const rotate = <FontAwesomeIcon icon={faSyncAlt} />

    return (

<<<<<<< HEAD
        <div style={{ display: 'flex' }}>
            <div style={{ padding: '1rem', alignSelf: 'center' }}>
                <p >{rotate}</p>
            </div>
            <div>
                <div style={{ margin: '2rem 0', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Select
                        className='select-player'
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
                        className='select-stat'
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
                        className='select-player'
                        value={playerSelectedOption}
                        onChange={handleChangePlayer}
                        options={playerOptions}
                        isSearchable={true}
                        placeholder={player}
                    />

                </div>
            </div>

            {/* <Flex spaceAJ>

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
            </Flex> */}


            {/* <Flex spaceAJ>
                    <StyledButton primary onClick={clearOptions}>Clear</StyledButton>
                    <StyledButton primary onClick={betSlipUpdate}>Send To Betslip</StyledButton>
                </Flex> */}

        </div>
=======
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
                    count, selectedOption, playerSelectedOption
                })}>Send To Betslip</StyledButton>
            </Flex>

        </>
>>>>>>> a8952f4fc9357bb9d79ba04c04e5a68ab45b74f5

    )

}
export default HeadToHead