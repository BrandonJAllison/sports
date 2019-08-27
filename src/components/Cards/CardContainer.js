import React from 'react'

import { UGameCard } from './upcominggamecard'
import NFL from "../nfl"

import styled from 'styled-components'
import { colors } from '../../theme/variables'



const CardHolder = styled.div`
    max-width: 100%;
    min-height: 36vh;
    margin-top: 22px;
    background: linear-gradient(to bottom, #474F54, #1F262B);
    color: #fff;
`

const Card = styled.div`
    max-width: 100%;
`

const ContainerTitle = styled.div`
    background-color: ${colors.primary};
    color: #fff;
    width: 60%;
    max-height: 28px;
    display: flex;
    align-items: center;
    h2 {
        font-size: 1.4rem;
        padding-left: 1.2rem;
        text-transform: uppercase;
    }
`

const ContainerContent = styled.div`
    margin: 0 auto;
    display: flex;
    ${'' /* min-width: 100%; */}
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0;
    border: 2px solid green;
`

const CardContainer = (props) => {

    return (
        <>

            <CardHolder>
                <Card>
                    <ContainerTitle>
                        <h2>Quick Bets - NFL</h2>
                    </ContainerTitle>
                    <ContainerContent>
                        <NFL sport={props.sport} />
                    </ContainerContent>
                </Card>
            </CardHolder>
        </>
    )
}

export default CardContainer