import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        logo: {
            primary: string;
            primary2: string;
        };
    }

    interface PaletteOptions {
        logo?: {
            primary: string;
            primary2: string;
        };
        custom?: {
            primary2: string
        }
    }
}
