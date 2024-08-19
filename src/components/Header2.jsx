import {Box, Typography} from '@mui/material'
import Link from 'next/link'

export const Header2 = () => {
    return (
        <Box
            component="header"
            sx={{
                boxShadow: '0 4px 6px -6px #222',
                padding: '20px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            <Link href='/'>
                <Box>
                    <Box
                        component="img"
                        src="/images/logo-msk.png"
                        alt="logo"
                        sx={{
                            width: '100px'
                        }}
                    />
                </Box>

                <Box>
                    <Box
                        component="img"
                        src="/images/logo-obp.png"
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
                alignItems: 'center'
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
                >г.Москва, Мичуринский пр-т д.6</Typography>
            </Box>

            <Box>
                <Typography
                    sx={{
                        fontSize: {xs: '17px', sm: '24px', md: '24px', lg: '28px'},
                        fontWeight: 600,
                        color: 'var(--red)',
                        whiteSpace: 'nowrap'
                    }}
                >8(499)719-81-00</Typography>
            </Box>
        </Box>
    )
}
