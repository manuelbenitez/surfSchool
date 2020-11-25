import { makeStyles } from '@material-ui/core/styles'
import zIndex from '@material-ui/core/styles/zIndex'
import background2 from '../background2.jpg'

const useStyles = makeStyles(theme => ({
    appBar: {
        background: 'rgba(255, 255, 255, 0)',
        zIndex: zIndex.drawer + 1,
        [theme.breakpoints.down(600)]: {
            alignItems: 'center',
            display: 'flex'
        }
    },
    mainGrid: {
        minHeight: '100vh',
        backgroundImage: `url(${background2})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.down(600)]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    imgText: {
        maxWidth: '31vw',
        maxHeight: '42vw',
        marginTop: '1vw',
        marginLeft: '9vw',
        [theme.breakpoints.down(600)]:{
            maxWidth: '50vh',
            maxHeight: '50vh',
            marginLeft: '-6vw',
        }
    },
    senseiTypo: {
        fontSize: '3vw',
        fontFamily: 'arvo',
        color: 'black',
        fontWeight: '700',
        letterSpacing: '0.1vw',
        display: 'flex',
        flex: '1',
        marginLeft: '30vw',
        marginRight: '10vw',
        [theme.breakpoints.down(600)]: {
            fontSize: '8vw',
            flex: '1',
            display: 'flex'
            
        }
    },
    signedInButton: {
        backgroundColor: 'black',
        borderRadius: 3,
        margin: '0.4vw',
        textTransform: 'none',
        color: 'white',
        fontFamily: 'arvo',
        fontSize: 'max (5vw, 5vw)',
        fontWeight: 'bold',

    },
    signedInPaper: {
        maxWidth: '30vw',
        height: '30vw',
        alignItems: 'center',
        margin: '5vw',
        marginTop: '10vw',
        display: 'flex',
        flex: '1',
        fontFamily: 'arvo',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
        boxShadow: '0px 3px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    signedOutButton: {
        backgroundColor: 'grey',
        borderRadius: 3,
        margin: '0.4vw',
        textTransform: 'none',
        color: 'white',
        fontFamily: 'arvo',
        fontSize: 'max (5vw, 5vw)',
        fontWeight: 'bold',

    },
    signedOutPaper: {
        maxWidth: '30vw',
        height: '30vw',
        alignItems: 'center',
        margin: '5vw',
        marginTop: '10vw',
        display: 'flex',
        fontFamily: 'arvo',
        flex: '1',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
        boxShadow: '0px 3px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    dashboardPaper: {
        maxWidth: '50vw',
        minHeight: '30vw',
        alignItems: 'center',
        margin: '5vw',
        marginTop: '9vw',
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
        boxShadow: '0px 5px 2px -3px rgba(0,0,0,0.2), 0px 4px 4px 0px rgba(0,0,0,0.14), 0px 3px 6px 0px rgba(0,0,0,0.12)',
        [theme.breakpoints.down(600)]:{
            minWidth: '70vw',
            minHeight: '70vw',
            marginTop: '0px',
            marginLeft: '-6vw',
        }
    },
    dashboardSelect: {
        minWidth: '10vw',
        maxWidth: '13vw',
        height: '1.5vw',
        fontFamily: 'arvo',
        [theme.breakpoints.down(600)]: {
            minWidth: '25vw',
            minHeight: '7vw',
        }
    },
    dashboardFormPaper: {
        background: 'rgba(255, 255, 255, 0.226)',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        
    },
    dashboardButton: {
        backgroundColor: 'black',
        borderRadius: 3,
        margin: '1vw',
        textTransform: 'none',
        color: 'white',
        fontFamily: 'arvo',
        fontSize: 'max (5vw, 5vw)',
        fontWeight: 'bold',

    },
    profileDrawer: {
        flexShrink: '0',
        zIndex: '0',
        background: 'rgba(255, 255, 255, 0.226)',
        minHeight: '100vh',
        maxWidth: '30vh',
        position: 'fixed',

    },
    generalInfoPaper: {
        marginTop: '9vh',
        paddingTop: '1vh',
        maxWidth: '100%',
        fontFamily: 'arvo',
        minHeight: '86vh',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
    },
    generalInfoGrid: {
        margin: '2vh',
    },
    generalInfoCell: {
        fontFamily: 'arvo',
        letterSpacing: '1px',
        fontWeight: 'bold',
        fontSize: '0.78vw'
    },
    generalPropsCell: {
        fontFamily: 'arvo',
        letterSpacing: '1px',
        fontSize: '0.78vw',
        maxWidth: '1000px',
    },
    editDialog: {
        background: '#fff8e8',
        maxWidth: '30vh',
        minHeight: '30vh',
        justifyContent: 'center',
        display: 'flex'
    },
    editPaper: {
        background: 'rgba(255, 255, 255, 0.226)',
        maxWidth: '15vw',
        display: 'flex',
        justifyContent: 'center',
    },
    editButton: {
        backgroundColor: 'black',
        borderRadius: 3,
        margin: '1vh',
        textTransform: 'none',
        color: 'white',
        fontFamily: 'arvo',
        fontSize: '0.88 vw',
        fontWeight: 'bold',
    },
    editInput: {
        maxWidth: '14vw',
        background: 'rgba(255, 255, 255, 0.226)',
        minHeight: '5vh',
        fontFamily: 'arvo',
        border: '2px solid black',
        borderRadius: 2,
        fontSize: '0.78vw',
        color: 'black',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 5,
            borderColor: 'white',
            boxShadow: '0 0 0 .3rem pink'
        },
        'label + &': {
            marginTop: '14px',
            marginLeft: '-5px',
            fontFamily: 'arvo',
        },

    },


}))

export default useStyles
