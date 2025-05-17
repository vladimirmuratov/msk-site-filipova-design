import { Typography } from '@mui/material';
import React, { memo } from 'react';

export const BaseSubTitle = memo(({ title = '', color = 'var(--red)', marginBottom = false }) => {
    return (
        <Typography
            variant="h2"
            sx={{
                fontSize: { xs: 30, sm: 38 },
                fontWeight: 300,
                color: color,
                textTransform: 'uppercase',
                marginBottom: marginBottom ? { xs: '15px', sm: '30px' } : '',
                wordWrap: 'break-word',
            }}
        >
            {title}
        </Typography>
    );
});
