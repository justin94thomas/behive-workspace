// src/theme.ts
import { MantineThemeOverride } from '@mantine/core';

const repeatColor = (hex: string) =>
    [
        hex, hex, hex, hex, hex,
        hex, hex, hex, hex, hex
    ] as const;

export const theme: MantineThemeOverride = {
    colors: {
        primary: repeatColor('#000'),
        primary2: repeatColor('#FFBB00'),

        brandPrimary: repeatColor('#FFCF4B'), // Light Yellow
        brandPrimaryStroke: repeatColor('#27AE60'), // Dark Yellow

        brandSecondary: repeatColor('#F9F9F9'), // Light Grey
        brandSecondaryStroke: repeatColor('#CECECC'), // Dark Grey

        textMain: repeatColor('#263238'),
        textSecondary: repeatColor('#65624C'),

        greys: [
            '#333333', '#4F4F4F', '#828282',
            '#B7B6B8', '#E0E0E0', '#E0E0E0',
            '#E0E0E0', '#E0E0E0', '#E0E0E0', '#E0E0E0',
        ] as const,
    },

    spacing: {
        xs: '4px',
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        '2xl': "48px",
        '3xl': "58px",
    },

    primaryColor: 'brandPrimary',

    fontFamily: 'Inter, sans-serif',

    fontSizes: {
        xs: '0.75rem',   // 12px
        sm: '0.875rem',  // 14px
        md: '1rem',      // 16px
        lg: '1.125rem',  // 18px
        xl: '1.25rem',   // 20px
    },

    headings: {
        fontFamily: 'Inter, sans-serif',
        sizes: {
            h1: { fontSize: '3.625rem', fontWeight: '700' }, // 58px
            h2: { fontSize: '2.25rem', fontWeight: '600' },   // 36px
            h3: { fontSize: '1.5rem', fontWeight: '600' },    // 24px
            h4: { fontSize: '1.25rem', fontWeight: '500' },   // 20px
            h5: { fontSize: '1.125rem', fontWeight: '500' },  // 18px
            h6: { fontSize: '1rem', fontWeight: '500' },      // 16px
        },
    },
};
