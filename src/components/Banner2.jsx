import {Box} from '@mui/material'

export const Banner2 = () => {
    return (
        <Box
            component="figure"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                position: 'relative'
            }}>
            <Box
                component="img"
                src="/images/banner-2.png"
                alt="banner"
                sx={{
                    width: '100%',
                    height: 'auto'
                }}
            />
        </Box>
    )
}
