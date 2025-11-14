import { Typography } from '@mui/material';
import React, { memo } from 'react';

export const BaseH2 = memo(({ title = '', color = 'var(--red)', marginBottom = false, textAlign = 'left' }) => {

    return (
        <Typography
            variant="h2"
            sx={{
                fontSize: { xs: 30, sm: 38 },
                fontWeight: 300,
                lineHeight: 1.5,
                color: color,
                textTransform: 'uppercase',
                marginBottom: marginBottom ? { xs: '15px', sm: '30px' } : 0,
                wordWrap: 'break-word',
                textAlign
            }}
        >
            {title}
        </Typography>
    );
});
