import React, { useState, useEffect } from 'react';
import UGameCard from "./upcominggamecard";
import Ticon from "../DEMOSTUFF/Ticon.png";
import axios from "axios";

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
    
    const gameInfo = {nfl: [{imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}, {imageone: Ticon, imagetwo: Ticon, date:"NOV 2", time: "7:25 PST"}],
                      mlb: [], nba: [], ncaa: [], cfl: []};
    
    
        console.log(gameInfo)
        if (props.sport==="nfl") {
            return (
                <div style={{display: "flex"}}> 
                    <div className="UGameContainer" style={{background: "grey", width: "90vw", minHeight: "20vw"}}>     
                    <h3 style={{background: "gold", color: "white", margin: "0", width: "60vw"}}>upcoming {props.sport} Games</h3>
                    <div style={{display:"flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        { gameInfo.nfl.map(el => <UGameCard gameInfo={el}/>)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div style={{display: "flex", width:"100%", justifyContent:"center", marginTop:"5%"}}>
                        <button>View All {props.sport} Games</button>
                    </div>
                    </div>
                </div>
            );
        }
        if (props.sport==="mlb") {
            return (
                <div style={{display: "flex"}}> 
                    <div className="UGameContainer" style={{background: "grey", width: "90vw", minHeight: "20vw"}}>     
                    <h3 style={{background: "gold", color: "white", margin: "0", width: "60vw"}}>upcoming {props.sport} Games</h3>
                    <div style={{display:"flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        { gameInfo.mlb.map(el => <UGameCard gameInfo={el}/>)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div style={{display: "flex", width:"100%", justifyContent:"center", marginTop:"5%"}}>
                        <button>View All {props.sport} Games</button>
                    </div>
                    </div>
                </div>
            );
        }
        if (props.sport==="cfl") {
            return (
                <div style={{display: "flex"}}> 
                    <div className="UGameContainer" style={{background: "grey", width: "90vw", minHeight: "20vw"}}>     
                    <h3 style={{background: "gold", color: "white", margin: "0", width: "60vw"}}>upcoming {props.sport} Games</h3>
                    <div style={{display:"flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        { gameInfo.cfl.map(el => <UGameCard gameInfo={el}/>)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div style={{display: "flex", width:"100%", justifyContent:"center", marginTop:"5%"}}>
                        <button>View All {props.sport} Games</button>
                    </div>
                    </div>
                </div>
            );
        }
        if (props.sport==="ncaa") {
            return (
                <div style={{display: "flex"}}> 
                    <div className="UGameContainer" style={{background: "grey", width: "90vw", minHeight: "20vw"}}>     
                    <h3 style={{background: "gold", color: "white", margin: "0", width: "60vw"}}>upcoming {props.sport} Games</h3>
                    <div style={{display:"flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        { gameInfo.ncaa.map(el => <UGameCard gameInfo={el}/>)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div style={{display: "flex", width:"100%", justifyContent:"center", marginTop:"5%"}}>
                        <button>View All {props.sport} Games</button>
                    </div>
                    </div>
                </div>
            );
        }
        if (props.sport==="nba") {
            return (
                <div style={{display: "flex"}}> 
                    <div className="UGameContainer" style={{background: "grey", width: "90vw", minHeight: "20vw"}}>     
                    <h3 style={{background: "gold", color: "white", margin: "0", width: "60vw"}}>upcoming {props.sport} Games</h3>
                    <div style={{display:"flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        { gameInfo.nba.map(el => <UGameCard gameInfo={el}/>)}
                        {/* { gameInfo.map(el => <UGameCard gameInfo={el}/>)} */}
                    </div>
                    <div style={{display: "flex", width:"100%", justifyContent:"center", marginTop:"5%"}}>
                        <button>View All {props.sport} Games</button>
                    </div>
                    </div>
                </div>
            );
        }
        else{return null}

}

export default NFL;