import React, { useState } from 'react'
import { Button, FormControl, Grid, Input, InputLabel, Paper } from '@material-ui/core'

import { signUp } from '../../store/actions/authActions'

import styles from '../../theme/theme'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const SignUp = (props) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const theme = styles()

    const { auth } = props

    const url = '/profile/' + auth.uid

    if (auth.uid) return <Redirect to={url} />
    return (
        <Grid container className='main'>
            <Paper className={theme.signedOutPaper}>
                <form onSubmit={e => e.preventDefault() && false}>
                    <Paper>
                        <FormControl margin='normal' required={true} fullWidth>
                            <InputLabel htmlFor='fullName'>Full Name</InputLabel>
                            <Input id='fullName' name='fullName' onChange={e => setFullName(e.target.value)}></Input>
                        </FormControl>
                    </Paper>
                    <br />
                    <Paper>
                        <FormControl margin='normal' required={true} fullWidth>
                            <InputLabel htmlFor='email'>Email Address</InputLabel>
                            <Input id='email' name='email' autoFocus onChange={e => setEmail(e.target.value)}></Input>
                        </FormControl>
                    </Paper>
                    <br />
                    <Paper>
                        <FormControl margin='normal' required={true} fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' onChange={e => setPassword(e.target.value)}></Input>
                        </FormControl>
                    </Paper>
                    <br />
                    <Button className={theme.signedOutButton} onClick={e => props.signUp(fullName, email, password)} type='submit' variant='contained'>Sign Up</Button>
                    <p>{props.authError}</p>
                </form>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (fullName, email, password) => dispatch(signUp(fullName, email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)