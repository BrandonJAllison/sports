import { CONFIRM_BET } from "../actions";

const initialState = {
    bet: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONFIRM_BET:
            console.log('Bet in redux: ', action.payload)
            return {
                ...state,
                bet: action.payload
            }
        default:
            return state
    }
}
