import React, { useState } from 'react'
import Select from 'react-select';
import styled from 'styled-components'
import { colors, buttonSize } from '../../../theme/variables.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChartLine } from '@fortawesome/free-solid-svg-icons'
import './Stats.scss'

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.secondary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    };
    
`

const Stats = (props) => {
    console.log('player props', props)
    const [count, setCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null)
    const [playerSelectedOption, setPlayerSelectedOption] = useState(null)

    const statOptions = [
        { value: 'touchdowns', label: 'Touchdowns' },
        { value: 'fumbles', label: 'Fumbles' },
        { value: 'catches', label: 'Catches' },
    ];

    const playerOptions = [
        { value: 'jerry rice', label: 'Jerry Rice' },
        { value: 'jerry rice', label: 'Emmit Smith' },
        { value: 'jerry rice', label: 'Joe Montana' },
        { value: 'jerry rice', label: 'Terry Bradshaw' }
    ]

    const handleChange = selectedOption => {
        setSelectedOption({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    const handleChangePlayer = playerSelectedOption => {
        setPlayerSelectedOption({ playerSelectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    const stat = <FontAwesomeIcon icon={faChartLine} />
    const player = <FontAwesomeIcon icon={faUser} />
    return (

        <>

            <div className='select'>
                <Select
                    className='select-player'
                    value={playerSelectedOption}
                    onChange={handleChangePlayer}
                    options={playerOptions}
                    isSearchable={true}
                    placeholder={player}

                />
            </div>
            <div className='select'>
                <Select
                    className='select-stat'
                    value={selectedOption}
                    onChange={handleChange}
                    options={statOptions}
                    isSearchable={true}
                    placeholder={stat}

                />
            </div>


            <p>will have</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button primary style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>AT LEAST</Button>
                <Button style={{
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black'
                }} primary>OVER</Button>
                <Button primary style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>UNDER</Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ border: '1px solid black', textAlign: 'center', width: '35%', margin: '25px 10px 10px 10px' }} >
                    <p style={{ borderBottom: '1px solid black', paddingBottom: '10px' }}>{count}</p>
                    <button style={{ width: '50%' }} onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
                        -
                    </button>
                    <button style={{ width: '50%' }} onClick={() => setCount(count + 1)}>
                        +
                    </button>

                </div>
                <div style={{ border: '1px solid black', textAlign: 'center', width: '35%', margin: '25px 10px 10px 10px' }} >
                    <p>{count}</p>
                    <p>ODDS</p>

                </div>
            </div>
        </>

    )

}
export default Stats
