import {Box, Typography} from '@mui/material'
import {BaseBanner} from '@/components/base/BaseBanner'

export default function Cardiology() {
    return (
        <Box>

            <BaseBanner imgPath="/images/directions/5.webp" title="Кардиология"/>

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
                    Отделение кардиологии – это ваш надёжный партнёр в заботе о сердце. Мы
                    предлагаем полный спектр услуг, от профилактики сердечно-сосудистых заболеваний до сложных
                    диагностических процедур и лечения. Наши кардиологи – это команда опытных специалистов, которые
                    используют современные методы и оборудование для точной диагностики и эффективного лечения. Мы
                    знаем, как важно здоровье вашего сердца, и предлагаем индивидуальный подход к каждому пациенту.
                    Доверьтесь нам, и мы поможем вам сохранить ритм вашей жизни в гармонии и здоровье!
                </Typography>
            </Box>
        </Box>
    )
}
