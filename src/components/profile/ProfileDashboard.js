import React, { useState } from 'react'
import GeneralInformation from './GeneralInformation'
import LessonsInformation from './LessonsInformation'

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

const ProfileDashboard = () => {

    var [componentToRender, setComponentToRender] = useState('Basic Information')

    const theme = styles()
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
            <div>
            {
                            componentToRender === 'Basic Information' ? <GeneralInformation /> :
                                componentToRender === 'Lessons Information' ? <LessonsInformation /> :
                                    <div>Nada</div>
            }
            </div>
        </Grid>
    )
}

export default ProfileDashboard