import React, { useState } from 'react'
import { Button, FormControl, Grid, Input, InputLabel, Paper } from '@material-ui/core'


//theme 
import styles from '../../theme/theme'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const theme = styles()

    return (

        <Grid container className='main'>
            <Paper className={theme.signedInPaper}>
                <form onSubmit={e => e.preventDefault() && false}>
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
                    <Button type='submit' variant='contained'>Log in</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignIn