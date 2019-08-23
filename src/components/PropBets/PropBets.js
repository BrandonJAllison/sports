import React, { useState, useEffect } from 'react'
import axios from 'axios';



export const PropBets = props => {
    const [players, setPlayers] = useState()
    const [count, setCount] = useState(0);

    function getPlayers() {
        axios
            .get(`https://api.sportsdata.io/v3/nfl/scores/json/Players?key=719ffa8e2fe5427a88dad8c81a92fb29`)
            .then(response => {
                console.log('player data', response.data)
                setPlayers(response.data)
            })
    }

    useEffect(() => {
        getPlayers()
    }, []);

    let playerOptions = players && players.map((player) =>
        <option key={player.PlayerID}>{player.Name}</option>
    );
    if (!players) {
        return <h1>Loading...</h1>
    } else {
        return (
            <div style={{ border: '1px solid black', height: '400px', width: '300px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Build Your Bet</span>
                    <span>Betslip</span>

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <button>STAT</button>
                    <button>H2H</button>
                    <button>TRIOS</button>
                </div>
                <div>
                    <span>Add Player</span>
                    <select style={{ width: '90%', margin: '0 10px' }}>
                        {playerOptions}
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
            </div>
        )

    }



}

