import React, { useState } from 'react'
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
    const [count, setCount] = useState(0);

    return (

        <>

            <div>
                {/* <span>Add Player</span> */}
                {/* <select style={{ width: '90%', margin: '0 10px' }}>
                        {playerOptions}
                    </select> */}
                <div className='playerAdd' style={{ border: '1px solid black', padding: '.2rem', marginTop: '10px', background: '#40484D', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesomeIcon icon={faUser} />
                    <p style={{ color: 'white', marginLeft: '10px' }}>SELECT PLAYER</p>
                </div>
                <div className='statAdd' style={{ border: '1px solid black', padding: '.2rem', marginTop: '10px', background: '#40484D', display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesomeIcon icon={faChartLine} />
                    <p style={{ color: 'white', marginLeft: '10px' }}>SELECT STAT</p>
                </div>
            </div>
            {/* <div>
                <p>Select Statistic</p>
                <select style={{ width: '90%', margin: '0 10px' }}>

                </select>
            </div> */}
            <p>will have</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button primary>AT LEAST</Button>
                <Button style={{
                    borderLeft: '1px solid black',
                    borderRight: '1px solid black'
                }} primary>OVER</Button>
                <Button primary>UNDER</Button>
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