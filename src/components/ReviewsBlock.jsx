import React from 'react';
import { Carousel } from '@/components/Carousel';
import { Box } from '@mui/material';
import { BaseH2 } from '@/components/base/BaseH2';

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

            <BaseH2 title="ОТЗЫВЫ" marginBottom={true} />

            <Carousel reviews={reviews} isMobile={isMobile} />
        </Box>
    );
});
