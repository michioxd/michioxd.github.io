import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import '@fontsource/libre-baskerville/400.css';
import '@fontsource/libre-baskerville/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: [
            "Libre Baskerville",
            "Roboto",
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        allVariants: {
            color: "#774B43",
            textShadow: '0 0 1px'
        },
        h1: {
            color: "#D47999"
        },
        h2: {
            color: "#D47999"
        },
        h3: {
            color: "#D47999"
        },
        h4: {
            color: "#D47999"
        },
        h5: {
            color: "#D47999"
        },
        h6: {
            color: "#D47999"
        }
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '16px'
                }
            }
        }
    },
    palette: {
        primary: {
            main: "#ffc7c7",
        },
        secondary: {
            main: '#dbafff',
        },
        success: {
            main: '#aafff8'
        },
        error: {
            main: '#ffabde'
        },
        warning: {
            main: '#ffffb0'
        }
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.Fragment>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.Fragment>,
)
