import React from 'react';
import { styled, ThemeProvider } from '@mui/system';
import customTheme from "./theme"
import NavBar from "./components/bar/NavBar"

// const Div = styled('div')(({ Theme }) => ({
//     // backgroundColor: ,
//     color:"blue",
//     width: '100%',
//     
// }));
const MyThemeComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.primary.main,
    width:'100%',
    marginTop:'70px',
}));
export default function Layout({ children }) {
    return (
        <ThemeProvider theme={customTheme}>
            <MyThemeComponent>
                <NavBar/>
                {children}
            </MyThemeComponent>
        </ThemeProvider>
    )
};