import styled from 'styled-components'

export default styled.div`
    position: absolute;
    background: whitesmoke;
    color: black;
    height: max-content;
    width: 15%;
    padding: 10px;
    box-shadow: 0 3px 7px #0000004d;
    z-index: 100;
    margin-top: 10px;
    font-size: 11px;

    &::before {
        content: '';
        height: 15px;
        width: 15px;
        transform: rotate(45deg);
        position: absolute;
        top: -.5rem;
        left: 10.1rem;
        background: whitesmoke;
    }
`
