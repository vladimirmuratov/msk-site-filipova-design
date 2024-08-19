import {Box, Typography} from '@mui/material'

export const BaseBanner = ({imgPath, title}) => {
    return (
        <Box
            sx={{
                position: 'relative'
            }}
        >

            <Box
                component="img"
                src={imgPath}
                alt="pic"
                sx={{
                    width: '100%',
                    height: 'auto'
                }}
            />
            <Typography
                component="h4"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'var(--white)',
                    fontSize: {xs: 40, sm: 58, md: 68, lg: 78},
                    fontWeight: 600,
                    textShadow: '4px 4px 5px var(--gray)',
                    textAlign: 'center',
                    lineHeight: 1.1
                }}
            >{title}</Typography>

        </Box>
    )
}
