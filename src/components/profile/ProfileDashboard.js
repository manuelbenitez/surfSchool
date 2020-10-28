import React, { useState } from 'react'
import GeneralInformation from './GeneralInformation'
import LessonsInformation from './LessonsInformation'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

//theme
import styles from '../../theme/theme'

import { Grid, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from '@material-ui/core'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

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

    const user = props.profile

    return (
        <Grid className='main'>
            <Drawer className={theme.profileDrawer} variant='permanent'>
                <List>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem>
                        <ListItemIcon><RecentActorsIcon /></ListItemIcon>
                        <ListItemText>Profile Overview</ListItemText>
                    </ListItem>
                    {categories.map(({ id, children }) => (
                        <React.Fragment key={id}>
                            <ListItem >
                                <ListItemText

                                >
                                    {id}
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
                                        {childId}
                                    </ListItemText>
                                </ListItem>
                            ))}
                            <Divider />
                        </React.Fragment>
                    ))}

                </List>
            </Drawer>
            <div className={theme.profileComponents}>
                {
                    componentToRender === 'Basic Information' ? <GeneralInformation user={user} /> :
                        componentToRender === 'Lessons Information' ? <LessonsInformation /> :
                            <div>Nada</div>
                }
            </div>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        profile: state.firestore.ordered.users_instructors
    }
}

export default compose(
connect(mapStateToProps),
firestoreConnect([
    { collection: `users_instructors`},
])
)(ProfileDashboard)