import {Box, Typography} from '@mui/material'
import {BasePartnerCard} from '@/components/base/BasePartnerCard'

export const PartnersBlock = ({partners = []}) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', sm: '50px'},
                marginX: {xs: '15px', sm: 0}
            }}
        >
            <Box
                sx={{
                    marginBottom: {xs: '15px', sm: '30px'},
                    // display: 'flex',
                    // flexDirection: 'column',
                    // gap: '10px'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: {xs: 24, sm: 28},
                        fontWeight: 300,
                        color: 'var(--red)',
                        marginBottom: {xs: '15px', sm: '30px'}
                    }}
                >
                    ПЛАТНЫЕ СТАЦИОНАРЫ МОСКВЫ
                </Typography>

                <Typography
                    sx={{
                        fontSize: {xs: 18, sm: 20},
                        fontWeight: 600,
                        color: 'var(--blue)',
                        marginBottom: {xs: '10px', sm: '15px'}
                    }}
                >
                    МСК Групп — официальный координатор по госпитализации в ведущие
                    клиники России, ведомственные организации здравоохранения,
                    федеральные медицинские учреждения Управления делами Президента РФ.
                </Typography>

                <Typography
                    sx={{
                        fontSize: {xs: 14, sm: 18},
                        color: 'var(--blue)',
                        marginBottom: {xs: '10px', sm: '15px'}
                    }}
                >
                    Мы сотрудничаем со всеми ведущими больницами Москвы и Московской области (кроме детских)
                    и прекрасно знаем их компетенции.
                </Typography>

                <Typography
                    sx={{
                        fontSize: {xs: 14, sm: 18},
                        fontWeight: 600,
                        color: 'var(--blue)',
                    }}
                >
                    Для вас всегда найдется место в палате.
                </Typography>

                <Typography
                    sx={{
                        fontSize: {xs: 18, sm: 20},
                        fontWeight: 600,
                        color: 'var(--blue)',
                        textAlign: 'center',
                        marginY: {xs: '15px', sm: '30px'}
                    }}
                >
                    При обращении в сервис МСК-Групп - все расчеты ведутся по официальным ценам с конкретной медицинской организацией
                </Typography>

            </Box>
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
