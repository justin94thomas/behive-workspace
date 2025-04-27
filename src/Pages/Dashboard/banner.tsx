import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import Typography from '@mui/material/Typography';
import { images } from '../../Content/assets';
import './styles.css';


const Banner = () => {
    const { Brand, TextBG } = images;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Grid container className='behive-banner'>
                <Grid size={!isMobile ? 8 : 12}>
                    {isMobile && <Grid size={12} style={{ textAlign: 'center' }}>
                        <img src={Brand} width={'100%'} alt="Meeting illustration" />
                    </Grid>}
                    <Box
                        sx={{
                            position: 'relative',
                            padding: isMobile ? '1rem' : '2rem',
                            height: isMobile ? 'auto' : '400px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Background image layer */}
                        {!isMobile && <Box
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
                        />}
                        {/* Foreground text content */}
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography
                                sx={{
                                    fontWeight: theme.typography.h1.fontWeight,
                                    fontSize: !isMobile ? theme.typography.h1.fontSize : theme.typography.h4.fontSize,
                                    marginBottom: theme.spacing(2),
                                    textAlign: isMobile ? 'center' : 'left',
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Host your meeting with {!isMobile && <br />}
                                world-class amenities. {!isMobile && <br />}
                                Starting at <span style={{ color: '#FFD700' }}>₹199/-!</span>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {!isMobile && <Grid size={4} style={{ textAlign: 'center' }}>
                    <img src={Brand} width='100%' alt="Meeting illustration" />
                </Grid>}

            </Grid>
        </Box >


    );
};

export default Banner;
