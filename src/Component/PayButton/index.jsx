import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import './styles.css';
const PayButton = ({ classVal, price, discount }) => {
    const theme = useTheme();

    return (<>
        <Grid container className="paybtn-main" style={classVal === 'grey' ? { backgroundColor: '#F9F9F9' } : { backgroundColor: '#FFCF4B' }}>
            {classVal !== 'grey' && discount && discount[10] && (
                <div className='discount-tab'>
                    <Typography className='discount-txt'>{discount[10].value}% discount</Typography>
                </div>
            )}
            <div>
                <Typography className={classVal === 'grey' ? 'grey-button' : 'yellow-button'}>{classVal === 'grey' ? 'Day Pass' : 'Bulk Pass'}</Typography>
                <Typography className={'pay-amt'}>₹ {price}<span className='pay-sub'>/{classVal !== 'grey' && 10} Day</span></Typography>
            </div>
            <div>
                <span>{`>>>`}</span>
            </div>
        </Grid>
    </>)
}

export default PayButton