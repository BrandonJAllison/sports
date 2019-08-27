import React from 'react'
import { PropBetsContainer, PropBetsHeader, StyledButton, Flex } from './PropBets/styledComponents/'
import BetList from './betList'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {deleteBet} from '../actions/index'
const List = styled.div`
border: 1px solid red;
`
const  betSlip =  (props) => {
    
    return (
            <PropBetsContainer>
           <List>
           <PropBetsHeader>BetSlip</PropBetsHeader>
            <BetList bet={props.confirmedBets} delete={props.deleteBet}/>
            </List>
            </PropBetsContainer>
        
    )
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps,{deleteBet} )(betSlip)
