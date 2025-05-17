import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { memo } from 'react';

export const BaseServiceCard = memo(({ alt, label, text, icon, path = '#', sitePage }) => {
    return (
        <Link
            href={path}
            target={sitePage ? '_self' : '_blank'}
        >
            <Box
                sx={{
                    padding: '10px',
                    border: '1px solid var(--black)',
                    borderRadius: '10px',
                    // height: '100%'
                    height: '222px',
                    transition: '0.3s',
                    '&:hover': {
                        background: 'var(--light-blue)',
                        transform: 'translateY(-5px)'

                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: '5px', sm: '10px', md: '15px' },
                        marginBottom: { xs: '10px', sm: '15px' }
                    }}
                >
                    <Box
                        component="img"
                        src={icon}
                        alt={alt}
                        sx={{
                            height: '50px'
                        }}
                    ></Box>
                    <Typography
                        component="h3"
                        sx={{
                            color: 'var(--blue)',
                            fontWeight: 500
                        }}
                    >{label}</Typography>
                </Box>
                <Typography
                    sx={{
                        fontSize: { xs: 12, sm: 12 }
                    }}
                >
                    {text}
                </Typography>
            </Box>
        </Link>
    );
});
