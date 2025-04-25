import { Box, Grid, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import {
    IconWifi,
    IconCoffee,
    IconBarbell,
    IconUsersGroup,
    IconArmchair,
    IconCurrencyRupee,
    IconCalendar,
    IconSoccerField,
} from '@tabler/icons-react';
import { images } from '../../Content/assets';
import './styles.css';
import ChooseUs from './choose-us';
import OurSpace from './our-space';

const features = [
    { icon: IconUsersGroup, label: 'Community Events' },
    { icon: IconBarbell, label: 'Gym Facilities' },
    { icon: IconWifi, label: 'High-Speed WiFi' },
    { icon: IconCoffee, label: 'Cafe & Tea Bar' },
    { icon: IconCurrencyRupee, label: 'Affordable' },
    { icon: IconArmchair, label: 'Comfort Lounges' },
    { icon: IconCalendar, label: 'Quick Booking' },
    { icon: IconSoccerField, label: 'Sports Area' },
];

const Dashboard = () => {
    const { Brand, TextBG } = images;
    const theme = useTheme();

    return (
        <Box>
            <Grid container className='behive-banner'>
                <Grid size={8}>
                    <Box
                        sx={{
                            position: 'relative',
                            padding: '2rem',
                            height: '400px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Background image layer */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${TextBG})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                opacity: 0.5,
                                zIndex: 0,
                            }}
                        />
                        {/* Foreground text content */}
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography
                                sx={{
                                    fontWeight: theme.typography.h1.fontWeight,
                                    fontSize: theme.typography.h1.fontSize,
                                    marginBottom: theme.spacing(2),
                                    textAlign: 'left',
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Host your meeting with <br />
                                world-class amenities. <br />
                                Starting at <span style={{ color: '#FFD700' }}>₹199/-!</span>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={4} style={{ textAlign: 'center' }}>
                    <img src={Brand} width={338} alt="Meeting illustration" />
                </Grid>
            </Grid>
            <ChooseUs />
            <OurSpace />
        </Box >


    );
};

export default Dashboard;
