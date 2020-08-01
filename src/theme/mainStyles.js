import { makeStyles } from '@material-ui/core/styles'
import Background from '../assets/images/portbackground.png'

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    particles: {
        position: 'fixed !important',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#202020'
    },
    main: {
        height: '100vh',
    },
    home: {
        backgroundColor: 'null',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    tagLineLeft: {
        display: 'flex',
        alignItems: 'center',
        color: '#e1c7a4f0',
    },
    tagLineRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: '#e1c7a4f0',
    },
    homeHeader: {
        zIndex: 2
    },
    portrait: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 2
    },
    tabIcon: {
        maxWidth: 50,
        maxHeight: 50,
        fill: '#aeb4ff',
        transition: 'transform .2s',
        '&:hover': {
            transform: 'scale(1.3)',
            fill: '#fff'
        }
    },
    introCard: {
        zIndex: 2
    },
    logoDiv: {
        width: '35%',
        position: 'absolute',
        alignSelf: 'center'
    },
    brandLogo: {
        width: '100%',
    }
}))