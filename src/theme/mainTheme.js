import { createMuiTheme } from '@material-ui/core/styles'

export const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#202020'
        },
        background: {
            paper: 'none',
            default: 'none'
        },
        text: {
            primary: '#e1c7a4f0',
            secondary: '#7f83b5'
        }
    },
    typography: {
        fontFamily: 'Fira Code',
        h4: {
            fontSize: '1.5rem',
            '@media (min-width:600px)': {
                fontSize: '2rem',
            },
            '@media (min-width:960px)': {
                fontSize: '2.5rem',
            }
        },
        body1: {
            fontSize: '0.5rem',
            '@media (min-width:600px)': {
                fontSize: '0.7rem',
            },
            '@media (min-width:960px)': {
                fontSize: '1rem',
            }
        }
    }
})