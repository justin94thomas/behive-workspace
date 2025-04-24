import { Box, Card, Grid, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { images } from '../../Content/assets';
import './styles.css';
import JSONData from './data.json';
import { useState } from 'react';
import { IconDirectionSign } from '@tabler/icons-react';


const OurSpace = () => {
    const { } = images;
    const theme = useTheme();
    const [data, setData] = useState(JSONData)


    return (
        <Box mt={10}>
            <Grid justifySelf={'left'} className="behive-choose-us">
                <Typography sx={(theme) => ({
                    fontWeight: theme.typography.h2.fontWeight,
                    fontSize: theme.typography.h2.fontSize,
                    width: '100%'
                })}>Our Space Overview</Typography>
                <Grid container size={6}>
                    {data && data.map(item => {
                        return <Grid size={4} key={item.id} className="choose-us-grid">
                            <Card className='our-space-card'>
                                <Box className="space-box-head">
                                    <Typography>{item.name}</Typography>
                                    <div className='distance-box'>
                                        <IconDirectionSign size={20} />
                                        <Typography fontSize={'8px'} color='#26323880'>6 Kms</Typography>
                                    </div>
                                </Box>
                            </Card>
                        </Grid>
                    })}

                </Grid>
            </Grid>
        </Box >


    );
};

export default OurSpace;
