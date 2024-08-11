import {Box, Typography} from '@mui/material'
import {BasePartnerCard} from '@/components/base/BasePartnerCard'

export const PartnersBlock = ({partners = []}) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                paddingX: {xs: '10px', lg: 0},
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontSize: {xs: 32, sm: 38},
                    fontWeight: 300,
                    color: 'var(--blue)',
                    textTransform: 'uppercase',
                    marginBottom: {xs: '15px', sm: '30px'},
                }}
            >
                Клиники
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'},
                    gap: {xs: '3px', sm: '5px', md: '10px'},
                }}
            >
                {partners.map((item) => <BasePartnerCard key={item.id} {...item}/>)}
            </Box>
        </Box>
    )
}
