import { useState } from 'react';
import { Box, Grid, Card, useTheme, useMediaQuery } from '@mui/material';
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
import './styles.css';

interface Feature {
    id: number;
    icon: React.ElementType;
    label: string;
    show: boolean;
    desc: string;
}

const ChooseUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [features, setFeature] = useState<Feature[]>([
        { id: 1, icon: IconUsersGroup, label: 'Community Events', show: false, desc: 'One liner detail about the feature' },
        { id: 2, icon: IconBarbell, label: 'Gym Facilities', show: false, desc: 'One liner detail about the feature' },
        { id: 3, icon: IconWifi, label: 'High-Speed WiFi', show: false, desc: 'One liner detail about the feature' },
        { id: 4, icon: IconCoffee, label: 'Cafe & Tea Bar', show: false, desc: 'One liner detail about the feature' },
        { id: 5, icon: IconCurrencyRupee, label: 'Affordable', show: false, desc: 'One liner detail about the feature' },
        { id: 6, icon: IconArmchair, label: 'Comfort Lounges', show: false, desc: 'One liner detail about the feature' },
        { id: 7, icon: IconCalendar, label: 'Quick Booking', show: false, desc: 'One liner detail about the feature' },
        { id: 8, icon: IconSoccerField, label: 'Sports Area', show: false, desc: 'One liner detail about the feature' },
    ]);


    const handleShowTile = (val: Feature) => {
        const updatedFeatures = features.map(item => {
            if (val.id === item.id) {
                return { ...item, show: true };
            } else {
                return { ...item, show: false };
            }
        });
        setFeature(updatedFeatures);
    };

    const handleHideTile = () => {
        const updatedFeatures = features.map(item => ({
            ...item,
            show: false
        }));
        setFeature(updatedFeatures);
    };

    return (
        <Box mt={10}>
            <Grid justifySelf={'center'} className={isMobile ? "behive-choose-us-mob" : "behive-choose-us"}>
                <Typography sx={(theme) => ({
                    fontWeight: theme.typography.h2.fontWeight,
                    fontSize: isMobile ? theme.typography.h3.fontSize : theme.typography.h2.fontSize,
                    width: '100%'
                })}>Why Choose us?</Typography>
                <Grid container size={6} mt={6}>
                    {features && features.map((item, idx) => {
                        return <Grid sx={{
                            borderTop: !isMobile && idx !== 0 && idx !== 1 && idx !== 2 && idx !== 3 ? '1px solid #e5e5e7' : 'none',
                            borderLeft: !isMobile && idx !== 0 && idx !== 4 ? '1px solid #e5e5e7' : 'none',
                            borderRight: !isMobile && idx !== 3 && idx !== 7 ? '1px solid #e5e5e7' : 'none',
                            borderBottom: !isMobile && idx !== 4 && idx !== 5 && idx !== 6 && idx !== 7 ? '1px solid #e5e5e7' : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            p: isMobile ? 2 : 4,
                        }}
                            size={isMobile ? 6 : 3}
                            key={idx}
                            className="choose-us-grid"
                            onMouseOver={() => handleShowTile(item)}
                            onMouseOut={() => handleHideTile()}
                        >
                            {isMobile ? <Card className="our-space-card-mob">
                                <Box className="choose-us-content-mob">
                                    <item.icon size={40} color={theme.palette.primary.main} />
                                    <div>
                                        <Typography style={{ fontSize: "14px" }} >{item.label}</Typography>
                                    </div>
                                </Box>
                            </Card> : <Box className="choose-us-content">
                                <item.icon size={40} color={theme.palette.primary.main} />
                                <div>
                                    <Typography style={{ fontSize: theme.typography.h5.fontSize }} >{item.label}</Typography>
                                    {item.show && <Typography className='sub-text'>{item.desc}</Typography>}
                                </div>
                            </Box>}

                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Box >


    );
};

export default ChooseUs;
