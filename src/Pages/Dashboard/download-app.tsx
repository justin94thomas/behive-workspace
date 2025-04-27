import { Box, Grid, useTheme, Button, useMediaQuery, Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import './styles.css';
import { images } from '../../Content/assets';

const DownloadApp = () => {
    const theme = useTheme();
    const { BehiveMobApp, PlayStoreIcon, AppStoreIcon } = images;
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box mt={10}>
            {isMobile ?
                <Card className="download-app-card">
                    <Grid className="behive-our-space-mob">
                        <Typography sx={(theme) => ({
                            fontWeight: theme.typography.h2.fontWeight,
                            fontSize: theme.typography.h3.fontSize,
                            width: '100%',
                        })}>
                            Download our app now
                        </Typography>
                        <Card>
                            <img src={BehiveMobApp} alt='behive-mobile' className={'behive-mobile-view'} />
                        </Card>
                        <Box display="flex" gap={2} justifyContent={'center'} mt={5} mb={5}>
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
                </Card>
                :
                <Grid className={"behive-our-space"}>
                    <Typography sx={(theme) => ({
                        fontWeight: theme.typography.h2.fontWeight,
                        fontSize: theme.typography.h2.fontSize,
                        width: '100%',
                    })}>
                        Download our app now
                    </Typography>
                    <div className='download-content'>
                        <img src={BehiveMobApp} alt='behive-mobile' className={'behive-mobile'} />
                        <Grid container size={12} justifyContent="flex-end" className='download-box'>
                            <Grid size={5}>
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
                    </div>
                </Grid>}
        </Box>
    );
};

export default DownloadApp;
