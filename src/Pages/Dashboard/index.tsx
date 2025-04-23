import { Box, Container, Grid, Text, Title, Image, Group, GridCol } from '@mantine/core';
import {
    IconWifi,
    IconCoffee,
    IconBarbell,
    IconUsersGroup,
    IconArmchair,
    IconCurrencyRupee,
    IconCalendar,
    IconSoccerField
} from '@tabler/icons-react';
import { images } from '../../Content/assets';

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
            <Container size="lg" py="xl">
                <div style={{ display: 'flex', width: '100%' }}>
                    <div>
                        <Image src={TextBG} alt='Text Background' />
                        <Title order={1} mb="sm" fw={700} size="3xl">
                            Host your meeting with <br /> world-class amenities. <br /> Starting at ₹199/-!
                        </Title>
                    </div>
                    <div>
                        <Image src={Brand} width='338px' alt="Meeting illustration" />
                    </div>
                </div>

            </Container>
        </Box>
    );
};

export default Dashboard;
