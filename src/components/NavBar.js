import React from "react"
import { useAuth0 } from "../utils/authZero"

import styled from 'styled-components'
import { colors, buttonSize } from '../theme/variables.js'

const Button = styled.button`
    background: ${props => props.primary ? `${colors.primary}` : `${colors.primary}`};
    padding: ${props =>
        props.small ? `${buttonSize.small}` : `${buttonSize.medium}`
    }
`


const NavBar = _ => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    return (
        <>
            {!isAuthenticated && (
                <Button primary medium
                    onClick={_ =>
                        loginWithRedirect({})
                    }
                >
                    Log in
        </Button>
            )}

            {isAuthenticated && <button onClick={_ => logout()}>Log out</button>}
        </>
    )
}

export default NavBar
