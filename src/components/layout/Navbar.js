import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, Fade, Toolbar, useScrollTrigger, Slide, Typography } from '@material-ui/core'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLinks'

//theme
import styles from '../../theme/theme'


const Navbar = (props) => {
    const theme = styles()

    const { auth, profile } = props

    const links = auth.uid ? <SignedInLinks userName={profile.fullName} /> : <SignedOutLinks />
    const trigger = useScrollTrigger()


    return (
        <Slide in={!trigger}>
            <AppBar className={theme.appBar} elevation={0}>
                <Toolbar>
                    <Fade in={true} timeout={3000}><Link to='/' style={{ textDecoration: 'none', marginRight: '10vw' }} ><Typography className={theme.senseiTypo}>Sensei Surf School</Typography></Link></Fade>
                    {links}
                </Toolbar>
            </AppBar>
        </Slide>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)