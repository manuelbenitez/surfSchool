import { createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import zIndex from '@material-ui/core/styles/zIndex'

const useStyles = makeStyles(theme => ({
    appBar: {
        background: '#32908F',
        zIndex: zIndex.drawer + 1,
    },
    imgLogo: {
        maxHeight: '8vh',
        marginRight: '10px',
    },
    menuTypo: {
        flexGrow: '1',
    },
    signedInButton: {
        backgroundColor: '#26C485',
        borderRadius: 30,
        margin: '5px',
        textTransform: 'none'

    },
    signedInPaper: {
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
    signedOutButton: {
        backgroundColor: '#553A41',
        color: 'white',
        borderRadius: 30,
        margin: '5px',
        textTransform: 'none'

    },
    signedOutPaper: {
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
    },
    dashboardButton: {
        backgroundColor: '#553A41',
        borderRadius: 30,
        margin: '5px',
        textTransform: 'none'

    },
    profileDrawer: {
        flexShrink: '0',
        zIndex: '0',
    },
    profileComponents: {
        background: '#A3E7FC',
        marginLeft: '300px'
    },
    generalInfoPaper: {
        marginTop: '8vh',
        maxWidth: '1500px',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.226)',
    },

}))

export default useStyles

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#32908F'
        },
        secondary: {
            main: '#553A41',
        },
    }
})

theme.overrides = {
    // MuiButton: {
    //     root: {
    //         borderRadius: 30,
    //         margin: '5px',
    //         textTransform: 'none'
    //     }
    // },
    // MuiTypography: {
    //     root: {
    //         flexGrow: 1,
    //     }
    // },
    // MuiPaper: {
    //     outlined: {
    //         width: '800px',
    //         height: '500px',
    //         alignItems: 'center',
    //         margin: '10vh',
    //         marginTop: '20vh',
    //         display: 'flex',
    //         flex: '1',
    //         justifyContent: 'center',
    //         backgroundColor: 'rgba(255, 255, 255, 0.226)',
    //         boxShadow: '0px 3px 1px -1px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',

    //     },
    // },
    MuiSelect: {
        outlined: {
            minWidth: '300px',
            height: '25px',
        }
    },
    MuiInput: {
        root: {
            minWidth: '300px',
            height: '25px',
        }
    }

}
