import { Box } from '@mui/material';
import { BaseStep } from '@/components/base/for-service-pages/BaseStep';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';

export const HowToBeHospitalized = ({ steps = [], title = '' }) => {
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

            <BaseSubTitle title={title} marginBottom={true} />

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
                    columnGap: '30px',
                    rowGap: '30px',
                    flexWrap: 'wrap'
                }}
            >
                {steps.map((item, index, array) => <BaseStep key={item.id} {...item} idx={index}
                                                             totalLength={array.length} />)}
            </Box>
        </Box>
    );
};
