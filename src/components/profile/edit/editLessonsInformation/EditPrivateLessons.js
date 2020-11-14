import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { editPrice, editLevel, editDescription, editPlaces, editMax, editMin, editTimes } from '../../../../store/actions/privateLessonsActions'
import { Button, Dialog, DialogContent, DialogTitle, IconButton, InputLabel, Paper, Tooltip, FormControl, Input, Select, TextareaAutosize, MenuItem, Typography, ButtonGroup } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close';


import { levelsList, placesList, hoursList, minutesList } from '../../../../data/data'

export const EditPrivateLessons = (props) => {

    const [priceOpen, setPriceOpen] = useState(false)
    const [levelOpen, setLevelOpen] = useState(false)
    const [descriptionOpen, setDescriptionOpen] = useState(false)
    const [placesOpen, setPlacesOpen] = useState(false)
    const [studentsOpen, setStudentsOpen] = useState(false)
    const [timesOpen, setTimesOpen] = useState(false)


    const [price, setPrice] = useState('')
    const [level, setLevel] = useState('')
    const [description, setDescription] = useState('')
    const [places, setPlaces] = useState('')
    const [max, setMax] = useState('')
    const [min, setMin] = useState('')
    const [error, setError] = useState('')

    //TIMES DIALOG CONSTANTS
    const [times, setTimes] = useState('')
    const [startHour, setStartHour] = useState('')
    const [startMinute, setStartMinute] = useState('')
    const [endHour, setEndHour] = useState('')
    const [endMinute, setEndMinute] = useState('')



    function handleOpenClick(component) {
        if (component === 'price') {
            setPriceOpen(true)
        } else if (component === 'level') {
            setLevelOpen(true)
        } else if (component === 'description') {
            setDescriptionOpen(true)
        } else if (component === 'places') {
            setPlacesOpen(true)
        } else if (component === 'students') {
            setStudentsOpen(true)
        } else if (component === 'times') {
            setTimesOpen(true)
        }
    }


    function validateMaxMin() {
        if (max < min) {
            setError("Maximum amout of students can't be smaller than the minimum")
        } else {
            props.editMax(max)
            props.editMin(min)
            setError('')
            setStudentsOpen(false)
        }
    }

    useEffect(() => {
        if (props.times !== undefined) {
            setTimes(props.times)
        }
    }, [props.times])

    const timesArray = times.split(',')


    //
    //
    //TIMES DIALOG FUNCTIONS
    //
    //
    function addTime() {


        var newStartTime = startHour.concat(':' + startMinute + '-')
        var newEndTime = endHour.concat(':' + endMinute)
        var isDuplicate = false

        //Checks for duplicated values and sets isDuplicate
        timesArray.map(time => (
            time === newStartTime.concat(newEndTime) ? isDuplicate = true : null
        ))

        //Checks if start hour is not later than end hour
        // and Checks if any of the values is empty
        // and if duplicate is true, sets the error to 'Duplicate  Time'
        if (parseInt(startHour) > parseInt(endHour)) {
            setError("Start hour can't be earlier than the end hour")
        } else if (startHour === '' || endHour === '' || startMinute === '' || endMinute === '') {
            setError("You must select a value for all times")
        } else if (isDuplicate) {
            setError('Duplicate time')
        } else {
            setError('')
            setTimes(times.concat(newStartTime.concat(newEndTime, ',')))
        }
    }


    //Dispatch the action to delete the selected item from the data base
    function deleteTimes(timeToDelete) {
        for (var i = 0; i < timesArray.length; i++) {
            if (timesArray[i] === timeToDelete) {
                timesArray.splice(i, 1)

                //dispatch that updates the database with the new array
                var timesString = timesArray.toString()
                props.editTimes(timesString)

            }
        }
    }

    // Saves the times to the data base
    function saveTimes() {
        var timesString = timesArray.toString()
        props.editTimes(timesString)
        setTimesOpen(false)
        setError('')
        setStartHour('')
        setStartMinute('')
        setEndHour('')
        setEndMinute('')
    }


    return (
        <Fragment>
            <Tooltip title="Edit Details">
                <IconButton onClick={() => handleOpenClick(props.component)}>
                    <EditIcon />
                </IconButton>
            </Tooltip>

            <Dialog open={priceOpen}>
                <DialogTitle>Price</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Price</InputLabel>
                            <Input
                                type='text'
                                onChange={(e) => setPrice(e.target.value)} />
                            <Button onClick={function () { props.editPrice(price); setPriceOpen(false) }}>Save</Button>
                            <Button onClick={function () { setPriceOpen(false) }}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={levelOpen}>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Level</InputLabel>
                            <Select
                                type='text'
                                defaultValue=''
                                onChange={(e) => setLevel(e.target.value)} >
                                {levelsList.map((level) => (
                                    <MenuItem key={level} value={level}>{level}</MenuItem>
                                ))}
                            </Select>
                            <Button onClick={function () { props.editLevel(level); setLevelOpen(false) }}>Save</Button>
                            <Button onClick={function () { setLevelOpen(false) }}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={descriptionOpen}>
                <DialogTitle>Description</DialogTitle>
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
                            <Button onClick={function () { props.editDescription(description); setDescriptionOpen(false) }}>Save</Button>
                            <Button onClick={function () { setDescriptionOpen(false) }}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={placesOpen}>
                <DialogTitle>Places</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Places</InputLabel>
                            <Select
                                type='text'
                                defaultValue=''
                                onChange={e => setPlaces(e.target.value)}>
                                {placesList.map((place) => (
                                    <MenuItem key={place} value={place}>{place}</MenuItem>
                                ))}
                            </Select>
                            <Button onClick={function () { props.editPlaces(places); setPlacesOpen(false) }}>Save</Button>
                            <Button onClick={function () { setPlacesOpen(false) }}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={studentsOpen}>
                <DialogTitle>Amout of students</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <Select
                                type='text'
                                defaultValue=''
                                placeholder='Minimum amount of students'
                                onChange={e => setMin(e.target.value)}
                                style={{ width: 100 }}>
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='2'>2</MenuItem>
                                <MenuItem value='3'>3</MenuItem>
                                <MenuItem value='4'>4</MenuItem>
                                <MenuItem value='5'>5</MenuItem>
                                <MenuItem value='6'>6</MenuItem>
                                <MenuItem value='7'>7</MenuItem>
                                <MenuItem value='8'>8</MenuItem>
                            </Select>
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <Select
                                type='text'
                                defaultValue=''
                                placeholder='Maximum amount of students'
                                onChange={e => setMax(e.target.value)}
                                style={{ width: 100 }}>
                                <MenuItem value='1'>1</MenuItem>
                                <MenuItem value='2'>2</MenuItem>
                                <MenuItem value='3'>3</MenuItem>
                                <MenuItem value='4'>4</MenuItem>
                                <MenuItem value='5'>5</MenuItem>
                                <MenuItem value='6'>6</MenuItem>
                                <MenuItem value='7'>7</MenuItem>
                                <MenuItem value='8'>8</MenuItem>
                            </Select>
                        </FormControl>
                        {error ? <Typography color='error' variant='body1'>{error}</Typography> : null}
                        <br></br>
                        <Button onClick={function () { validateMaxMin() }}>Save</Button>
                        <Button onClick={function () { setStudentsOpen(false) }}>Cancel</Button>
                    </Paper>
                </DialogContent>
            </Dialog>


            {/* 
            
            
            START OF THE COMPONENT EDIT TIMES 
            
            
            
            
            */}





            <Dialog open={timesOpen}>
                <DialogTitle>Times</DialogTitle>
                <DialogContent>
                    <Paper>
                        {timesArray.map(time => (
                            time === '' ? null :
                                <ButtonGroup key={time}>
                                    <Button>{time}</Button>
                                    <Button><CloseIcon onClick={e => deleteTimes(time)} /></Button>
                                </ButtonGroup>
                        ))}
                        <br />
                        <FormControl>
                            <Select
                                type='text'
                                defaultValue=''
                                onChange={e => setStartHour(e.target.value)}
                            >
                                {hoursList.map(hour => (
                                    <MenuItem key={hour} value={hour}>{hour}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select
                                type='text'
                                defaultValue=''
                                onChange={e => setStartMinute(e.target.value)}
                            >
                                {minutesList.map(minute => (
                                    <MenuItem key={minute} value={minute}>{minute}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <br></br>
                        <FormControl>
                            <Select
                                type='text'
                                defaultValue=''
                                onChange={e => setEndHour(e.target.value)}
                            >
                                {hoursList.map(hour => (
                                    <MenuItem key={hour} value={hour}>{hour}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select
                                type='text'
                                defaultValue=''
                                onChange={e => setEndMinute(e.target.value)}
                            >
                                {minutesList.map(minute => (
                                    <MenuItem key={minute} value={minute}>{minute}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {error ? <Typography color='error' variant='body1'>{error}</Typography> : null}
                        <br></br>
                        <Button onClick={() => addTime()}>Add time</Button>
                        <Button onClick={() => saveTimes()}>Save</Button>
                    </Paper>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        editPrice: (price) => dispatch(editPrice(price)),
        editLevel: (level) => dispatch(editLevel(level)),
        editDescription: (description) => dispatch(editDescription(description)),
        editPlaces: (places) => dispatch(editPlaces(places)),
        editMax: (max) => dispatch(editMax(max)),
        editMin: (min) => dispatch(editMin(min)),
        editTimes: (times) => dispatch(editTimes(times)),
    }
}

export default connect(null, mapDispatchToProps)(EditPrivateLessons)
