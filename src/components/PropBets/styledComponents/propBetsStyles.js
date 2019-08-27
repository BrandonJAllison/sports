import styled from 'styled-components'
import { colors, buttonSize } from '../../../theme/variables.js'

const StyledButton = styled.button`
    background: ${
    props =>
        props.active ? 'grey' :
            props.primary ? `${colors.primary}` :
                `${colors.secondary}`
    }
    padding: ${
    props =>
        props.active ? `${buttonSize.activeSmall}` :
            props.small ? `${buttonSize.small}` :
                `${buttonSize.medium}`
    }
    border-radius: ${
    props =>
        props.first ? '5px 0 0 5px' :
            props.last ? '0 5px 5px 0' :
                props.middle ? '0' :
                    '5px'
    }
    width: ${
    props =>
        props.half ? '50%' :
            props.third ? '30%' : 'max-width'
    }
    outline: none;

    &:hover {
        transform: ${props => props.active ? 'none' : 'scale(1.03)'};
        cursor: ${props => props.active ? 'default' : 'pointer'};
        transition: .4s;
    }
`

const PropBetsContainer = styled.div`
    background: #fff;
    color: ${colors.darkGrey};
    border: 1px solid black;
    padding: 1.5rem;
    cursor: default
    max-width: 350px;
`

const PropBetsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.secondary};
    color: whitesmoke;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 100%;
    font-size: 1.5rem;
`

const Flex = styled.div`
    display: flex;
    justify-content: ${
    props =>
        props.spaceAJ ? 'space-around' :
            props.spaceBJ ? 'space-between' :
                props.spaceEJ ? 'space-evenly' :
                    props.startJ ? 'flex-start' :
                        props.endJ ? 'flex-end' :
                            'center'
    };
    align-items: ${
    props =>
        props.spaceAA ? 'space-around' :
            props.spaceBA ? 'space-between' :
                props.spaceEA ? 'space-evenly' :
                    props.startA ? 'flex-start' :
                        props.endA ? 'flex-end' :
                            'center'
    };
    flex-direction: ${props => props.column ? 'column' : 'row'};
    margin: 25px 0;
    width: 100%;

    .ninety {
        width: 90%;
    }

    .third {
        margin: 12.5px 0;
    }
`

export {
    StyledButton,
    PropBetsContainer,
    PropBetsHeader,
    Flex,
}
