import React, { useState, useEffect } from 'react'
import axios from 'axios';



export const PropBets = props => {
    const [players, setPlayers] = useState()

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
                    <select>
                        {playerOptions}
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <button>STAT</button>
                    <button>H2H</button>
                    <button>TRIOS</button>
                </div>

            </div>
        )

    }



}

