import React from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'


//theme
import styles from '../../theme/theme'


const GeneralInformation = (props) => {

    const theme = styles()

    return (

        <Paper className={theme.generalInfoPaper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>General Information</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>{props.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{props.user.fullName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Languages</TableCell>
                        <TableCell>{props.user.languages}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{props.user.description}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cualifications</TableCell>
                        <TableCell>{props.user.cualifications}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>{props.user.dateOfBirth}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>

    )
}

export default GeneralInformation