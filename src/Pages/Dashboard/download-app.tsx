import { Box, Card, Grid, useTheme, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import './styles.css';
import { images } from '../../Content/assets';

const DownloadApp = () => {
    const theme = useTheme();
    const { BehiveMobApp, PlayStoreIcon, AppStoreIcon } = images;

    return (
        <Box mt={10}>
            <Grid className="behive-our-space">
                <Typography sx={(theme) => ({
                    fontWeight: theme.typography.h2.fontWeight,
                    fontSize: theme.typography.h2.fontSize,
                    width: '100%',
                })}>
                    Download our app now
                </Typography>
                <img src={BehiveMobApp} alt='behive-mobile' />
                <Grid container size={12} justifyContent="flex-end" className='download-box'>
                    <Grid size={6}>
                        <Typography
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: '1.1rem',
                                mb: 3,
                            }}
                        >
                            Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                        </Typography>
                        <Box display="flex" gap={2}>
                            <Button
                                component="a"
                                href="#"
                                sx={{ p: 0, minWidth: 'unset' }}
                            >
                                <img src={PlayStoreIcon} alt="Get it on Google Play" style={{ height: 50 }} />
                            </Button>
                            <Button
                                component="a"
                                href="#"
                                sx={{ p: 0, minWidth: 'unset' }}
                            >
                                <img src={AppStoreIcon} alt="Download on the App Store" style={{ height: 50 }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DownloadApp;
