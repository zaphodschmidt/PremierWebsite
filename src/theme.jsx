import {
    createTheme,
} from '@mui/material/styles';

const mainBackgroundColor = '#a3d6f5'
const topBarAndMenuBackground = '#66a7c5'
const textColorForBarMenu = '#f0eceb'
const activeTopBarAndMenuBackground = '#ceebfb'
const activeTextColorForBarMenu = '#2b3f81'

const customTheme = createTheme({
    palette: {
        primary: {
            light: activeTopBarAndMenuBackground,
            main: mainBackgroundColor,
            dark: topBarAndMenuBackground,
            text: textColorForBarMenu,
            realDark: activeTextColorForBarMenu,
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: activeTextColorForBarMenu,
                    },
                    '& label.Mui-focused': {
                        color: activeTextColorForBarMenu,
                    },
                    '& .MuiOutlinedInput-root': {
                        color: activeTextColorForBarMenu,
                        '&.Mui-focused fieldset': {
                            borderColor: activeTextColorForBarMenu,
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
                            borderColor: activeTextColorForBarMenu,
                        }
                    },
                },
                select: {
                    color: activeTextColorForBarMenu,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: activeTextColorForBarMenu,
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
                    backgroundColor: topBarAndMenuBackground,
                    '&:hover': {
                        color: 'white',
                        backgroundColor: topBarAndMenuBackground,
                    },
                },
            },
        },
    }
});
export default customTheme


// $mainColor: rgb(67, 100, 211);
// $startBlue: rgb(206,235,251);

// $endBlue: rgb(102,167,197);
// $theRed: rgb(238,50,51);
// $theWhite: rgb(240,236,235);
// $theGrey: rgb(108,116,118);


// $portfolioBack:rgb(163,214,245);

// //Main Background color
// $mainBackgroundColor: rgb(163,214,245);

// //Top Bar and Menu colors
// $topBarAndMenuBackground: rgb(102,167,197);
// $textColorForBarMenu:rgb(240,236,235);
// $activeTopBarAndMenuBackground:rgb(206,235,251);
// $activeTextColorForBarMenu:rgb(43, 63, 129);

