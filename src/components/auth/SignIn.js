import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Button, FormControl, Grid, Input, InputLabel, Paper } from '@material-ui/core'


//theme 
import styles from '../../theme/theme'
import { Redirect } from 'react-router-dom'

const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const theme = styles()

    const { authError, uid, auth } = props
    const url = '/profile/' + {uid}

    function handleSubmit(e){
        e.preventDefault()
        props.signIn(email, password)
    }   

    if(auth.uid) return <Redirect to={url}/>

    return (

        <Grid container className='main'>
            <Paper className={theme.signedInPaper}>
                <form onSubmit={e => handleSubmit(e)}>
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
                            <Input id='password' type='password' name='password' onChange={e => setPassword(e.target.value)}></Input>
                        </FormControl>
                    </Paper>
                    <br />
                    <Button variant='contained' type='submit'>Log in</Button>
                    <div>
                        {authError ? <p>{authError}</p> : null}
                    </div>

                </form>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        uid: state.firebase.auth.uid,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (email, password) => dispatch(signIn(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)