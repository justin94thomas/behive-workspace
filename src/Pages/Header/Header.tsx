import React from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { IconPhoneCall } from '@tabler/icons-react';
import { images } from '../../Content/assets';

const Header = () => {
    const { Logo } = images;
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <Box
            sx={{
                py: theme.spacing(3), // equivalent to "lg"
                px: isMobile ? theme.spacing(4) : '120px',
                backgroundColor: '#fff',
                borderBottom: '1px solid #E0E0E0',
            }}
        >
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <img src={Logo} alt="BHIVE Logo" height={40} />
                <IconButton
                    color="primary"
                    sx={{
                        border: '1px solid',
                        borderColor: 'primary.main',
                        borderRadius: '50%',
                    }}
                >
                    <IconPhoneCall size={18} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Header;
