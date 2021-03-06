import axios from 'axios'

import urls from '../assets/urls'
const { CFL, NBA, NCAA, NFL, MLB, players } = urls

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'
export const TEAM_DATA_SUCCESS = 'TEAM_DATA_SUCCESS'
export const TEAM_DATA_FAILURE = 'TEAM_DATA_FAILURE'
export const CONFIRM_BET = 'CONFIRM_BET'
export const DELETE_BET = 'DELETE_BET'
export const TEAM_SUCCESS = 'TEAM-SUCESS'

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

export const teamData = _ => dispatch => {

  axios
    .get(NFL)
    .then(res => {
      console.log('nfl team data', res.data)
      dispatch({ type: TEAM_DATA_SUCCESS, payload: res.data.teams })
    })
    .catch(err => {
      dispatch({ type: TEAM_DATA_FAILURE, payload: err.response })
    })

}

export const team = id => dispatch => {

  axios
    .get(`${players}${id}`)
    .then(res => {
      console.log('team action', res.data)
      dispatch({ type: TEAM_SUCCESS, payload: res.data })
    })

}

export const confirmBet = bet => ({ type: CONFIRM_BET, payload: bet })

export const deleteBet = (bet, id) => ({ type: DELETE_BET, payload: { bet, id } })
