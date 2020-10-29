import React, { Fragment } from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import styles from '../../theme/theme'

const LessonsInformation = (props) => {

    const theme = styles()

    

    return (
        <Fragment>
            <Paper className={theme.generalInfoPaper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Group Lessons Information</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Level</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Places</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maximum amount of students</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Minimum amount of students</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Times</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dates</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
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
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Level</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Places</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maximum amount of students</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Minimum amount of students</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Times</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dates</TableCell>
                            <TableCell>{}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </Fragment>
    )
}

export default LessonsInformation