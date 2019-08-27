import React, { useState, useEffect } from 'react';
import axios from "axios";
import Ticon from "../DEMOSTUFF/Ticon.png"

const UGameCard= (props) => { 
    //This component Takes in props from to display the information for the upcoming games.
    
    return (
        <div style={{border: "1px solid black", margin: "10px", maxHeight: "10vw", width:"25%"}}>   
          <div className="top-content" style={{display:"flex", justifyContent:"space-evenly"}}>
            <img src={props.gameInfo.imageone} alt=""/> 
            <h3 style={{color:"#dea300"}}>VERSUS</h3>
            <img src={props.gameInfo.imagetwo} alt=""/>
          </div>
          <div style={{display:"flex", justifyContent:"space-evenly", background:"white"}}>
            <h3>{props.gameInfo.date}</h3>
            <h3>{props.gameInfo.time}</h3>
          </div>  
          <div style={{display:"flex", justifyContent: "center", position: "relative"}}>
            <button style={{background:"#dea300", height:"40px", width:"100px", marginTop:"15px"}}>PLACE BETS</button>
          </div>
        </div>
    );
}

export default UGameCard;