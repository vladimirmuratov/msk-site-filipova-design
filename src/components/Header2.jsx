import {Box, Typography, Link} from '@mui/material'
import {address, email, phone} from '@/config'

export const Header2 = () => {
    return (
        <Box
            component="header"
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                backgroundColor: 'var(--white)',
                boxShadow: '0 4px 6px -6px #222',
                padding: '20px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            <Link href="/">
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
                    display: {xs: 'none', sm: 'flex'},
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '5px'
                }}
            >
                <Typography
                    sx={{
                        fontSize: {xs: '18px', sm: '24px', md: '26px', lg: '28px'},
                        fontWeight: 600,
                        color: 'var(--blue)',
                        textAlign: 'center',
                        lineHeight: 1.1
                    }}
                >Круглосуточно 24/7</Typography>

                <Typography
                    sx={{
                        fontSize: {xs: '10px', sm: '12px', md: '14px', lg: '16px'},
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
                    alignItems: 'flex-start',
                    gap: '5px'
                }}
            >
                <Link href={`tel:${phone}`}>
                    <Typography
                        sx={{
                            fontSize: {xs: '19px', sm: '24px', md: '24px', lg: '28px'},
                            fontWeight: 600,
                            color: 'var(--red)',
                            whiteSpace: 'nowrap',
                            lineHeight: 1.1
                        }}
                    >8(499)719-81-00</Typography>
                </Link>

                <Link href={`mailto:${email}`}>
                    <Typography
                        sx={{
                            fontSize: {xs: '12px', sm: '12px', md: '14px', lg: '16px'},
                            fontWeight: 600,
                            color: 'var(--red)',
                        }}
                    >{email}</Typography>
                </Link>
            </Box>
        </Box>
    )
}
