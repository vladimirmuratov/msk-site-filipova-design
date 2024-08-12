import {Box, Link, Typography} from '@mui/material'
import {phone} from '@/config'

export const Banner = () => {
    return (
        <Box
            component="figure"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                position: 'relative'
            }}>

            <img className="banner" src="/images/banner.png" alt="banner"/>
            <Typography
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '2%',
                    color: 'var(--red)',
                    fontSize: {xs: 32, sm: 42, md: 58, lg: 68},
                    fontWeight: 700,
                    textShadow: '2px 2px 3px pink'
                }}
            >{phone}</Typography>

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
