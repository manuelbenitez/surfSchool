import React from 'react'
import { Button, Collapse, Grow, Zoom } from '@material-ui/core'
import { signOut } from '../../store/actions/authActions'

//theme
import styles from '../../theme/theme'
import { connect } from 'react-redux'


const SignedInLinks = (props) => {
    const theme = styles()

    const { uid } = props

    const url = `/profile/${uid}`


    return (
        <Zoom in={true} style={{ transitionDelay: '500ms' }}>
            <div>
                <Button className={theme.signedInButton} variant='contained' onClick={() => props.signOut()} href='/'>Log Out</Button>
                <Zoom in={true} style={{ transitionDelay: '700ms' }}><Button className={theme.signedInButton} variant='contained' href={url} >{props.userName}</Button></Zoom>
            </div>
        </Zoom>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)