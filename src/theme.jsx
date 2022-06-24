import {
    createTheme,
} from '@mui/material/styles';

//My Pick
// const button = '#3F8EFC'
// const dark = '#2667FF'

//Mom's Pick
// const button = '#6497b1'
// const dark = '#005b96'

//third pick
const dark = '#107dac'
const button = '#189ad3'

const realDark = '#263238'
const Outline = '#87BFFF';

const customTheme = createTheme({
    palette: {
        primary: {
            contact:'#f5f5f5',
            button: button,
            text: '#ADD7F6',
            light: Outline,
            main: '#FFFFFF',
            dark: dark,
            realDark: realDark,
        },
        secondary: {
            button: button,
            text: '#f0eceb',
            light: '#ceebfb',
            main: '#a3d6f5',
            dark: dark,
            realDark: realDark,
        },

    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: realDark,
                    },
                    '& label.Mui-focused': {
                        color: realDark,
                    },
                    '& .MuiOutlinedInput-root': {
                        color: realDark,
                        '&.Mui-focused fieldset': {
                            borderColor: Outline,
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    '&.Mui-focused fieldset': {
                        '&.MuiOutlinedInput-notchedOutline': {
                            borderColor: Outline,
                        }
                    },
                },
                select: {
                    color: realDark,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: realDark,
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    fontSize: '1rem',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: 'white',
                    backgroundColor: button,
                    '&:hover': {
                        color: 'white',
                        backgroundColor: button,
                    },
                },
            },
        },
    }
});
export default customTheme

