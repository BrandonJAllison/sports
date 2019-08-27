import React from 'react'
import Bet from './bet'
import styled from 'styled-components'
const List = styled.div`
border: 1px solid red;
`
export default function betList(props) {
    return (
        <List>
           {props.bet && props.bet.map( (bet ,index )=> <Bet bet={bet} key={index} id={index} delete={props.delete}/>)} 
        </List>
    )
}
