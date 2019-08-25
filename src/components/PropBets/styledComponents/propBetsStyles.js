import styled from 'styled-components'
import { colors, buttonSize } from '../../../theme/variables.js'

const StyledButton = styled.button`
    background: ${props => {
        console.log('SB props', props)
        return props.active ? 'grey' : props.primary ? `${colors.primary}` : `${colors.secondary}`
    }};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    };
    border-radius: ${props =>
        props.first ? '5px 0 0 5px' :
            props.last ? '0 5px 5px 0' : '0'
    };
    width: ${props =>
        props.half ? '50%' : props.third ? '30%' : 'inherit'
    };

    &:hover {
        transform: ${props => props.active && 'none'}
        cursor: ${props => props.active && 'default'}
    }
`

const PropBetsContainer = styled.button`
    background: #fff;
    color: ${ colors.darkGrey};
    border: 1px solid black;
    padding: 1.5rem;
    cursor: default ;
    min-width: 350px;
`

const PropBetsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${ colors.secondary};
    color: whitesmoke;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 100 %;
`

const Flex = styled.div`
    display: flex;
    justify-content: ${props =>
        props.spaceAJ ? 'space-around' : props.spaceBJ ? 'space-between' : props.spaceEJ ? 'space-evenly' : props.startJ ? 'flex-start' : props.endJ ? 'flex-end' : 'center'
    };
    align-items: ${props =>
        props.spaceAA ? 'space-around' : props.spaceBA ? 'space-between' : props.spaceEA ? 'space-evenly' : props.startA ? 'flex-start' : props.endA ? 'flex-end' : 'center'
    };
    margin: 25px 0;
`

export {
    StyledButton,
    PropBetsContainer,
    PropBetsHeader,
    Flex
}
