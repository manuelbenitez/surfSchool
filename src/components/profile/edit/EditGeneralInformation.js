import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { editFullName, editLanguages, editDescription, editCualifications, editDateOfBirth } from '../../../store/actions/profileActions'


import { Dialog, DialogContent, FormControl, IconButton, InputLabel, Paper, Tooltip, Select, Input, MenuItem, Button, TextField, InputBase } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { Autocomplete } from 'formik-material-ui-lab'
import { languagesList, cualificationsList } from '../../../data/data'
import { Field, Form, Formik } from 'formik'
import styles from '../../../theme/theme'




const EditGeneralInformation = (props) => {

    const theme = styles()

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

    useEffect(() => {
        if (props.user !== undefined) {
            setFullName(props.user.fullName)
            setLanguages(props.user.languages)
            setCualifications(props.user.cualifications)
            setDateOfBirth(props.user.dateOfBirth)
            setDescription(props.user.description)
        }
    }, [props.user])

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
                <DialogContent className={theme.editDialog}>
                    <Paper className={theme.editPaper}>
                        <FormControl>
                            <InputLabel>Full Name</InputLabel>
                            <InputBase
                                onChange={(e) => setFullName(e.target.value)}
                                type='text'
                                className={theme.editInput}
                            />
                            <br />
                            <Button onClick={function () { props.editFullName(fullName); setOpenFullName(false) }} className={theme.editButton}>Save</Button>
                            <Button onClick={() => setOpenFullName(false)} className={theme.editButton} >Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openLanguages}>
                <DialogContent className={theme.editDialog}>
                    <Formik
                        initialValues={{
                            languages: [],
                            languagesArray: '',
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (values.languages.length >= 0) {
                                values.languagesArray = values.languages.toString();
                                setLanguages(values.languagesArray)
                            }
                            return errors;
                        }}
                    >
                        {({ touched, errors }) => (
                            <Paper className={theme.editPaper}>
                                <Form>
                                    <InputLabel>Languages</InputLabel>
                                    <Field
                                        name="languages"
                                        multiple
                                        component={Autocomplete}
                                        options={languagesList}
                                        className={theme.editInput}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                error={touched['languages'] && !!errors['languages']}
                                                helperText={touched['languages'] && errors['languages']}

                                                variant="outlined"
                                            />
                                        )}
                                    />
                                    <br />
                                    <Button
                                        onClick={function () { props.editLanguages(languages); setOpenLanguages(false) }}
                                        className={theme.editButton}
                                    >
                                        Save
                                        </Button>
                                    <Button
                                        onClick={() => setOpenLanguages(false)}
                                        className={theme.editButton}
                                    >
                                        Cancel
                                    </Button>
                                </Form>
                            </Paper>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>

            <Dialog open={openDescription}>
                <DialogContent className={theme.editDialog}>
                    <Paper className={theme.editPaper}>
                        <FormControl>
                            <TextField
                                onChange={e => setDescription(e.target.value)}
                                type='text'
                                maxLength='500'
                                multiline={true}
                                className={theme.editInput}
                            />
                            <br />
                            <Button onClick={function () { props.editDescription(description); setOpenDescription(false) }} className={theme.editButton} >Save</Button>
                            <Button onClick={() => setOpenDescription(false)} className={theme.editButton} >Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openCualifications}>
                <DialogContent className={theme.editDialog}>
                    <Paper className={theme.editPaper}>
                        <FormControl>
                            <InputLabel>Cualifications</InputLabel>
                            <Select
                                input={<Input />}
                                onChange={e => setCualifications(e.target.value)}
                                defaultValue=''
                                className={theme.editInput}
                            >
                                {cualificationsList.map((cualification) => (
                                    <MenuItem key={cualification} value={cualification} className={theme.editInput}>
                                        {cualification}
                                    </MenuItem>
                                ))}
                            </Select>
                            <br />
                            <Button onClick={function () { props.editCualifications(cualifications); setOpenCualifications(false) }} className={theme.editButton} >Save</Button>
                            <Button onClick={() => setOpenCualifications(false)} className={theme.editButton} >Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openDateOfBirth}>
                <DialogContent className={theme.editDialog}>
                    <Paper className={theme.editPaper}>
                        <FormControl>
                        <InputLabel>Date of Birth</InputLabel>
                            <TextField
                                onChange={e => setDateOfBirth(e.target.value)}
                                type='date'
                                className={theme.editInput}
                                variant='outlined'
                            />
                            <br />
                            <Button onClick={function () { props.editDateOfBirth(dateOfBirth); setOpenDateOfBirth(false) }} className={theme.editButton} >Save</Button>
                            <Button onClick={() => setOpenDateOfBirth(false)} className={theme.editButton} >Cancel</Button>
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