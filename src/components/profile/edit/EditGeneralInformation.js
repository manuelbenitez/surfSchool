import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { editFullName, editLanguages, editDescription, editCualifications, editDateOfBirth } from '../../../store/actions/profileActions'


import { Dialog, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, Paper, Tooltip, Select, Input, MenuItem, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'



const languagesList = [
    'Afrikaans',
    'Albanian',
    'Arabic',
    'Armenian',
    'Basque',
    'Bengali',
    'Bulgarian',
    'Catalan',
    'Cambodian',
    'Chinese (Mandarin)',
    'Croatian',
    'Czech',
    'Danish',
    'Dutch',
    'English',
    'Estonian',
    'Fiji',
    'Finnish',
    'French',
    'Georgian',
    'German',
    'Greek',
    'Gujarati',
    'Hebrew',
    'Hindi',
    'Hungarian',
    'Icelandic',
    'Indonesian',
    'Irish',
    'Italian',
    'Japanese',
    'Javanese',
    'Korean',
    'Latin',
    'Latvian',
    'Lithuanian',
    'Macedonian',
    'Malay',
    'Malayalam',
    'Maltese',
    'Maori',
    'Marathi',
    'Mongolian',
    'Nepali',
    'Norwegian',
    'Persian',
    'Polish',
    'Portuguese',
    'Punjabi',
    'Quechua',
    'Romanian',
    'Russian',
    'Samoan',
    'Serbian',
    'Slovak',
    'Slovenian',
    'Spanish',
    'Swahili',
    'Swedish ',
    'Tamil',
    'Tatar',
    'Telugu',
    'Thai',
    'Tibetan',
    'Tonga',
    'Turkish',
    'Ukrainian',
    'Urdu',
    'Uzbek',
    'Vietnamese',
    'Welsh',
    'Xhosa',

]
const cualificationsList = [
    'Level 1',
    'Level 2',
    'Level 3',
];



const EditGeneralInformation = (props) => {

    const [openFullName, setOpenFullName] = useState(false)
    const [openLanguages, setOpenLanguages] = useState(false)
    const [openDescription, setOpenDescription] = useState(false)
    const [openCualifications, setOpenCualifications] = useState(false)
    const [openDateOfBirth, setOpenDateOfBirth] = useState(false)

    const [fullName, setFullName] = useState('')
    const [languages, setLanguages] = useState('')
    const [cualifications, setCualifications] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [description, setDescription] = useState('')


    function handleOpenClick(component) {
        if (component === 'languages') {
            setOpenLanguages(true)
        } else if (component === 'fullName') {
            setOpenFullName(true)
        } else if (component === 'description') {
            setOpenDescription(true)
        } else if (component === 'cualifications') {
            setOpenCualifications(true)
        } else if (component === 'dateOfBirth') {
            setOpenDateOfBirth(true)
        }
    }


    return (
        <Fragment>
            <Tooltip title='Edit Details'>
                <IconButton onClick={() => handleOpenClick(props.component)}>
                    <EditIcon />
                </IconButton>
            </Tooltip>


            <Dialog open={openFullName}>
                <DialogTitle>Full Name</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Full Name</InputLabel>
                            <Input
                                onChange={(e) => setFullName(e.target.value)}
                                type='text'
                            />
                            <br />
                            <Button onClick={function(){ props.editFullName(fullName) ; setOpenFullName(false)}}>Save</Button>
                            <Button onClick={() => setOpenFullName(false)}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openLanguages}>
                <DialogTitle>Languages</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Languages</InputLabel>
                            <Select
                                input={<Input />}
                                defaultValue=''
                                onChange={(e) => setLanguages(e.target.value)}
                            >
                                {languagesList.map((language) => (
                                    <MenuItem key={language} value={language}>
                                        {language}
                                    </MenuItem>
                                ))}
                            </Select>
                            <br />
                            <Button onClick={function(){ props.editLanguages(languages) ; setOpenLanguages(false)}}>Save</Button>
                            <Button onClick={() => setOpenLanguages(false)}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openDescription}>
                <DialogTitle>Description</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Description</InputLabel>
                            <Input
                                onChange={e => setDescription(e.target.value)}
                                type='text'
                            />
                            <br />
                            <Button onClick={function(){ props.editDescription(description) ; setOpenDescription(false)}}>Save</Button>
                            <Button onClick={() => setOpenDescription(false)}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openCualifications}>
                <DialogTitle>Cualifications</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Cualifications</InputLabel>
                            <Select
                                input={<Input />}
                                onChange={e => setCualifications(e.target.value)}
                                defaultValue=''
                            >
                                {cualificationsList.map((cualification) => (
                                    <MenuItem key={cualification} value={cualification}>
                                        {cualification}
                                    </MenuItem>
                                ))}
                            </Select>
                            <br />
                            <Button onClick={function(){ props.editCualifications(cualifications) ; setOpenCualifications(false)}}>Save</Button>
                            <Button onClick={() => setOpenCualifications(false)}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openDateOfBirth}>
                <DialogTitle>Date of birth</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <Input
                                onChange={e => setDateOfBirth(e.target.value)}
                                type='date'
                            />
                            <br />
                            <Button onClick={function(){props.editDateOfBirth(dateOfBirth) ; setOpenDateOfBirth(false)}}>Save</Button>
                            <Button onClick={() => setOpenDateOfBirth(false)}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editFullName: (fullName) => dispatch(editFullName(fullName)),
        editLanguages: (languages) => dispatch(editLanguages(languages)),
        editDescription: (description) => dispatch(editDescription(description)),
        editCualifications: (cualifications) => dispatch(editCualifications(cualifications)),
        editDateOfBirth: (dateOfBirth) => dispatch(editDateOfBirth(dateOfBirth)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGeneralInformation)

