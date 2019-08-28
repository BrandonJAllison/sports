import React, { useState, useEffect } from 'react'
import UGameCard from './Cards/upcominggamecard'
import Ticon from '../assets/Ticon.png'
import axios from "axios";

import styled from 'styled-components'
import { colors, buttonSize } from '../theme/variables'
import { set } from 'es-cookie';

const Card = styled.div`
    width: 40%;

`
const BotButton = styled.button`

`


const NBA = () => {
    
    
    const [gameInfo, setGameInfo] = useState([]);
    const [viewAll, setViewAll] = useState(false);


    //USE THIS TO GET THE GAMES INFO, WHO IS PLAYING AND WHAT TIME THEY ARE PLAYING

    useEffect(() => {
        const getInfo = () => {
            axios
                .get('http://demo0337722.mockable.io/nba')
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
    if (gameInfo.length !==0) {
        if (viewAll) {
            
            return (gameInfo.nba.map(el => <UGameCard gameInfo={el} />))
        } else {
           
            return (gameInfo.nba.slice(0, 3).map(el => <UGameCard gameInfo={el} />));
        }
    } else{

            return <div>loading</div>
        }
    }
    
    
        return (
            <div style={{ display: "flex" }}>
                <div className="UGameContainer" style={{ background: "grey", minWidth: "90vw", minHeight: "20vw"}}>
                    
                    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexWrap:"hidden" }}>
                        {toggle()}
                        
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <BotButton onClick={()=> {setViewAll(!viewAll)}}>View {expand()} NBA Games</BotButton>
                    </div>
                </div>
            </div>

        );
    }



export default NBA;
