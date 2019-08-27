import React from 'react'
import PropBets from './PropBets/PropBets'
import BetSlip from './betSlip'

import styled from 'styled-components'
import { colors, buttonSize } from '../theme/variables'

const PageContentContainer = styled.div`
  min-width: 78%;
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Sidebar = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  border: 2px solid magenta;
`
const Content = styled.div`
  background: lightGrey;
  padding: 3rem 1rem;
  display:flex;
  flex-grow: 2;
  max-width: 900px;
`

const BetBuilder = styled.div`
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
  justify-content: center;
`



const PageContent = (props) => {

    return (
        <PageContentContainer>
            <Sidebar>
                <h2>This is a mock sidebar.</h2>
            </Sidebar>
            <Content>
                <h2>This is where the main page content will live.</h2>
            </Content>
            <BetBuilder>
                <PropBets />
            </BetBuilder>
        </PageContentContainer>
    )
}

export default PageContent