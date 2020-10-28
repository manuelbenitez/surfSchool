import React from 'react'
import { Button } from '@material-ui/core'

//theme
import styles from '../../theme/theme'


const SignedInLinks = () => {
    const theme = styles()
    return (
        <div>
            <Button className={theme.signedInButton} variant='contained'>Log Out</Button>
            <Button className={theme.signedInButton} variant='contained' href='profile'>User</Button>
        </div>

    )
}

export default SignedInLinks