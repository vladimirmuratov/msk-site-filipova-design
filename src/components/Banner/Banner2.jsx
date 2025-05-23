import { Box } from '@mui/material';
import { memo } from 'react';

export const Banner2 = memo(() => {
    return (
        <Box
            component="figure"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                position: 'relative'
            }}>
            <Box
                component="img"
                src="/images/banner-2.webp"
                alt="banner"
                sx={{
                    width: '100%',
                    height: 'auto'
                }}
            />
        </Box>
    );
});
