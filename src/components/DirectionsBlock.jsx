import {Box, Typography} from '@mui/material'
import {BaseDirectionCard} from '@/components/base/BaseDirectionCard'
import React from 'react'

const DirectionsBlock = ({directions = [], router}) => {

    return (
        <Box
            id='direct'
            component="section"
            sx={{
                scrollMarginTop: '150px',
                paddingY: {xs: '25px', sm: '50px'},
                paddingX: {xs: '10px', lg: 0},
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontSize: {xs: 32, sm: 38},
                    fontWeight: 300,
                    color: 'var(--blue)',
                    textTransform: 'uppercase',
                    marginBottom: {xs: '15px', sm: '30px'},
                }}
            >
                НАПРАВЛЕНИЯ ЛЕЧЕНИЯ
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'},
                    gridRowGap: '20px',
                    gridColumnGap: '10px'

                }}
            >

                {directions.map((item) => <BaseDirectionCard key={item.id} {...item} router={router}/>)}

            </Box>

        </Box>
    )
}

export default React.memo(DirectionsBlock)
