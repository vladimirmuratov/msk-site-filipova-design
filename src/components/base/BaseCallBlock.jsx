import React from 'react';
import { BaseText } from '@/components/base/BaseText';
import { Box } from '@mui/material';

export const BaseCallBlock = React.memo(() => {
    return (
        <Box
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                marginX: { xs: '10px', lg: 0 },
            }}
        >
            <BaseText style={{ display: 'block', marginBottom: '10px', color: 'var(--red)', fontStyle: 'italic', textAlign: 'center' }}>
                Запись на консультацию возможна по телефону или через форму на сайте.
            </BaseText>
        </Box>
    );
});
