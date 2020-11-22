import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { editFullName, editLanguages, editDescription, editCualifications, editDateOfBirth } from '../../../store/actions/profileActions'


import { Dialog, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, Paper, Tooltip, Select, Input, MenuItem, Button, Box, TextField, TextareaAutosize } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { Autocomplete } from 'formik-material-ui-lab'
import { languagesList, cualificationsList } from '../../../data/data'
import { Field, Form, Formik } from 'formik'




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
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <TextField
                                onChange={(e) => setFullName(e.target.value)}
                                type='text'
                                label='Full Name'
                                autoFocus={true}

                            />
                            <br />
                            <Button onClick={function () { props.editFullName(fullName); setOpenFullName(false) }}>Save</Button>
                            <Button onClick={() => setOpenFullName(false)}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={openLanguages}>
                <DialogContent>
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
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false);
                                alert(JSON.stringify(values, null, 2));
                            }, 500);
                        }}
                    >
                        {({ submitForm, isSubmitting, touched, errors }) => (
                            <Form>
                                <Box margin={1}>
                                    <Field
                                        name="languages"
                                        multiple
                                        component={Autocomplete}
                                        options={languagesList}
                                        style={{ width: 300 }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                error={touched['languages'] && !!errors['languages']}
                                                helperText={touched['languages'] && errors['languages']}
                                                label="Languages"
                                                variant="outlined"
                                            />
                                        )}
                                    />
                                </Box>
                                <Box margin={1}>
                                    <Button
                                        onClick={function () { props.editLanguages(languages); setOpenLanguages(false) }}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        onClick={() => setOpenLanguages(false)}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>

            <Dialog open={openDescription}>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <TextareaAutosize
                                onChange={e => setDescription(e.target.value)}
                                type='text'
                                rowsMin='6'
                                maxLength='500'
                                placeholder='Description'
                                style={{ width: 300 }}
                            />
                            <br />
                            <Button onClick={function () { props.editDescription(description); setOpenDescription(false) }}>Save</Button>
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
                            <Button onClick={function () { props.editCualifications(cualifications); setOpenCualifications(false) }}>Save</Button>
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
                            <TextField
                                onChange={e => setDateOfBirth(e.target.value)}
                                type='date'
                            />
                            <br />
                            <Button onClick={function () { props.editDateOfBirth(dateOfBirth); setOpenDateOfBirth(false) }}>Save</Button>
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