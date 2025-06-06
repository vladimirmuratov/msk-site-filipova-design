import { Box } from '@mui/material';
import { BaseServiceCard } from '@/components/base/BaseServiceCard';
import React from 'react';
import { BaseH2 } from '@/components/base/BaseH2';

const ServiceBlock = ({ services = [] }) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
            }}
        >

            <BaseH2 title="Услуги" marginBottom={true} />

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                    gridRowGap: '20px',
                    gridColumnGap: '10px'

                }}
            >
                {services.map((item) => <BaseServiceCard key={item.id} {...item} />)}
            </Box>
        </Box>
    );
};

export default React.memo(ServiceBlock);
