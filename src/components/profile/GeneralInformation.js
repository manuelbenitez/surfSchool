import React from 'react'
import { Fade, Grid, Paper, Slide, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'


//theme
import styles from '../../theme/theme'
import EditGeneralInformation from './edit/EditGeneralInformation'


const GeneralInformation = (props) => {

    const theme = styles()

    return (

        <Grid container>
            <Grid item xs={12} className={theme.generalInfoGrid}>
                    <Fade in={true} timeout={5000}>
                        <Paper className={theme.generalInfoPaper} elevation={6}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={theme.generalInfoCell}>General Information</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className={theme.generalInfoCell}>Email</TableCell>
                                        <TableCell className={theme.generalPropsCell}>{props.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={theme.generalInfoCell}>Name</TableCell>
                                        <TableCell className={theme.generalPropsCell}>{props.user.fullName}</TableCell>
                                        <TableCell><EditGeneralInformation component='fullName' user={props.user} /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={theme.generalInfoCell}>Languages</TableCell>
                                        <TableCell className={theme.generalPropsCell}>{props.user.languages}</TableCell>
                                        <TableCell><EditGeneralInformation component='languages' /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={theme.generalInfoCell}>Description</TableCell>
                                        <TableCell className={theme.generalPropsCell}>{props.user.description}</TableCell>
                                        <TableCell><EditGeneralInformation component='description' /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={theme.generalInfoCell}>Cualifications</TableCell>
                                        <TableCell className={theme.generalPropsCell}>{props.user.cualifications}</TableCell>
                                        <TableCell><EditGeneralInformation component='cualifications' /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={theme.generalInfoCell}>Date of Birth</TableCell>
                                        <TableCell className={theme.generalPropsCell}>{props.user.dateOfBirth}</TableCell>
                                        <TableCell><EditGeneralInformation component='dateOfBirth' /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Fade>
            </Grid>
        </Grid>
    )
}

export default GeneralInformation