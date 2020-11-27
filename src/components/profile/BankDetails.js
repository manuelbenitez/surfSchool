import React from 'react'
import { Formik } from 'formik'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import styles from '../../theme/theme'

const BankDetails = () => {


    return (
        <AddBankDetails/>
    )
}

const AddBankDetails = () =>{

    const theme = styles()


    //last name and first name
    //new iban
    //new bic
    //card imagine showing iban-


    return (
        <Grid container>
            <Grid item xs={12} className={theme.bankDetailsGrid}>
                <Paper className={theme.bankDetailsPaper}>
                    <AccountBalanceIcon style={{ fontSize: '10vw', marginTop: '4vw'}} />
                    <Typography style={{ fontSize: '1vw', fontWeight: '700', fontFamily: 'arvo'}}>Before you start giving lessons, add your bank account details!</Typography>
                    <Button  className={theme.signedInButton}>Add bank details</Button>
                </Paper>    
            </Grid>
        </Grid> 
    )
}

export default BankDetails