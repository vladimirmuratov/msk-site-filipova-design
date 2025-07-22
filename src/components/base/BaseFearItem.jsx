import React from 'react';
import { Box, Typography } from '@mui/material';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export const BaseFearItem = React.memo(({ question, answer }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <QuestionMarkOutlinedIcon fontSize="large" sx={{ color: 'var(--red)' }} />
            <Typography
                variant="h3"
                sx={{
                    color: 'var(--blue)',
                    fontSize: { xs: 20, sm: 24 },
                    fontWeight: 500,
                    // textWrap: 'balance',
                }}
            >
                {question}
            </Typography>
        </Box>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
            }}
        >
            <CheckOutlinedIcon fontSize="large" sx={{ color: 'green' }} />
            <Typography
                sx={{ fontSize: { xs: 20, sm: 24 }, fontWeight: 500, color: 'var(--blue)' }}>Правда:</Typography>
        </Box>
        <Typography
            sx={{
                fontSize: { xs: 18, sm: 20 },
                color: 'var(--gray)',
            }}
        >
            {answer}
        </Typography>
    </Box>
));
