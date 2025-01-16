import { Box, Typography } from '@mui/material';

export const BaseServicePageCard = ({ icon, title, text }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: { xs: '5px', sm: '10px' }
            }}
        >
            <img className="service-icon" src={icon} alt="icon" />
            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        color: 'var(--blue)',
                        lineHeight: 1.2,
                    }}
                >{title}</Typography>
                <Typography
                    sx={{
                        fontSize: { xs: 14, sm: 16 },
                        fontWeight: 300,
                        whiteSpace: 'pre-wrap'
                    }}
                >{text}</Typography>
            </Box>
        </Box>
    );
};
