import React from 'react'

import styled from 'styled-components'
import { colors } from '../theme/variables'

const CardHolder = styled.div`
    width: 100%;
    height: 36vh;
    margin-top: 22px;
    background: linear-gradient(to bottom, #474F54, #1F262B);
    display: flex;
    flex-direction: column;
    color: #fff;
`

const ContainerTitle = styled.div`
    background-color: ${colors.primary};
    color: #fff;
    width: 60%;
    ${'' /* max-height: 36px; */}
    display: flex;
    align-items: center;

    h2 {
        font-size: 1.4rem;
        padding-left: 1.2rem;
        text-transform: uppercase;
    }
`

const ContainerContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
`

const CardContainer = () => {

    return (
        <>

            <CardHolder>
                <ContainerTitle>
                    <h2>Quick Bets - NFL</h2>
                </ContainerTitle>
                <ContainerContent>
                    <h1> This is the card container.  It will hold cards.  Cool, right?</h1>
                </ContainerContent>
            </CardHolder>
        </>
    )
}

export default CardContainer