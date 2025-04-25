import { Box } from '@mui/material';
import ChooseUs from './choose-us';
import OurSpace from './our-space';
import DownloadApp from './download-app';
import Footer from './footer';
import Banner from './banner';

const Dashboard = () => {

    return (
        <Box>
            <Banner />
            <ChooseUs />
            <OurSpace />
            <DownloadApp />
            <Footer />
        </Box >


    );
};

export default Dashboard;
