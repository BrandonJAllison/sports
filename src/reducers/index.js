import { CONFIRM_BET, DELETE_BET } from "../actions"

const initialState = {
    bet: {},
    confirmedBets: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CONFIRM_BET:
            console.log('Bet in redux: ', action.payload)
            return {
                ...state,
                bet: action.payload,
                confirmedBets: [...state.confirmedBets, action.payload].filter(item => {
                    if (Object.keys(item).length !== 0) {
                        return item

                    }

                })
            }
        case DELETE_BET:
            console.log(' in reducer', action.payload)
            return {
                ...state,
                confirmedBets: state.confirmedBets.filter((item, index) => {
                    console.log(item)
                    if (index !== action.payload.id) {
                        return item
                    }

                })
            }

        default:
            return state
    }
}
