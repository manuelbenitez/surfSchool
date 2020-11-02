import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'

import { editPrice, editLevel, editDescription, editPlaces, editMax, editMin, editTimes } from '../../../../store/actions/groupLessonsActions'
import { Button, Dialog, DialogContent, DialogTitle, IconButton, InputLabel, Paper, Tooltip, FormControl, Input } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

const EditGroupLessons = (props) => {


    const [priceOpen, setPriceOpen] = useState(false)
    const [levelOpen, setLevelOpen] = useState(false)
    const [descriptionOpen, setDescriptionOpen] = useState(false)
    const [placesOpen, setPlacesOpen] = useState(false)
    const [maxOpen, setMaxOpen] = useState(false)
    const [minOpen, setMinOpen] = useState(false)
    const [timesOpen, setTimesOpen] = useState(false)


    const [price, setPrice] = useState('')
    const [level, setLevel] = useState('')
    const [description, setDescription] = useState('')
    const [places, setPlaces] = useState('')
    const [max, setMax] = useState('')
    const [min, setMin] = useState('')
    const [times, setTimes] = useState('')


    function handleOpenClick(component) {
        if (component === 'price') {
            setPriceOpen(true)
        } else if (component === 'level') {
            setLevelOpen(true)
        } else if (component === 'description') {
            setDescriptionOpen(true)
        } else if (component === 'places') {
            setPlacesOpen(true)
        } else if (component === 'max') {
            setMaxOpen(true)
        } else if (component === 'min') {
            setMinOpen(true)
        } else if (component === 'times') {
            setTimesOpen(true)
        }
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
                <DialogTitle>Level</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Level</InputLabel>
                            <Input
                                type='text'
                                onChange={(e) => setLevel(e.target.value)} />
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
                            <InputLabel>Description</InputLabel>
                            <Input
                                type='text'
                                onChange={(e) => setDescription(e.target.value)} />
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
                            <Input
                                type='text'
                                onChange={(e) => setPlaces(e.target.value)}
                            />
                            <Button onClick={function () { props.editPlaces(places); setPlacesOpen(false) }}>Save</Button>
                            <Button onClick={function () { setPlacesOpen(false) }}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={maxOpen}>
                <DialogTitle>Maximum amout of students</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Maximum amout of students</InputLabel>
                            <Input
                                type='text'
                                onChange={(e) => setMax(e.target.value)} />
                            <Button onClick={function () { props.editMax(max); setMaxOpen(false) }}>Save</Button>
                            <Button onClick={function () { setMaxOpen(false) }}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={minOpen}>
                <DialogTitle>Minimum amount of students</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Minimum amount of students</InputLabel>
                            <Input
                                type='text'
                                onChange={(e) => setMin(e.target.value)}
                            />
                            <Button onClick={function () { props.editMin(min); setMinOpen(false) }}>Save</Button>
                            <Button onClick={function () { setMinOpen(false) }}>Cancel</Button>
                        </FormControl>
                    </Paper>
                </DialogContent>
            </Dialog>

            <Dialog open={timesOpen}>
                <DialogTitle>Times</DialogTitle>
                <DialogContent>
                    <Paper>
                        <FormControl>
                            <InputLabel>Times</InputLabel>
                            <Input
                                type='text'
                                onChange={(e) => setTimes(e.target.value)}
                            />
                            <Button onClick={function () { props.editTimes(times); setTimesOpen(false); }}>Save</Button>
                            <Button onClick={function () { setTimesOpen(false) }}>Cancel</Button>
                        </FormControl>
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

export default connect(null, mapDispatchToProps)(EditGroupLessons)
