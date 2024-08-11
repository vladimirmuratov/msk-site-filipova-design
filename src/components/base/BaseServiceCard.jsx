import {Box, Typography} from '@mui/material'

export const BaseServiceCard = ({label, text, icon}) => {
    return (
        <Box
            sx={{
                padding: '10px',
                border: '1px solid var(--black)',
                borderRadius: '10px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: {xs: '5px', sm: '10px', md: '15px'},
                    marginBottom: {xs: '10px', sm: '15px'}
                }}
            >
                <Box
                    component="img"
                    src={icon}
                    alt="icon"
                    sx={{
                        height: '50px'
                    }}
                ></Box>
                <Typography
                sx={{
                    color: 'var(--blue)',
                    fontWeight: 500
                }}
                >{label}</Typography>
            </Box>
            <Typography
            sx={{
                fontSize: {xs: '10px', sm: '12px'}
            }}
            >
                {text}
            </Typography>
        </Box>
    )
}
