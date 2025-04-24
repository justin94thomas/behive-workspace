// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFCF4B', // brandPrimary
        },
        secondary: {
            main: '#F9F9F9', // brandSecondary
        },
        text: {
            primary: '#263238', // textMain
            secondary: '#65624C', // textSecondary
        },
        grey: {
            100: '#E0E0E0',
            200: '#CECECC',
            300: '#B7B6B8',
            400: '#828282',
            500: '#4F4F4F',
            600: '#333333',
        },
    },
    spacing: 4, // base spacing unit (used with theme.spacing(n))
    typography: {
        fontFamily: 'Inter, sans-serif',
        fontSize: 16, // base font size (1rem)

        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontSize: '3.625rem', // 58px
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.25rem', // 36px
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.5rem', // 24px
            fontWeight: 600,
        },
        h4: {
            fontSize: '1.25rem', // 20px
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.125rem', // 18px
            fontWeight: 500,
        },
        h6: {
            fontSize: '1rem', // 16px
            fontWeight: 500,
        },
    },
});
