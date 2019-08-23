import React, { useState } from 'react'

import './Stats.scss'


const Stats = (props) => {
    const [count, setCount] = useState(0);

    return (

        <>

            <div>
                <h2>Add Player</h2>
                <select>
                    {props.playerOptions}
                </select>
            </div>

            <div>
                <h2>Select Statistic</h2>
                <select>

                </select>
            </div>

            <h4>will have</h4>

            <div className='selvars'>
                <button>AT LEAST</button>
                <button>OVER</button>
                <button>UNDER</button>
            </div>

            <div className='counters'>

                <div className='count-set'>
                    <p>{count}</p>
                    <button onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>
                        -
                    </button>
                    <button onClick={() => setCount(count + 1)}>
                        +
                    </button>

                </div>

                <div className='count-display'>
                    <p>ODDS</p>
                    <p>{count}</p>

                </div>

            </div>

        </>

    )

}
export default Stats