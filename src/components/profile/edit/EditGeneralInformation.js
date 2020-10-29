import { IconButton, Tooltip } from '@material-ui/core'
import React, { Component, Fragment } from 'react'
import EditIcon from '@material-ui/icons/Edit'
import { connect } from 'react-redux'

export const EditGeneralInformation = (props) => {


    
    return (
        <Fragment>
            <Tooltip>
                <IconButton onClick={e => handleOpenClick(props.component)}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </Fragment>
    )
}

const mapStateToProps = (state) => {

}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(EditGeneralInformation)

