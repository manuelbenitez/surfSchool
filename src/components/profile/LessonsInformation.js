import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import styles from '../../theme/theme'
import EditGroupLessons from './edit/editLessonsInformation/EditGroupLessons'
import EditPrivateLessons from './edit/editLessonsInformation/EditPrivateLessons'
import { createGroupLessons } from '../../store/actions/groupLessonsActions'
import { createPrivateLessons } from '../../store/actions/privateLessonsActions'


function groupLessons(props, theme) {
    return (
        <Paper className={theme.generalInfoPaper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Group Lessons Information</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Price (per hour per person)</TableCell>
                        <TableCell>$ {props.group.price}</TableCell>
                        <TableCell><EditGroupLessons component='price' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Level</TableCell>
                        <TableCell>{props.group.level}</TableCell>
                        <TableCell><EditGroupLessons component='level' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{props.group.description}</TableCell>
                        <TableCell><EditGroupLessons component='description' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Places</TableCell>
                        <TableCell>{props.group.places}</TableCell>
                        <TableCell><EditGroupLessons component='places' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum and maximum amount of students</TableCell>
                        <TableCell>{props.group.min} - {props.group.max}</TableCell>
                        <TableCell><EditGroupLessons component='students' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Times</TableCell>
                        <TableCell>{props.group.times}</TableCell>
                        <TableCell><EditGroupLessons component='times' times={props.group.times} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dates</TableCell>
                        <TableCell>{}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}

function privateLessons(props, theme) {
    return (
        <Paper className={theme.generalInfoPaper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Private Lessons Information</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Price</TableCell>
                        <TableCell>{props.private.price}</TableCell>
                        <TableCell><EditPrivateLessons component='price'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Level</TableCell>
                        <TableCell>{props.private.level}</TableCell>
                        <TableCell><EditPrivateLessons component='level'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{props.private.description}</TableCell>
                        <TableCell><EditPrivateLessons component='description'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Places</TableCell>
                        <TableCell>{props.private.places}</TableCell>
                        <TableCell><EditPrivateLessons component='places'/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Minimum and maximum amount of students</TableCell>
                        <TableCell>{props.private.min} - {props.private.max}</TableCell>
                        <TableCell><EditPrivateLessons component='students' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Times</TableCell>
                        <TableCell>{props.private.times}</TableCell>
                        <TableCell><EditPrivateLessons component='times' times={props.private.times}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Dates</TableCell>
                        <TableCell>{}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}

const LessonsInformation = (props) => {

    const theme = styles()
    return (
        <Fragment>
            <Paper className={theme.generalInfoPaper}>
                {props.group === null ? <Paper className={theme.generalInfoPaper}><Button onClick={() => props.createGroupLessons()}>Start Group Lessons</Button></Paper> : groupLessons(props, theme)}
                {props.private === null ? <Paper className={theme.generalInfoPaper}><Button onClick={() => props.createPrivateLessons()}>Start Private Lessons</Button></Paper> : privateLessons(props, theme)}
            </Paper>
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