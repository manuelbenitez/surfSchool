import React from 'react'
import { Button } from '@material-ui/core'
import { signOut } from '../../store/actions/authActions'

//theme
import styles from '../../theme/theme'
import { connect } from 'react-redux'


const SignedInLinks = (props) => {
    const theme = styles()

    const { uid } = props

    const url = `/profile/${uid}`


    return (
        <div>
            <Button className={theme.signedInButton} variant='contained' onClick={() => props.signOut()} href='/'>Log Out</Button>
            <Button className={theme.signedInButton} variant='contained' href={url} >{props.userName}</Button>
        </div>

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