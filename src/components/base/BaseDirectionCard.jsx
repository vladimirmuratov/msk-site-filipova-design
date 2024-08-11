import {Box, Typography} from '@mui/material'

export const BaseDirectionCard = ({label, img}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--black)',
                borderRadius: '5px'
            }}
        >
            <Box
                component="img"
                src={img}
                alt="pic"
                sx={{
                    width: '100%',
                    borderTopRightRadius: '5px',
                    borderTopLeftRadius: '5px',
                }}
            >
            </Box>
            <Typography
                sx={{
                    color: 'var(--blue)',
                    fontSize: {xs: '14px', sm: '14px', md: '16px'},
                    fontWeight: 500,
                    padding: '5px 10px'
                }}
            >{label}</Typography>
        </Box>
    )
}
