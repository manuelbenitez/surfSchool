import React, { useState } from 'react'
import { Button, FormControl, Grid, Input, InputLabel, Paper } from '@material-ui/core'

import styles from '../../theme/theme'

const SignUp = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const theme = styles()
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
                    <Button className={theme.signedOutButton} type='submit' variant='contained'>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp