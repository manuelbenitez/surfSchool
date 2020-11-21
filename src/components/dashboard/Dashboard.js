import React from 'react'
import { Button, Fade, FormControl, Grid, Grow, Input, InputLabel, MenuItem, Paper, Select } from '@material-ui/core'
import text from '../../Text.png'

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
        <Grid container direction='row' className='main-grid' >
            <Grid item xs={6}>
                <Fade in={true} timeout={5000}>
                    <img src={text} alt='Book your surflessons, anywhere !' className={theme.imgText} />
                </Fade>
            </Grid>
            <Grid item xs={6}>
                <Grow in={true} timeout={6000}>
                    <Paper className={theme.dashboardPaper}>
                        <Paper component='form'>
                            <FormControl >
                                <InputLabel>Where?</InputLabel>
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
                        </Paper>
                        <Button className={theme.dashboardButton} variant='contained'>Search</Button>
                    </Paper>
                </Grow>
            </Grid>
        </Grid>
    )
}

export default Dashboard