import { Box, Typography } from '@mui/material';
import { memo } from 'react';

export const BaseFeedBackCard = memo(({ name, date, text }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', gap: '10px', marginBottom: { xs: '5px', sm: '10px' } }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        color: 'var(--blue)',
                        fontWeight: 500
                    }}>{name}</Typography>
                <Typography
                    sx={{ color: 'var(--gray)', fontSize: { xs: 12, sm: 14 }, alignSelf: 'end' }}>{date}</Typography>
            </Box>
            <Typography sx={{ fontSize: { xs: 12, sm: 16 } }}>{text}</Typography>
        </Box>
    );
});
