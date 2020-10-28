import React from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'


//theme
import styles from '../../theme/theme'


const GeneralInformation = (user) => {

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
                        <TableCell>Name</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Languages</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>

    )
}

export default GeneralInformation