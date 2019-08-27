import React from 'react'
import PropBets from './PropBets/PropBets'
import BetSlip from './betSlip'

import styled from 'styled-components'
import { colors, buttonSize } from '../theme/variables'

const PageContentContainer = styled.div`
  ${'' /* width: 100%; */}
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
`

const Sidebar = styled.div`
  width: 28%;
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
`

const BetBuilder = styled.div`
  width: 28%;
  background: #fff;
  padding: 3rem 1rem;
  display:flex;
`
const Content = styled.div`
  width: 68%;
  background: lightGrey;
  padding: 3rem 1rem;
  display:flex;
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