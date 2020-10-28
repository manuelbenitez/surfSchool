import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLinks'
import logo from '../../hat-logo.jpg'

//theme
import styles from '../../theme/theme'


const Navbar = (props) => {
    const theme = styles()

    const { auth } = props
    // console.log(auth)

    const links = auth.uid ? <SignedInLinks userName={auth.displayName}/> : <SignedOutLinks />
    return (
        <AppBar className={theme.appBar}>
            <Toolbar>
                <Link to='/'><img src={logo} alt='logo' className={theme.imgLogo}></img></Link>
                <Typography className={theme.menuTypo}>Surf School</Typography>
                {links}
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)