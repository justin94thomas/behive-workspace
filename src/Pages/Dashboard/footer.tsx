import React from 'react';
import { Grid, Typography } from '@mui/material';
import './styles.css';

const Footer = () => {

    return <Grid container size={12} className="behive-footer">
        <Typography className='footer-text'>© Copyright 2024. Bhive Private Limited</Typography>
    </Grid>
}

export default Footer;