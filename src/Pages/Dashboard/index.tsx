import { Box, Grid } from '@mui/material';
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

    return (
        <Box>
            <Grid container className='behive-banner'>
                <Grid size={6}>
                    <Box
                        style={{
                            backgroundImage: `url(${TextBG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '2rem',
                            height: '100%',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: '2rem',
                                marginBottom: (theme) => theme.spacing(2),
                            }}
                        >
                            Host your meeting with <br />
                            world-class amenities. <br />
                            Starting at ₹199/-!
                        </Typography>

                    </Box>
                </Grid>
                <Grid size={6} style={{ textAlign: 'center' }}>
                    <img src={Brand} width={338} alt="Meeting illustration" />
                </Grid>
            </Grid>
        </Box >


    );
};

export default Dashboard;
