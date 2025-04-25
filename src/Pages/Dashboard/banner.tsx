import { Box, Grid, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { images } from '../../Content/assets';
import './styles.css';


const Banner = () => {
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
        </Box >


    );
};

export default Banner;
