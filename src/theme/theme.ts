// src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFBB00',
        },
        secondary: {
            main: '#000000',
        },
        text: {
            primary: '#000000',
            secondary: '#65624C',
        },
        grey: {
            100: '#E0E0E0',
            200: '#CECECC',
            300: '#ADADA8',
            400: '#8C8C87',
            500: '#6B6B66',
            600: '#4A4A45',
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
