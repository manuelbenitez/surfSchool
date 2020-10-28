import React from 'react'
import { Button } from '@material-ui/core'
import { signOut } from '../../store/actions/authActions'

//theme
import styles from '../../theme/theme'
import { connect } from 'react-redux'


const SignedInLinks = (props) => {
    const theme = styles()
    return (
        <div>
            <Button className={theme.signedInButton} variant='contained' onClick={e => props.signOut()}>Log Out</Button>
            <Button className={theme.signedInButton} variant='contained' href='profile'>{props.userName}</Button>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)