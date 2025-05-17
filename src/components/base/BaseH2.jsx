import { Typography } from '@mui/material';
import React, { memo } from 'react';

export const BaseH2 = memo((props) => {
    const { title = '', color = 'var(--red)', marginBottom = false, textAlign = 'left' } = props;

    return (
        <Typography
            variant="h2"
            sx={{
                fontSize: { xs: 30, sm: 38 },
                fontWeight: 300,
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
