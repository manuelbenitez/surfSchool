import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLinks'
import logo from '../../hat-logo.jpg'

//theme
import styles from '../../theme/theme'


const Navbar = () => {
    const theme = styles()

    return (
        <AppBar className={theme.appBar}>
            <Toolbar>
                <Link to='/'><img src={logo} alt='logo' className={theme.imgLogo}></img></Link>
                <Typography className={theme.menuTypo}>Surf School</Typography>
                <SignedInLinks/>
                <SignedOutLinks/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar