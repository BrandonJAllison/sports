import React, { useState, useEffect } from 'react'
import UGameCard from './Cards/upcominggamecard'
import Ticon from '../assets/Ticon.png'
import axios from "axios";

import styled from 'styled-components'
import { colors, buttonSize } from '../theme/variables'
import { set } from 'es-cookie';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    }
`

const NFL = props => {


    const [gameInfo, setGameInfo] = useState([]);
    const [viewAll, setViewAll] = useState(false);


    //USE THIS TO GET THE GAMES INFO, WHO IS PLAYING AND WHAT TIME THEY ARE PLAYING

    useEffect(() => {
        const getInfo = () => {
            axios
                .get('http://demo0337722.mockable.io/NFL')
                .then(response => {
                    setGameInfo(response.data);

                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }

        getInfo();

    }, []);



    // const gameInfo = {nfl: [{imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}],
    //                   mlb: [], nba: [], ncaa: [], cfl: []};
    const expand = () => {
        if (viewAll) {
            return "Less"
        } else {
            return "ALL"
        }
    }

    const toggle = () => {
        if (gameInfo.length !== 0) {
            if (viewAll) {

                return (gameInfo.nfl.map(el => <UGameCard gameInfo={el} />))
            } else {

                return (gameInfo.nfl.slice(0, 3).map(el => <UGameCard gameInfo={el} />));
            }
        } else {

            return <div>loading</div>
        }
    }

    return (

        <Container>
            <Card>
                {toggle()}
            </Card>
            <Button primary small onClick={() => setViewAll(!viewAll)}>View {expand()} Games</Button>
        </Container>

    )

}

// if (props.sport === "mlb") {
//     return (
//          <div style={{ display: "flex" }}>
//             <div className="UGameContainer" style={{ background: "grey", width: "90vw", minHeight: "20vw" }}>
//                 <h3 style={{ background: "gold", color: "white", margin: "0", width: "60vw" }}>Upcoming Games - {props.sport.toUpperCase()}</h3>
//                 <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
//                     {/* {gameInfo.mlb.map(el => <UGameCard gameInfo={el} />)} */}
//                     {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
//                 </div>
//                 <div style={{display:"flex", justifyContent:"center"}}>
//                     <BotButton>View All {props.sport.toUpperCase()} Games</BotButton>
//                 </div>
//             </div>
//         </div>
//     );
// }
// if (props.sport === "cfl") {
//     return (
//         <div>
//             <div>
//                 <h3>upcoming {props.sport} Games</h3>
//                 <div>
//                     {gameInfo.cfl.map(el => <UGameCard gameInfo={el} />)}
//                     {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
//                 </div>
//                 <div>
//                     <button>View All {props.sport} Games</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// if (props.sport === "ncaa") {
//     return (
//         <div>
//             <div>
//                 <h3>upcoming {props.sport} Games</h3>
//                 <div>
//                     {gameInfo.ncaa.map(el => <UGameCard gameInfo={el} />)}
//                     {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
//                 </div>
//                 <div>
//                     <button>View All {props.sport} Games</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// if (props.sport === "nba") {
//     return (
//         <div>
//             <div>
//                 <h3>upcoming {props.sport} Games</h3>
//                 <div>
//                     {gameInfo.nba.map(el => <UGameCard gameInfo={el} />)}
//                     {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
//                 </div>
//                 <div>
//                     <button>View All {props.sport} Games</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
// else { return null }




export default NFL;