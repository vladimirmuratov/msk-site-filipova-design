import { Box, Typography } from '@mui/material';
import { memo } from 'react';

export const BaseBanner = memo(({
                                    imgPath,
                                    title,
                                    fontColor = 'var(--white)',
                                    fontShadowColor = 'var(--gray)',
                                    bgPosition = 'center',
                                    style = {}
                                }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                paddingY: { xs: '25px', sm: '50px' },
            }}
        >

            <Box
                // component="img"
                // src={imgPath}
                // alt="pic"
                sx={{
                    width: '100%',
                    // height: '451px',
                    height: { xs: '129px', sm: '241px', md: '322px', lg: '459px' },
                    backgroundImage: `url(${imgPath})`,
                    backgroundSize: 'cover',
                    backgroundPosition: bgPosition,
                    filter: 'brightness(70%)',
                    ...style
                }}
            />
            <Typography
                component="h1"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: fontColor,
                    fontSize: { xs: 26, sm: 48, md: 58, lg: 68 },
                    fontWeight: { xs: 400, sm: 500 },
                    textShadow: `2px 2px 2px ${fontShadowColor}`,
                    textAlign: 'center',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    textWrap: 'balance',
                    width: '100%'
                }}
            >{title}</Typography>

        </Box>
    );
});
