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


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    return (
        <div>
            {!isAuthenticated && (
                <Button primary medium
                    onClick={() =>
                        loginWithRedirect({})
                    }
                >
                    Log in
        </Button>
            )}

            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
    )
}

export default NavBar
