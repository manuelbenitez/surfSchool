import React from 'react'
import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Paper, Select } from '@material-ui/core'

//theme
import styles from '../../theme/theme'

const names = [
    'Zarauts',
    'Zurriola',
    'France',
    'Gobo',
    'Fitenia'
];

const Dashboard = () => {


        const theme = styles()

        return (
            <Grid container direction='row' className='main' >
                <Grid item xs={6}>
                    <Paper className={theme.dashboardPaper}><iframe title='How it works!' src="https://player.vimeo.com/video/284055148" width="640" height="360" frameBorder="0" allowFullScreen></iframe></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={theme.dashboardPaper}>
                        <Paper component='form'>
                            <FormControl >
                                <InputLabel>Where?</InputLabel>
                                <Select
                                    className={theme.dashboardSelect}
                                    input={<Input />}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Paper>
                        <Button className={theme.dashboardButton} variant='contained'>Search</Button>
                    </Paper>
                </Grid>
            </Grid>
        )
    }

export default Dashboard