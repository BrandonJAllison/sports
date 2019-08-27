import React from 'react'

export default function BET (props) {
    console.log(props)
    return (
        <div>
            <h1> Player : {props.bet.playerSelectedOption.value}</h1>
            
            <p> {props.bet.prop} : {props.bet.count}  {props.bet.selectedOption.value}</p>
             <button onClick= { () => {props.delete( props.bet,props.id)}}
             style ={{color: 'black'}}
             
             > X </button>
        </div>
    )
}
