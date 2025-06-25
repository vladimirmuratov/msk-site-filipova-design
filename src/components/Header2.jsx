import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import SocialBlock from '@/components/SocialBlock';
import HeaderServiceBlock from '@/components/HeaderServiceBlock';
import { address, email, phone } from '@/config/default-values';
import { useRouter } from 'next/navigation';

export const Header2 = () => {
    const router = useRouter();

    return (
        <Box
            component="header"
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 2,
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'var(--white)',
                    boxShadow: '0 4px 6px -6px #222',
                    padding: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px'
                }}
            >
                <Link
                    // href="/"
                    component="button"
                    onClick={() => router.push('/')}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center'
                    }}
                >
                    <Box>
                        <Box
                            component="img"
                            src="/images/logo-msk.webp"
                            alt="logo"
                            sx={{
                                width: '100px'
                            }}
                        />
                    </Box>

                    <Box>
                        <Box
                            component="img"
                            src="/images/logo-obp.webp"
                            alt="logo"
                            sx={{
                                width: '100px'
                            }}
                        />
                    </Box>
                </Link>

                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '18px', sm: '24px', md: '26px', lg: '28px' },
                            fontWeight: 600,
                            color: 'var(--blue)',
                            textAlign: 'center',
                            lineHeight: 1.1
                        }}
                    >Круглосуточно 24/7</Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '10px', sm: '12px', md: '14px', lg: '16px' },
                            fontWeight: 600,
                            color: 'var(--blue)',
                        }}
                    >{address}</Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '5px'
                    }}
                >
                    <Link href={`tel:${phone}`}
                          sx={{
                              '&:hover': {
                                  textDecoration: 'underline !important',
                                  color: 'var(--red)'
                              }
                          }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '19px', sm: '24px', md: '24px', lg: '28px' },
                                fontWeight: 600,
                                color: 'var(--red)',
                                whiteSpace: 'nowrap',
                                lineHeight: 1.1
                            }}
                        >8 (499) 719-81-00</Typography>
                    </Link>

                    <Link href={`mailto:${email}`}
                          sx={{
                              '&:hover': {
                                  textDecoration: 'underline !important',
                                  color: 'var(--red)'
                              }
                          }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '16px' },
                                fontWeight: 600,
                                color: 'var(--red)',
                            }}
                        >{email}</Typography>
                    </Link>

                    <SocialBlock />

                </Box>
            </Box>

            <HeaderServiceBlock />

        </Box>
    );
};

export default React.memo(Header2);
