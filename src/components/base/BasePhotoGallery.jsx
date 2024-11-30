import React from 'react';
import { Box } from '@mui/material';

export const BasePhotoGallery = React.memo(({ imagesList = [] }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                paddingY: { xs: '25px', sm: '50px' },
            }}
        >
            {imagesList.map(({ id, src, alt, title }) => (
                <Box
                    component="img"
                    key={id}
                    src={src}
                    alt={alt}
                    title={title}
                    sx={{
                        width: { xs: '100%', md: '240px' },
                        height: { xs: 'auto', md: '160px' },
                    }}
                />
            ))}
        </Box>
    );
});
