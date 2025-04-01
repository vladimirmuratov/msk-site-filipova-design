import { Typography } from '@mui/material';

export const BaseText = ({ children }) => {
    return (
        <Typography
            sx={{
                color: 'var(--blue)',
                fontSize: { xs: 18, sm: 20 },
                fontWeight: 400,
                display: 'inline'
            }}
        >
            {children}
        </Typography>
    );
};
