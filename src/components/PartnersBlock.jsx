import { Box, Typography } from '@mui/material';
import { BasePartnerCard } from '@/components/base/BasePartnerCard';
import React from 'react';
import { partners } from '@/config';

const PartnersBlock = ({ title = 'наши партнеры', color = 'var(--red)' }) => {
    return (
        <Box
            id="partners"
            component="section"
            sx={{
                scrollMarginTop: '150px',
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
            }}
        >
            <Box
                sx={{
                    marginBottom: { xs: '15px', sm: '30px' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: '10px', sm: '15px' }
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: 32, sm: 38 },
                        fontWeight: 300,
                        color: color,
                        textTransform: 'uppercase',
                        // marginBottom: {xs: '15px', sm: '30px'},
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: {xs: 14, sm: 18},
                        color: 'var(--blue)',
                        // marginBottom: {xs: '10px', sm: '15px'}
                    }}
                >
                    Мы сотрудничаем со всеми ведущими больницами Москвы и Московской области (кроме детских)
                    и прекрасно знаем их компетенции.
                </Typography>

                <Typography
                    sx={{
                        fontSize: {xs: 14, sm: 18},
                        fontWeight: 600,
                        color: 'var(--blue)',
                    }}
                >
                    Для вас всегда найдется место в палате.
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: { xs: 14, sm: 18 },
                        // fontWeight: 500
                    }}
                >
                    При обращении в сервис МСК&ndash;Групп &mdash; все расчеты ведутся по официальным ценам с конкретной
                    медицинской
                    организацией
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
                    gap: { xs: '3px', sm: '5px', md: '10px' },
                }}
            >
                {partners.map((item) => <BasePartnerCard key={item.id} {...item} />)}
            </Box>
        </Box>
    );
};

export default React.memo(PartnersBlock);
