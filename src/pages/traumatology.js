import {Box, Typography} from '@mui/material'
import {BaseBanner} from '@/components/base/BaseBanner'

export default function Traumatology() {
    return (
        <Box>

            <BaseBanner imgPath="/images/directions/2.png" title="Травматология и ортопедия"/>

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
                    Отделение травматологии и ортопедии нашей клиники в Москве – это гарантия профессионального подхода
                    к вашему здоровью. Мы специализируемся на диагностике и лечении заболеваний и травм
                    опорно-двигательного аппарата, используя новейшие технологии и современные методы. Наши специалисты
                    имеют богатый опыт в проведении операций любой сложности, обеспечивая быстрое восстановление и
                    возвращение к активной жизни. Мы предлагаем индивидуальные программы реабилитации, которые помогут
                    вам восстановить утраченные функции и предотвратить возможные осложнения. Доверьтесь нашим
                    профессионалам и восстановите свою подвижность и качество жизни!
                </Typography>
            </Box>
        </Box>
    )
}