import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { phone } from '@/config/default-values';

const Banner3 = () => {
    return (
        <Box
            component="figure"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                position: 'relative'
            }}>
            <Image
                src="/images/banner.webp"
                alt="платная госпитализация"
                width="0"
                height="0"
                sizes="100vw"
                className="banner"
            />
            <Typography
                component="h1"
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '2%',
                    color: 'var(--red)',
                    fontSize: { xs: 32, sm: 42, md: 58, lg: 68 },
                    fontWeight: 700,
                    textShadow: '2px 2px 3px pink'
                }}
            >{phone}</Typography>
        </Box>
    );
};

export default React.memo(Banner3);
