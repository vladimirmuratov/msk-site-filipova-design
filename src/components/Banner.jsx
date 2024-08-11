import {Box, Link} from '@mui/material'

export const Banner = () => {
    return (
        <Box
            component="figure"
            sx={{
                paddingY: {xs: '25px', sm: '50px'}
            }}>

            <img className="banner" src="/images/banner.png" alt="banner"/>

            <Box
                sx={{
                    paddingX: {xs: '10px', lg: 0},
                    marginTop: {xs: '5px', sm: '10px'},
                    fontSize: {xs: '12px', sm: '14px'},
                    fontWeight: 300,
                    display: 'flex',
                    justifyContent: {xs: 'center', sm: 'flex-start'},
                    gap: {xs: '5px', sm: '10px'}
                }}
            >
                <Link href="#">Госпитализация</Link>
                <Link href="#">Стоимость услуг</Link>
                <Link href="#">Обратный звонок</Link>
            </Box>
        </Box>
    )
}
