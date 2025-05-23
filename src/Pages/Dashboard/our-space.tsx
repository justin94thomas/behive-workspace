import { Box, Card, Grid, useTheme, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import './styles.css';
import { IconDirectionSign } from '@tabler/icons-react';
import PayButton from '../../Component/PayButton';
import { useBeehiveStore } from '../../store/behiveStore';

const OurSpace = () => {
    const theme = useTheme();
    const data = useBeehiveStore((state) => state.data);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box mt={10}>
            <Grid className={isMobile ? "behive-our-space-mob" : "behive-our-space"}>
                <Typography sx={(theme) => ({
                    fontWeight: theme.typography.h2.fontWeight,
                    fontSize: isMobile ? theme.typography.h3.fontSize : theme.typography.h2.fontSize,
                    width: '100%',
                })}>
                    Our Space Overview
                </Typography>
                <Grid container spacing={isMobile ? 12 : 8} mt={6}>
                    {data && data.map(item => {
                        const imagePath = item.images[0]
                        return (
                            <Grid container key={item.id} className="choose-us-grid">
                                <Card className="our-space-card">
                                    <>
                                        <Grid container className="space-box-head">
                                            <Typography variant={isMobile ? "h5" : "h4"} className='location-name'>{item.name}</Typography>
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
                                    <Box className="day-pass">
                                        <PayButton classVal={'grey'} price={item.day_pass_price} discount={item.day_pass_discounts_percentage} />
                                        <PayButton classVal={'yellow'} price={2400} discount={item.day_pass_discounts_percentage} />
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
