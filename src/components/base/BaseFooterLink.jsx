import { Box } from '@mui/material';
import Link from 'next/link';
import { memo } from 'react';

export const BaseFooterLink = memo(({ label, path, target = '_blank' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                marginBottom: '5px'
            }}
        >
            <img className="icon" src="/images/icons-blue/triangle.svg" alt="icon" />
            <Link
                target={target}
                href={path}
                style={{
                    textDecoration: 'none',
                    color: 'var(--black)',
                    fontSize: 14,
                    fontWeight: 300
                }}
                /*sx={{
                    textDecoration: 'none',
                    color: 'var(--black)',
                    fontSize: 14,
                    fontWeight: 300
                }}*/
            >{label}</Link>
        </Box>
    );
});
