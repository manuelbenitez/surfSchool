import React, { useState } from 'react'
import GeneralInformation from './GeneralInformation'
import LessonsInformation from './LessonsInformation'
import { connect } from 'react-redux'

//theme
import styles from '../../theme/theme'

import { Grid, Paper, List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const categories = [
    {
        id: 'Basic Information',
        children: [
            { id: 'Basic Information', icon: <AccountCircleIcon /> }
        ],
    },
    {
        id: 'Lessons Information',
        children: [
            { id: 'Lessons Information', icon: <GroupIcon /> },
            { id: 'Combo Lessons', icon: <ControlPointIcon /> }
        ]
    },
    {
        id: 'Bussiness Information',
        children: [
            { id: 'Bank Account Details', icon: <AccountBalanceIcon /> },
            { id: 'Lessons Statistics', icon: <EqualizerIcon /> }
        ]
    }


];


const ProfileDashboard = (props) => {

    var [componentToRender, setComponentToRender] = useState('Basic Information')

    const theme = styles()

    const { profile, auth, groupLessons, privateLessons } = props


    if (!auth.uid) return <Redirect to='/signin' />

    return (
        <Grid container direciton='row' style={{ background: '#fff8e8'}}>
            <Grid item xs={2}>
                <Paper className={theme.profileDrawer} elevation={6}>
                    <List>
                        <ListItem>
                            <ListItemIcon><RecentActorsIcon /></ListItemIcon>
                            <ListItemText><Typography className={theme.generalInfoCell}>Profile Overview</Typography></ListItemText>
                        </ListItem>
                        {categories.map(({ id, children }) => (
                            <React.Fragment key={id}>
                                <ListItem >
                                    <ListItemText

                                    >
                                        <Typography className={theme.generalInfoCell}>{id}</Typography>
                                    </ListItemText>
                                </ListItem>
                                {children.map(({ id: childId, icon }) => (
                                    <ListItem
                                        key={childId}
                                        button
                                        onClick={e => setComponentToRender(childId)}
                                    >
                                        <ListItemIcon >{icon}</ListItemIcon>
                                        <ListItemText
                                        >
                                            <Typography className={theme.generalInfoCell}>{childId}</Typography>
                                        </ListItemText>
                                    </ListItem>
                                ))}
                                <Divider />
                            </React.Fragment>
                        ))}

                    </List>
                </Paper>
            </Grid>
            <Grid item xs={10}>

                    {
                        componentToRender === 'Basic Information' ? <GeneralInformation user={profile} email={auth.email} /> :
                            componentToRender === 'Lessons Information' ? <LessonsInformation group={groupLessons} private={privateLessons} /> :
                                <div>Nada</div>
                    }
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth,
        groupLessons: state.firestore.data['group'],
        privateLessons: state.firestore.data['private'],
    }
}

export default compose(connect(mapStateToProps),
    firestoreConnect(props =>
        [{
            collection: 'users_instructors',
            doc: props.auth.uid,
            storeAs: 'group',
            subcollections: [{
                collection: 'group_lessons',
                doc: 'information',
            }]
        },
        {
            collection: 'users_instructors',
            doc: props.auth.uid,
            storeAs: 'private',
            subcollections: [{
                collection: 'private_lessons',
                doc: 'information',
            }]
        }]
    ))(ProfileDashboard)