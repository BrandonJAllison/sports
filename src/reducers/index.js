import { CONFIRM_BET } from "../actions";
import { objectTypeSpreadProperty } from "@babel/types";

const initialState = {
    bet: {},
    confirmedBets : [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONFIRM_BET:
            console.log('Bet in redux: ', action.payload)
            return {
                ...state,
                bet: action.payload,
                confirmedBets : [...state.confirmedBets, action.payload].filter( item =>{
                   if( Object.keys(item).length !== 0 ){
                       return item
                       
                   } 
                 
                })
            }
            
        default:
            return state
    }
}
