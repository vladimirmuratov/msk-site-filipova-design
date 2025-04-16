import React from 'react';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';
import { Box } from '@mui/material';
import { BaseText } from '@/components/base/BaseText';
import Link from 'next/link';

export const DiseasesBlock = React.memo(({ diseases = [] }) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
            }}
        >

            <BaseSubTitle title="чаще всего к нам обращаются:" marginBottom={true} />

            <Box
                sx={{
                    /*display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                    gridRowGap: '20px',
                    gridColumnGap: '10px'*/

                }}
            >
                {diseases.map(({ id, label, path }) => (
                    <Box component="ul" key={id}>
                        <Box
                            component="li"
                            sx={{ listStyleType: 'none!important' }}
                        >
                            <Link href={path}>
                                <BaseText
                                    style={{
                                        fontSize: { xs: '25px', sm: '30px' },
                                        fontWeight: 300,
                                        textDecoration: 'underline',
                                        textDecorationColor: 'var(--blue)',
                                        textDecorationThickness: '1px',
                                        textUnderlineOffset: '5px'
                                }}>{label}</BaseText>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
});
