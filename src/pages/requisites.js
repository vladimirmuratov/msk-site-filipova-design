import {Box, Typography} from '@mui/material'
import {phone} from '@/config'

export default function Requisites() {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                paddingX: {xs: '10px'},
            }}
        >
            <Typography sx={{color: 'var(--blue)', fontWeight: 500}}>ООО "МСК"</Typography>
            <Typography><span style={{color: 'var(--blue)', fontWeight: 500}}>адрес:</span> г. Москва, Мичуринский пр-т
                д.6</Typography>
            <Typography><span style={{color: 'var(--blue)', fontWeight: 500}}>телефон:</span> {phone}</Typography>
            <Typography><span style={{color: 'var(--blue)', fontWeight: 500}}>ИНН:</span> 9725116009</Typography>
            <Typography><span style={{color: 'var(--blue)', fontWeight: 500}}>КПП:</span> 772501001</Typography>
            <Typography><span style={{color: 'var(--blue)', fontWeight: 500}}>ОГРН:</span> 1237700147343</Typography>
        </Box>
    )
}
