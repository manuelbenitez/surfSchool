import React from 'react'
import { Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, ThemeProvider } from '@material-ui/core'


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
                        <TableCell>{user.user.name}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>{user.user.email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Languages</TableCell>
                        <TableCell>{user.user.languages}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>

    )
}

export default GeneralInformation