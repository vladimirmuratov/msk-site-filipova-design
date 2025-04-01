import { Box, Typography } from '@mui/material';
import { BaseServicePageCard } from '@/components/base/BaseServicePageCard';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';

export const BaseFirstBlock = ({ services = [], title = '', description = '' }) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
                // marginX: {xs: '15px', sm: 0}
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

                <BaseSubTitle title={title} />

                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: { xs: 18, sm: 20 },
                        fontWeight: 300,
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    {description}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    rowGap: { xs: '15px', sm: '20px' },
                    columnGap: '10px'
                }}
            >
                {services.map((item) => <BaseServicePageCard key={item.id} {...item} />)}
            </Box>
        </Box>
    );
};
