import React from 'react'

export default function BET(props) {
    console.log(props)
    if (props.bet.playerCount === 1) return (
        <div>
            <h1> Player : {props.bet.playerSelectedOption.value}</h1>

            <p> {props.bet.prop} : {props.bet.count}  {props.bet.selectedOption.value}</p>
            <button onClick={() => { props.delete(props.bet, props.id) }}
                style={{ color: 'black' }}

            > X </button>
        </div>
    )

    if (props.bet.playerCount === 2) return (
        <div>
            <h1> Player 1 : {props.bet.playerOneSelection.value}</h1>

            <h1> Player 2 : {props.bet.playerTwoSelection.value}</h1>

            <p>{props.bet.selectedOption.value}</p>
            <button onClick={() => { props.delete(props.bet, props.id) }}
                style={{ color: 'black' }}

            > X </button>
        </div>
    )

    if (props.bet.playerCount === 3) return (
        <div>
            <h1> Player 1 : {props.bet.playerOneSelection.value}</h1>

            <h1> Player 2 : {props.bet.playerTwoSelection.value}</h1>

            <h1> Player 3 : {props.bet.playerThreeSelection.value}</h1>

            <p>{props.bet.selectedOption.value}</p>
            <button onClick={() => { props.delete(props.bet, props.id) }}
                style={{ color: 'black' }}

            > X </button>
        </div>
    )
}
