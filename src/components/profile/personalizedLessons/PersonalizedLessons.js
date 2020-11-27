import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import styles from '../../../theme/theme'


const PersonalizedLessons = () => {

    const theme = styles()


    return (
        <Grid container>
            <Grid item xs={12} className={theme.bankDetailsGrid}>
                <Paper className={theme.bankDetailsPaper}>
                    <Typography style={{ fontSize: '1vw', fontWeight: '700', fontFamily: 'arvo'}}>

                        Here you can take your students on a trip and show them around,
                        teach the same team the whole weekend, or the whole month.
                        
                        Here the price is charged per hour as well, and the clients will pay per lesson, just as with the other lessons
                        this way if a student doesn't want to keep going with the course can leave any time,
                        or if their level is not appropiate for the course, they can look for another one.
                        You will need to plan ahead, if the conditions are not good to teach you can always change the dates. Once the course is created
                        it will have a total amount of days, but don't worry, if you can't extend the course for any reason, you can always edit how long
                        the course is going to last and an email will be instantly sent to the students informing the change.
                        
                        We want this section to be yours, create that lesson of your own.
                        If there is something that you want to add to this section,
                        you can send us message with your ideas, we look forward to hear them
                        Start Editing Personalized Lessons.


                        // Name of the lesson
                        // Price per hour
                        // Total hours of the course
                        // Weekends, Weekdays, Any day, specific dates
                        // Description 
                        // Add another personalized lesson
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}


export default PersonalizedLessons
