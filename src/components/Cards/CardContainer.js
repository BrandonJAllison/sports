import React from 'react'
import { Link, Route } from "react-router-dom";
import { UGameCard } from './upcominggamecard'
import NFL from "../nfl";
import MLB from "../mlb";
import NCAA from "../ncaa";
import CFL from "../cfl";
import NBA from "../nba";

import styled from 'styled-components'
import { colors } from '../../theme/variables'



const CardHolder = styled.div`
    max-width: 100%;
    ${'' /* min-height: 36vh; */}
    ${'' /* margin-top: 22px; */}
    background: linear-gradient(to bottom, #474F54, #1F262B);
    color: #fff;
`

const Card = styled.div`
    width: 100%;
`

const ContainerTitle = styled.div`
    background-color: ${colors.primary};
    color: #fff;
    width: 60%;
    max-height: 28px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    h2 {
        font-size: 1.4rem;
        padding-left: 1.2rem;
        text-transform: uppercase;
    }
`

const ContainerContent = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0;
`

const CardContainer = props => {

    return (

        <CardHolder>
            <Card>
                <ContainerTitle>
                    <h2>Quick Bets - NFL</h2>
                </ContainerTitle>
                <ContainerContent>
                    <Route exact path="/nfl" component={NFL} />
                    <Route exact path="/mlb" component={MLB} />
                    <Route exact path="/ncaa" component={NCAA} />
                    <Route exact path="/cfl" component={CFL} />
                    <Route exact path="/nba" component={NBA} />
                </ContainerContent>
            </Card>
        </CardHolder>

    )
}

export default CardContainer