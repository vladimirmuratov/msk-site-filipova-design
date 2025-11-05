import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { BaseH2 } from '@/components/base/BaseH2';

export const WhyWeBlockVer1 = React.memo(() => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
                paddingRight: { xs: 0, sm: '23px' },
                // marginX: {xs: '15px', sm: 0}
            }}
        >

            <BaseH2 title="Почему стоит обратиться в наш сервис подбора медицинской клиники?"
                    marginBottom={true} />

            <Box>
                <Typography
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        color: 'var(--blue)',
                        marginBottom: { xs: '10px', sm: '20px' }
                    }}
                >
                    Подбор подходящей клиники — важный шаг на пути к выздоровлению. Мы берём на себя все сложности и
                    помогаем вам найти оптимальное решение с учётом ваших потребностей и пожеланий.
                </Typography>
            </Box>

            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Экономия времени
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Забудьте о бесконечных поисках и сомнительных отзывах. Мы подберём для вас проверенные клиники и
                    специалистов — быстро, точно и без лишней суеты.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Индивидуальный подход
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Наши специалисты учитывают все особенности: диагноз, сопутствующие заболевания, личные предпочтения
                    и даже удобное расположение клиники.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Сопровождение на всех этапах
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    От первичной консультации до записи на приём — мы рядом. Поможем подготовить документы, подскажем,
                    как проходит лечение, и ответим на все ваши вопросы.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Прозрачность и честные цены
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Мы подбираем клиники с адекватной ценовой политикой и заранее предупреждаем о возможных
                    дополнительных расходах. Никаких скрытых платежей.
                </Typography>
            </Box>
            <Box component="article"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Только проверенные клиники
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Работаем исключительно с лицензированными и надёжными медицинскими учреждениями. Ваше здоровье —
                    наша ответственность.
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant='h3'
                    sx={{
                        fontSize: { xs: 22, sm: 24 },
                        color: 'var(--red)',
                        paddingTop: { xs: '10px', sm: '20px' },
                        textAlign: 'center',
                        fontStyle: 'italic',
                        textWrap: 'balance',
                        lineHeight: 1.5
                    }}
                >
                    В ситуациях, требующих высококвалифицированной медицинской помощи, особенно важно действовать без
                    промедления. Мы организуем быструю госпитализацию в ведущие клиники Москвы, тщательно подбирая
                    учреждение и профильного специалиста в соответствии с вашими индивидуальными потребностями.
                </Typography>
            </Box>
        </Box>
    );
});
