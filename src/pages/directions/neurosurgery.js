import {Box, Typography} from '@mui/material'
import {BaseBanner} from '@/components/base/BaseBanner'

export default function Neurosurgery() {
    return (
        <Box>

            <BaseBanner imgPath="/images/directions/11.webp" title="Нейрохирургия"/>

            <Box
                sx={{
                    paddingY: {xs: '25px', sm: '50px'},
                    marginX: {xs: '10px', lg: 0}
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: {xs: 14, sm: 16},
                        fontWeight: 400,
                    }}
                >
                    Отделение неврологии – это ваш ключ к здоровью и гармонии нервной системы. Мы
                    предлагаем широкий спектр услуг: от диагностики и лечения заболеваний нервной системы до комплексных
                    программ реабилитации. Наши врачи-неврологи – эксперты с многолетним опытом, используют передовые
                    методы и новейшие технологии, чтобы точно определить причину ваших симптомов и предложить наиболее
                    эффективное лечение. Забота о вашем здоровье и комфорте – наш главный приоритет. Доверьте своё
                    здоровье профессионалам, и мы поможем вам вернуть ясность ума и качество жизни!
                </Typography>
            </Box>
        </Box>
    )
}
