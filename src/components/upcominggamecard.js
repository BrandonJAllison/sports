import React, { useState, useEffect } from 'react';
import axios from "axios";
import Ticon from "../DEMOSTUFF/Ticon.png"

import styled from 'styled-components'
import { colors, buttonSize } from '../theme/variables'

const Card = styled.div`
  border: 2px solid red;
  width: 100%;
`

const CardHeader = styled.div`
  border: 2px solid purple;
  display: flex;
  justify-content: space-between;
  text-align: center;
  
  h3 {
    font-size: .8rem;
  }
`

const UGameCard = (props) => {
  //This component Takes in props from to display the information for the upcoming games.

  return (
    <Card>
      <CardHeader>
        <img src={props.gameInfo.imageone} alt="" />
        <div>
          <h3>VERSUS</h3>
          <h3>{props.gameInfo.date} | {props.gameInfo.time}</h3>
        </div>
        <img src={props.gameInfo.imagetwo} alt="" />
      </CardHeader>

      <div>
        {/* <button>PLACE BETS</button> */}
      </div>
    </Card>
  );
}

export default UGameCard;