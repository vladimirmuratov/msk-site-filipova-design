import {Box, Typography} from '@mui/material'
import {BaseBanner} from '@/components/base/BaseBanner'

export default function Gynecology() {
    return (
        <Box>

            <BaseBanner imgPath="/images/directions/3.webp" title="Гинекология"/>

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
                    Отделение гинекологии – это место, где здоровье и комфорт женщины являются
                    главными приоритетами. Мы предлагаем широкий спектр услуг: от плановых осмотров до сложных
                    хирургических вмешательств. Наши врачи обладают высоким уровнем квалификации и вниманием к деталям,
                    что обеспечивает точную диагностику и эффективное лечение. Современное оборудование и передовые
                    методы позволяют нам заботиться о вашем здоровье на самом высоком уровне. Доверьтесь нашей команде
                    профессионалов и будьте уверены в своём женском здоровье на каждом этапе жизни!
                </Typography>
            </Box>
        </Box>
    )
}
