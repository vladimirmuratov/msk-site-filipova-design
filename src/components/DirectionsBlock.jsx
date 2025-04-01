import { Box } from '@mui/material';
import { BaseDirectionCard } from '@/components/base/BaseDirectionCard';
import React from 'react';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';

const DirectionsBlock = ({ directions = [], router }) => {

    return (
        <Box
            id="direct"
            component="section"
            sx={{
                scrollMarginTop: '150px',
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
            }}
        >

            <BaseSubTitle title="НАПРАВЛЕНИЯ ЛЕЧЕНИЯ" marginBottom={true} />

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                    gridRowGap: '20px',
                    gridColumnGap: '10px'

                }}
            >

                {directions.map((item) => <BaseDirectionCard key={item.id} {...item} router={router} />)}

            </Box>

        </Box>
    );
};

export default React.memo(DirectionsBlock);
