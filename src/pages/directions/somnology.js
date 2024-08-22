import {Box, Typography} from '@mui/material'
import {BaseBanner} from '@/components/base/BaseBanner'

export default function Somnology() {
    return (
        <Box>

            <BaseBanner imgPath="/images/directions/9.png" title="Сомнология"/>

            <Box
                sx={{
                    paddingY: {xs: '25px', sm: '50px'},
                    marginX: {xs: '15px', lg: 0}
                }}
            >
                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: {xs: 14, sm: 16},
                        fontWeight: 400,
                    }}
                >
                    Отделение сомнологии нашей клиники в Москве – это ваш путь к здоровому и крепкому сну. Мы предлагаем
                    диагностику и лечение всех видов нарушений сна, от бессонницы до апноэ. Наши специалисты-сомнологи
                    используют передовые технологии и методы, чтобы точно определить причины ваших проблем и разработать
                    персонализированный план лечения. Мы знаем, как важен качественный сон для вашего здоровья и
                    самочувствия. Доверьтесь нашим профессионалам, и мы поможем вам обрести полноценный отдых и энергию
                    для каждого дня!
                </Typography>
            </Box>
        </Box>
    )
}
