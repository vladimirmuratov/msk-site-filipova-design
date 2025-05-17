import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { memo } from 'react';

export const Banner4 = memo(() => {
    return (
        <Box
            component="figure"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                position: 'relative'
            }}>
            {/*<Box
                component="img"
                src="/images/banner-3.webp"
                alt="banner"
                sx={{
                    width: '100%',
                    height: 'auto',
                    filter: 'brightness(90%)',
                }}
            />*/}
            <Image
                src="/images/banner-3.webp"
                width={500}
                height={500}
                alt="Платная госпитализация"
                style={{ width: '100%', height: 'auto', filter: 'brightness(90%)' }}
                priority={true}
            />
            <Box sx={{
                position: 'absolute',
                top: { xs: '16%', sm: '25%', md: '25%', lg: '25%' },
                left: { xs: '5%', sm: '5%', md: '5%', lg: '5%' },
            }}>
                <Typography
                    component="h1"
                    sx={{
                        wordSpacing: '100vw',
                        color: 'var(--red)',
                        fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
                        lineHeight: { xs: '32px', sm: '40px', md: '48px', lg: '56px' }
                    }}>
                    Медицинская
                    Сервисная
                    Компания
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        color: 'var(--blue)',
                        fontSize: { xs: '16px', sm: '24px', md: '28px', lg: '36px' },
                        lineHeight: { xs: '24px', sm: '32px', md: '36px', lg: '44px' }
                    }}>
                    Медицина с заботой,<br />
                    сервис с доверием!
                </Typography>
            </Box>
        </Box>
    );
});
