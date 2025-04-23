import React from 'react';
import { Box, Flex, Image, ActionIcon } from '@mantine/core';
import { IconPhoneCall } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

import { images } from '../../Content/assets';

const Header = () => {
    const { Logo } = images;
    const isMobile = useMediaQuery('(max-width: 768px)');

    return <>
        <Box py="lg" px="120px" bg="#fff"
            style={{
                borderBottom: '1px solid #E0E0E0',
                paddingLeft: isMobile ? '32px' : '120px',
                paddingRight: isMobile ? '32px' : '120px',
            }}>
            <Flex justify="space-between" align="center" display='flex'>
                <Image src={Logo} alt="BHIVE Logo" height={40} />
                <ActionIcon color="primary2" radius="xl" variant="outline" size="lg">
                    <IconPhoneCall size={18} />
                </ActionIcon>
            </Flex>
        </Box>
    </>
}

export default Header;