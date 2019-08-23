import React, { useState } from 'react'


const Stats = (props) => {
    const [count, setCount] = useState(0);


    return (
        <>
            <div>
                <span>Add Player</span>
                <select style={{ width: '90%', margin: '0 10px' }}>
                    {props.playerOptions}
                </select>
            </div>
            <div>
                <p>Select Statistic</p>
                <select style={{ width: '90%', margin: '0 10px' }}>

                </select>
            </div>
            <p>will have</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button>AT LEAST</button>
                <button>OVER</button>
                <button>UNDER</button>
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