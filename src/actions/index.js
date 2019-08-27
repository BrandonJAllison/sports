import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const CONFIRM_BET = 'CONFIRM_BET'
export const DELETE_BET = 'DELETE_BET'

export const getData = sport => dispatch => {

  dispatch({ type: sport })

  axios
    .get(`http://jservice.io/api/random`)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response })
    })

}

export const confirmBet = bet => ({ type: CONFIRM_BET, payload: bet })

export const deleteBet = (bet, id) => ({ type: DELETE_BET, payload: { bet, id } })


