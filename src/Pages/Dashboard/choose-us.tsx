import { Box, Card, Grid, useTheme } from '@mui/material';
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

const ChooseUs = () => {
    const { Brand, TextBG } = images;
    const theme = useTheme();

    return (
        <Box mt={10}>
            <Grid justifySelf={'center'} className="behive-choose-us">
                <Typography sx={(theme) => ({
                    fontWeight: theme.typography.h2.fontWeight,
                    fontSize: theme.typography.h2.fontSize,
                    width: '100%'
                })}>Why Choose us?</Typography>
                <Grid container size={6}>
                    {features && features.map((item, idx) => {
                        return <Grid size={3} key={idx} className="choose-us-grid">
                            <Box className="choose-us-content">
                                <item.icon size={40} color={theme.palette.primary.main} />
                                <Typography>{item.label}</Typography>
                            </Box>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Box >


    );
};

export default ChooseUs;
