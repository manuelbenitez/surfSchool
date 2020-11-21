import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppBar, Fade, Toolbar } from '@material-ui/core'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLinks'
import SenseiSurfSchool from '../../SenseiSurfSchool.png'

//theme
import styles from '../../theme/theme'


const Navbar = (props) => {
    const theme = styles()

    const { auth, profile } = props

    const links = auth.uid ? <SignedInLinks userName={profile.fullName} /> : <SignedOutLinks />


    return (
        <AppBar className={theme.appBar} elevation={0}>
            <Toolbar>
                
                <Fade in={true} timeout={3000}><Link to='/' style={{marginLeft: '75vh'}} ><img src={SenseiSurfSchool} alt='Sensei Surf School' className={theme.imgSurfSchool}/></Link></Fade>

                {links}


            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)