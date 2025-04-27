import React from 'react';
import { Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import './styles.css';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return <Grid container size={12} className="behive-footer">
        <Typography className={isMobile ? "behive-text-mob" : 'footer-text'}>© Copyright 2024. Bhive Private Limited</Typography>
    </Grid>
}

export default Footer;