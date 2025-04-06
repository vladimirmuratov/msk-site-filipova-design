import { Box, Link, Typography } from '@mui/material';

export default function Custom404() {
    return (
        <Box
            sx={{
                height: '68vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box>
                <Typography
                    component="h1"
                    sx={{
                        color: 'var(--red)',
                        fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
                        fontWeight: 400,
                        marginBottom: { xs: '5px', sm: '10px' }
                    }}
                >
                    404 - Page Not Found
                </Typography>
                <Typography
                    sx={{
                        color: 'var(--blue)',
                        textAlign: 'center'
                    }}
                >Перейти на <Link href="/" sx={{
                    color: 'var(--red)!important',
                    '&:hover': {
                        textDecoration: 'underline!important'
                    }
                }}>Главную страницу</Link></Typography>
            </Box>
        </Box>
    );

}
