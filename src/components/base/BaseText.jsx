import { Typography } from '@mui/material';

export const BaseText = ({ children }) => {
    return (
        <Typography
            sx={{
                color: 'var(--blue)',
                fontSize: { xs: 14, sm: 16, md: 18 },
                fontWeight: 400,
                display: 'inline'
            }}
        >
            {children}
        </Typography>
    );
};
