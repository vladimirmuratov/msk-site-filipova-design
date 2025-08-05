import React from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

export const BaseLink = React.memo(({ isLink, label, href = '' }) => (
    <Link
        href={href}
    >
        <Typography
            sx={{
                display: 'block',
                color: 'var(--blue)',
                fontSize: { xs: 20, sm: 22 },
                fontWeight: 400,
                marginBottom: '20px',
                textDecoration: isLink ? 'underline !important' : 'none',
                textDecorationColor: 'var(--blue)',
            }}
        >
            {label}
        </Typography>
    </Link>
));
