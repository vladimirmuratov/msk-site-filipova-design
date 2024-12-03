import {Box, Typography} from '@mui/material'
import {BaseServiceCard} from '@/components/base/BaseServiceCard'
import React from 'react'

const ServiceBlock = ({services = []}) => {
    return (
        <Box
            component="section"
            sx={{
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
                Услуги
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'},
                    gridRowGap: '20px',
                    gridColumnGap: '10px'

                }}
            >
                {services.map((item) => <BaseServiceCard key={item.id} {...item}/>)}
            </Box>
        </Box>
    )
}

export default React.memo(ServiceBlock)
