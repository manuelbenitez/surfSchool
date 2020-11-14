import React from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'


//theme
import styles from '../../theme/theme'
import EditGeneralInformation from './edit/EditGeneralInformation'


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
                        <TableCell><EditGeneralInformation component='fullName' user={props.user}/></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Languages</TableCell>
                        <TableCell>{props.user.languages}</TableCell>
                        <TableCell><EditGeneralInformation component='languages' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{props.user.description}</TableCell>
                        <TableCell><EditGeneralInformation component='description' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cualifications</TableCell>
                        <TableCell>{props.user.cualifications}</TableCell>
                        <TableCell><EditGeneralInformation component='cualifications' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>{props.user.dateOfBirth}</TableCell>
                        <TableCell><EditGeneralInformation component='dateOfBirth' /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>

    )
}

export default GeneralInformation