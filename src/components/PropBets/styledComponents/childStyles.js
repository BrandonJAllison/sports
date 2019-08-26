import styled from 'styled-components'
import { colors } from '../../../theme/variables'

const CountSet = styled.div`
    border: 1px solid black;
    border-bottom: none;
    width: 40%;
    border-radius: 5px 5px 0 0;
    background: whitesmoke;
`

const CountDisplay = styled.div`
    border: 1px solid black;
    width: 40%;
    border-radius: 5px;
    background: whitesmoke;
`

const Selection = styled.div`
    border: 1px solid black;
    padding: .2rem;
    margin: 2.5px 0;
    background: ${colors.secondary};
    display: flex;
    color: whitesmoke;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

const Descriptor = styled.h3`
    color: black;
    text-transform: uppercase;
`

export {
    CountDisplay,
    CountSet,
    Selection,
    Descriptor,
}
