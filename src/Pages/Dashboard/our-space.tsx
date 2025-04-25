import { Box, Card, Grid, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import './styles.css';
import JSONData from './data.json';
import { useState } from 'react';
import { IconDirectionSign } from '@tabler/icons-react';

const OurSpace = () => {
    const theme = useTheme();
    const [data, setData] = useState(JSONData);

    return (
        <Box mt={10}>
            <Grid justifySelf={'left'} className="behive-choose-us">
                <Typography sx={(theme) => ({
                    fontWeight: theme.typography.h2.fontWeight,
                    fontSize: theme.typography.h2.fontSize,
                    width: '100%',
                })}>
                    Our Space Overview
                </Typography>
                <Grid container spacing={2}>
                    {data && data.map(item => {
                        const imagePath = item.images[0]
                        return (
                            <Grid container key={item.id} className="choose-us-grid">
                                <Card className="our-space-card">
                                    <>
                                        <Grid container className="space-box-head">
                                            <Typography variant="h6">{item.name}</Typography>
                                            <div className="distance-box">
                                                <IconDirectionSign size={20} />
                                                <Typography fontSize="8px" color="#26323880">{'6 Kms'}</Typography>
                                            </div>
                                        </Grid>
                                        <Grid mt={2}>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/${imagePath}`}
                                                alt={item.name}
                                                className="space-image"
                                            />
                                        </Grid>
                                    </>
                                    <Box className="space-info">
                                        <Box className="day-pass">
                                            <Typography variant="body2">
                                                Day Pass Price: ₹{item.day_pass_price}
                                            </Typography>
                                            {item.day_pass_discounts_percentage && item.day_pass_discounts_percentage[10] && (
                                                <Typography variant="body2" color="secondary">
                                                    {item.day_pass_discounts_percentage[10].message}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurSpace;
