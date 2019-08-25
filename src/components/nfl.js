import React, { useState, useEffect } from 'react';
import UGameCard from '../components/Cards/upcominggamecard'
import Ticon from "../DEMOSTUFF/Ticon.png";
import axios from "axios";

import styled from 'styled-components'
import { colors, buttonSize } from '../theme/variables'

const Card = styled.div`
    width: 40%;

`

const NFL = (props) => {

    // const [gameInfo, setGameInfo] = useState([]);

    //USE THIS TO GET THE GAMES INFO, WHO IS PLAYING AND WHAT TIME THEY ARE PLAYING

    // useEffect(() => {
    //   const getInfo = () => {
    //     axios
    //       .get('http://demo0337722.mockable.io/'+`${props.sport}`)
    //       .then(response => {
    //         setGameInfo(response.data);
    //       })
    //       .catch(error => {
    //         console.error('Server Error', error);
    //       });
    //   }

    //   getInfo();

    // }, []);

    const gameInfo = {
        nfl: [{ imageone: Ticon, imagetwo: Ticon, date: "NOV 2", time: "7:25 PST" }, { imageone: Ticon, imagetwo: Ticon, date: "NOV 2", time: "7:25 PST" }, { imageone: Ticon, imagetwo: Ticon, date: "NOV 2", time: "7:25 PST" }],
        mlb: [], nba: [], ncaa: [], cfl: []
    };


    console.log(gameInfo)
    if (props.sport === "nfl") {
        return (
            <Card>
                <div>
                    <div>
                        {gameInfo.nfl.map(el => <UGameCard gameInfo={el} />)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div>
                        <button>View All {props.sport} Games</button>
                    </div>
                </div>
            </Card>
        );
    }
    if (props.sport === "mlb") {
        return (
            <div>
                <div>
                    <h3>upcoming {props.sport} Games</h3>
                    <div>
                        {gameInfo.mlb.map(el => <UGameCard gameInfo={el} />)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div>
                        <button>View All {props.sport} Games</button>
                    </div>
                </div>
            </div>
        );
    }
    if (props.sport === "cfl") {
        return (
            <div>
                <div>
                    <h3>upcoming {props.sport} Games</h3>
                    <div>
                        {gameInfo.cfl.map(el => <UGameCard gameInfo={el} />)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div>
                        <button>View All {props.sport} Games</button>
                    </div>
                </div>
            </div>
        );
    }
    if (props.sport === "ncaa") {
        return (
            <div>
                <div>
                    <h3>upcoming {props.sport} Games</h3>
                    <div>
                        {gameInfo.ncaa.map(el => <UGameCard gameInfo={el} />)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div>
                        <button>View All {props.sport} Games</button>
                    </div>
                </div>
            </div>
        );
    }
    if (props.sport === "nba") {
        return (
            <div>
                <div>
                    <h3>upcoming {props.sport} Games</h3>
                    <div>
                        {gameInfo.nba.map(el => <UGameCard gameInfo={el} />)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div>
                        <button>View All {props.sport} Games</button>
                    </div>
                </div>
            </div>
        );
    }
    else { return null }

}

export default NFL;