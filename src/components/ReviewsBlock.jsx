import React from 'react';
import { Carousel } from '@/components/Carousel';
import { Box, Typography } from '@mui/material';

export const ReviewsBlock = React.memo(({ reviews = [], isMobile }) => {
    return (
        <Box
            id="reviews"
            component="section"
            sx={{
                scrollMarginTop: '150px',
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: 32, sm: 38 },
                    fontWeight: 300,
                    color: 'var(--red)',
                    textTransform: 'uppercase',
                    marginBottom: { xs: '15px', sm: '30px' },
                }}
            >
                ОТЗЫВЫ
            </Typography>
            <Carousel reviews={reviews} isMobile={isMobile} />
        </Box>
    );
});
