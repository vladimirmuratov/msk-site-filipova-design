import React from 'react';
import { Box, Typography } from '@mui/material';
import { BaseH2 } from '@/components/base/BaseH2';
import { fears } from '@/config/fears';
import { BaseFearItem } from '@/components/base/BaseFearItem';

export const FearBlock = React.memo(() => (
    <Box
        component="section"
        sx={{
            paddingY: { xs: '25px', sm: '50px' },
            paddingX: { xs: '10px', lg: 0 },
        }}
    >

        <BaseH2 title="Сомневаетесь? Развеем все страхи о платной госпитализации в Москве!" marginBottom={true} />

        <Box>
            <Typography
                sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: 'var(--blue)',
                    marginBottom: { xs: '10px', sm: '20px' }
                }}
            >
                Обращаясь в <Box component="span"
                                 sx={{ fontWeight: 600, whiteSpace: 'nowrap', color: 'var(--red)' }}>МСК-Групп</Box>,
                клиенты часто
                испытывают тревогу и неуверенность. Это
                абсолютно нормально — ведь речь идёт о здоровье близкого человека. Ниже мы собрали самые
                распространённые страхи и честно расскажем, почему <Box component="span" sx={{
                fontWeight: 600,
                whiteSpace: 'nowrap',
                color: 'var(--red)'
            }}>вам не стоит волноваться</Box>.
            </Typography>
        </Box>

        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px',}}>
            {fears.map((item) => <BaseFearItem key={item.id} {...item}  />)}
        </Box>

    </Box>
));
