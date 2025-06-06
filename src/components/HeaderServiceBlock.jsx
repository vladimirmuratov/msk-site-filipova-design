import React from 'react';
import { Box, Link } from '@mui/material';
import { useRouter } from 'next/router';
import { headerServiceLinks } from '@/config/links';

const HeaderServiceBlock = () => {
    const { pathname } = useRouter();

    return (
        <Box
            sx={{
                backgroundColor: 'var(--blue)',
                display: { xs: 'none', sm: 'grid' },
                gridTemplateColumns: { sm: 'repeat(4, 1fr)' },
                gap: '10px',
                padding: '10px'
            }}
        >

            {headerServiceLinks.map(({ id, label, path, sitePage }) => (
                <Link
                    key={id}
                    href={path}
                    target={sitePage ? '_self' : '_blank'}
                    sx={{
                        color: 'var(--light-gray) !important',
                        fontSize: { xs: '12px', md: '14px' },
                        textDecoration: path === pathname ? 'underline !important' : 'none',
                        whiteSpace: { sm: 'wrap', lg: 'nowrap' },

                        '&:hover': {
                            textDecoration: 'underline !important'
                        }
                    }}
                >{label}</Link>
            ))}

        </Box>
    );
};

export default React.memo(HeaderServiceBlock);
