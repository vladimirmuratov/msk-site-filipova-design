import { Box, Typography } from '@mui/material';
import { memo } from 'react';

export const BasePartnerCard = memo(({ alt, logo, label, address, license, imgStyle = {} }) => {

    return (
        <Box sx={{
            border: '1px solid var(--blue)',
            borderRadius: '5px',
            padding: '10px',
            minHeight: '223px'
        }}>
            <Box sx={{ height: imgStyle.height < 56 ? 66 : imgStyle.height }}>
                <img src={logo} alt={alt} style={imgStyle} />
            </Box>
            <Typography component="h3" sx={{
                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                fontWeight: 500,
                lineHeight: 1.3,
                marginBottom: '5px',
                marginTop: '5px'
            }}>{label}</Typography>
            <Typography sx={{
                fontSize: { xs: '10px', sm: '11px', md: '12px' },
                lineHeight: 1.3,
                color: 'var(--gray)'
            }}>{address}</Typography>
            <Typography sx={{
                fontSize: { xs: '10px', sm: '11px', md: '12px' },
                lineHeight: 1.3,
                color: 'var(--gray)'
            }}>{license}</Typography>
        </Box>
    );
});
