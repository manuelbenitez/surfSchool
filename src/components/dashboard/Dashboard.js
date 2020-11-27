import React from 'react'
import { Button, Fade, FormControl, Grid, Grow, Input, InputLabel, MenuItem, Paper, Select, Typography } from '@material-ui/core'

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
        <Grid container className={theme.mainGrid} >
            <Grid item xs={6}>
                <Fade in={true} timeout={1500}><Typography className={theme.textDashboard}>Book your surf lessons, anywhere!</Typography></Fade>
            </Grid>
            <Grid item xs={6}>
                <Grow in={true} timeout={3500}>
                    <Paper className={theme.dashboardPaper}>
                        <Paper component='form' className={theme.dashboardFormPaper}>
                            <FormControl >
                                <InputLabel style={{ fontFamily: 'arvo' }}>Where?</InputLabel>
                                <Select
                                    className={theme.dashboardSelect}
                                    defaultValue=''
                                    input={<Input />}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl className={theme.dashboardFormControl}>
                                <InputLabel style={{ fontFamily: 'arvo' }} >Lesson Type</InputLabel>
                                <Input
                                    className={theme.dashboardSelect}
                                    type='text'
                                />
                            </FormControl>
                        </Paper>
                        <Button className={theme.dashboardButton} variant='contained'>Search</Button>
                    </Paper>
                </Grow>
            </Grid>
        </Grid>
    )
}

export default Dashboard