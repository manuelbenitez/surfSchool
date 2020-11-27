import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow, Grid, Fade } from '@material-ui/core'
import styles from '../../theme/theme'
import EditGroupLessons from './edit/editLessonsInformation/EditGroupLessons'
import EditPrivateLessons from './edit/editLessonsInformation/EditPrivateLessons'
import { createGroupLessons } from '../../store/actions/groupLessonsActions'
import { createPrivateLessons } from '../../store/actions/privateLessonsActions'


function groupLessons(props, theme) {
    return (
        <Grid container>
            <Fade in={true} timeout={1000}>
                <Grid item xs={12} className={theme.generalInfoGrid}>
                    <Paper className={theme.generalInfoPaper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Group Lessons Information</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Price (per hour per person)</TableCell>
                                    <TableCell className={theme.generalPropsCell} >$ {props.group.price}</TableCell>
                                    <TableCell><EditGroupLessons component='price' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Level</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.group.level}</TableCell>
                                    <TableCell><EditGroupLessons component='level' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Description</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.group.description}</TableCell>
                                    <TableCell><EditGroupLessons component='description' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Places</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.group.places}</TableCell>
                                    <TableCell><EditGroupLessons component='places' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Minimum and maximum amount of students</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.group.min} - {props.group.max}</TableCell>
                                    <TableCell><EditGroupLessons component='students' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Times</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.group.times}</TableCell>
                                    <TableCell><EditGroupLessons component='times' times={props.group.times} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Dates</TableCell>
                                    <TableCell className={theme.generalPropsCell} >From: {props.group.startDate} To: {props.group.endDate}</TableCell>
                                    <TableCell><EditGroupLessons component='dates' /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Fade>
        </Grid>
    )
}

function privateLessons(props, theme) {
    return (
        <Grid container>
            <Fade in={true} timeout={1000}>
                <Grid item xs={12} className={theme.generalInfoGrid}>
                    <Paper className={theme.generalInfoPaper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Private Lessons Information</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Price</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.private.price}</TableCell>
                                    <TableCell><EditPrivateLessons component='price' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Level</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.private.level}</TableCell>
                                    <TableCell><EditPrivateLessons component='level' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Description</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.private.description}</TableCell>
                                    <TableCell><EditPrivateLessons component='description' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Places</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.private.places}</TableCell>
                                    <TableCell><EditPrivateLessons component='places' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Minimum and maximum amount of students</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.private.min} - {props.private.max}</TableCell>
                                    <TableCell><EditPrivateLessons component='students' /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Times</TableCell>
                                    <TableCell className={theme.generalPropsCell} >{props.private.times}</TableCell>
                                    <TableCell><EditPrivateLessons component='times' times={props.private.times} /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className={theme.generalInfoCell} >Dates</TableCell>
                                    <TableCell className={theme.generalPropsCell} >From: {props.private.startDate} To: {props.private.endDate}</TableCell>
                                    <TableCell><EditPrivateLessons component='dates' /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Fade>
        </Grid>
    )
}

const LessonsInformation = (props) => {

    const theme = styles()
    return (
        <Fragment>
            {props.group === null ? <Paper className={theme.generalInfoPaper}><Button onClick={() => props.createGroupLessons()}>Start Group Lessons</Button></Paper> : groupLessons(props, theme)}
            {props.private === null ? <Paper className={theme.generalInfoPaper}><Button onClick={() => props.createPrivateLessons()}>Start Private Lessons</Button></Paper> : privateLessons(props, theme)}
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createGroupLessons: () => dispatch(createGroupLessons()),
        createPrivateLessons: () => dispatch(createPrivateLessons()),
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsInformation)