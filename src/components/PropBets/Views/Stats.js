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

    //This will be ablstracted away when more data is made available through API or other
    const statOptions = [
        { value: 'touchdowns', label: 'Touchdowns' },
        { value: 'fumbles', label: 'Fumbles' },
        { value: 'catches', label: 'Catches' },
    ];
    //This will be ablstracted away when more data is made available through API or other
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

    const clearOptions = _ => {
        setCount(0)
        setSelectedOption(null)
        setPlayerSelectedOption(null)

    }

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


            <p><strong><i>Will Have</i></strong></p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button primary style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>AT LEAST</Button>
                <Button style={{
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black'
                }} primary>OVER</Button>
                <Button primary style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>UNDER</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '100px' }}>
                <div style={{ border: '1px solid black', borderRadius: '5px', textAlign: 'center', width: '40%', margin: '25px 10px 10px 10px', background: 'whitesmoke' }} >
                    <p>{count}</p>
                    <Button small style={{ width: '50%', borderRight: '.5px solid white' }} onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
                        -
                    </Button>
                    <Button small style={{ width: '50%', borderLeft: '.5px solid white' }} onClick={() => setCount(count + 1)}>
                        +
                    </Button>

                </div>
                <div style={{ border: '1px solid black', borderRadius: '5px', textAlign: 'center', width: '40%', margin: '25px 10px 10px 10px', background: 'whitesmoke' }} >
                    <p>{count}</p>
                    <Select

                        className='select-stat'
                        value={selectedOption}
                        onChange={handleChange}
                        options={statOptions}
                        isSearchable={true}
                        placeholder={selectedOption}

                    />

                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button primary style={{ borderRadius: '5px' }} onClick={clearOptions}>Clear</Button>
                <Button primary style={{ borderRadius: '5px' }}>Send To Betslip</Button>
            </div>
        </>

    )

}
export default Stats
