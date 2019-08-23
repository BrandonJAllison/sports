import React, { useState, useEffect } from 'react';
import UGameCard from "./upcominggamecard";
import Ticon from "../DEMOSTUFF/Ticon.png";
import axios from "axios";

const NFL = (props) => {

    const [gameInfo, setGameInfo] = useState([]);

    //USE THIS TO GET THE GAMES INFO, WHO IS PLAYING AND WHAT TIME THEY ARE PLAYING
    
    useEffect(() => {
      const getInfo = () => {
        axios
          .get('http://demo0337722.mockable.io/'+`${props.sport}`)
          .then(response => {
            setGameInfo(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getInfo();
      
    }, []);
    
    // const gameInfo = [{imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}];
    
    
        console.log(gameInfo)
        if (props.sport==="nfl") {
            return (
                <div style={{display: "flex"}}>      
                { gameInfo.nfl.map(el => <UGameCard gameInfo={el}/>)}
                </div>
            );
        }
        else{return null}

}

export default NFL;