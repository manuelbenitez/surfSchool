import React from 'react'
import { Button, Grow } from '@material-ui/core'

//theme
import styles from '../../theme/theme'


const SignedOutLinks = () => {
    const theme = styles()
    return (
        <div>
            <Button className={theme.signedOutButton} href='./signin' variant='contained'>Sign in</Button>
            <Button className={theme.signedOutButton} href='./signup' variant='contained'>Sign up</Button>
        </div>
    )
}

export default SignedOutLinks