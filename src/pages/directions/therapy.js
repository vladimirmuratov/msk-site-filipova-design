import {Box, Typography} from '@mui/material'
import {BaseBanner} from '@/components/base/BaseBanner'

export default function Therapy() {
    return (
        <Box>

            <BaseBanner imgPath="/images/directions/8.webp" title="Терапия"/>

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
                    Отделение терапии – это ваша первая линия защиты здоровья. Мы предлагаем
                    комплексное лечение и профилактику широкого спектра заболеваний, обеспечивая индивидуальный подход к
                    каждому пациенту. Наши терапевты – это опытные специалисты, которые точно диагностируют и эффективно
                    лечат, помогая вам восстановить силы и улучшить качество жизни. Мы используем современные методы и
                    оборудование, чтобы ваше лечение было максимально комфортным и результативным. Доверьте заботу о
                    своём здоровье нашим профессионалам, и вы почувствуете разницу!
                </Typography>
            </Box>
        </Box>
    )
}
