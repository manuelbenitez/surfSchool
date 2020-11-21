import { makeStyles } from '@material-ui/core/styles'
import zIndex from '@material-ui/core/styles/zIndex'
import 'typeface-arvo'

const useStyles = makeStyles(theme => ({
    appBar: {
        background: 'rgba(255, 255, 255, 0)',
        zIndex: zIndex.drawer + 1,
    },
    imgLogo: {
        maxHeight: '8vh',
        marginRight: '5vh',
        marginTop: '5px'
    },
    imgSurfSchool: {
        maxHeight: '8vh',
        marginRight: '50vh',
        marginTop: '5px'
    },
    imgText:{
        maxWidth: '600px',
        maxHeight: '800px',
        marginTop: '5vh',
        marginLeft: '20vh'
    },
    menuTypo: {
        flexGrow: '1',
        fontFamily: 'typeface-arvo',
        fontSize: '25px',
        letterSpacing: '4px',
        color: 'black',
    },
    signedInButton: {
        backgroundColor: 'black',
        borderRadius: 3,
        margin: '1vh',
        textTransform: 'none',
        color: 'white',
        fontFamily: 'typeface-arvo',
        fontSize: '17px',
        fontWeight: 'bold',

    },
    signedInPaper: {
        width: '800px',
        height: '500px',
        alignItems: 'center',
        margin: '10vh',
        marginTop: '20vh',
        display: 'flex',
        flex: '1',
        fontFamily: 'typeface-arvo',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
        boxShadow: '0px 3px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    signedOutButton: {
        backgroundColor: 'grey',
        borderRadius: 3,
        margin: '1vh',
        textTransform: 'none',
        color: 'white',
        fontFamily: 'typeface-arvo',
        fontSize: '17px',
        fontWeight: 'bold',

    },
    signedOutPaper: {
        width: '800px',
        height: '500px',
        alignItems: 'center',
        margin: '10vh',
        marginTop: '20vh',
        display: 'flex',
        fontFamily: 'typeface-arvo',
        flex: '1',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
        boxShadow: '0px 3px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    dashboardPaper: {
        width: '800px',
        height: '500px',
        alignItems: 'center',
        margin: '10vh',
        marginTop: '20vh',
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
        boxShadow: '0px 3px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    },
    dashboardSelect: {
        minWidth: '300px',
        height: '25px',
        fontFamily: 'typeface-arvo',
    },
    dashboardButton: {
        backgroundColor: 'black',
        borderRadius: 3,
        margin: '1vh',
        textTransform: 'none',
        color: 'white',
        fontFamily: 'typeface-arvo',
        fontSize: '17px',
        fontWeight: 'bold',

    },
    profileDrawer: {
        flexShrink: '0',
        zIndex: '0', 
        background: 'rgba(255, 255, 255, 0.226)',
        minHeight: '100vh',
        width: '30vh',
            
    },
    profileComponents: {
        background: '#A3E7FC',
        marginLeft: '300px',
    },
    generalInfoPaper: {
        marginTop: '9vh',
        paddingTop: '1vh',
        maxWidth: '100%',
        fontFamily: 'typeface-arvo',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
    },
    generalInfoGrid: {
        margin: '2vh',
    },
    generalInfoCell: {
        fontFamily: 'typeface-arvo',
        letterSpacing: '1px',
        fontWeight: 'bold',
        fontSize: '15px'
    },
    generalPropsCell: {
        fontFamily: 'typeface-arvo',
        letterSpacing: '1px',
        fontSize: '15px'
    }


}))

export default useStyles
