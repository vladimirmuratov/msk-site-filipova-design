import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { BaseH2 } from '@/components/base/BaseH2';

export const WhyWeBlockVer2 = React.memo(() => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
                paddingRight: { xs: 0, sm: '23px' },
                // marginX: {xs: '15px', sm: 0}
            }}
        >

            <BaseH2 title="Почему люди доверяют нам подбор медицинской клиники?"
                    marginBottom={true} />

            <Box>
                <Typography
                    sx={{
                        fontSize: { xs: 18, sm: 20 },
                        color: 'var(--blue)',
                        marginBottom: { xs: '10px', sm: '20px' }
                    }}
                >
                    Любой, кто хоть раз пытался найти подходящую больницу или врача, знает: эта задача может выбрать все
                    силы. Рынок полон противоречивых отзывов, реклама обещает чудеса, а времени на раздумья мало —
                    здоровье не терпит промедлений. Вот тут и появляется наш сервис. Мы работаем как фильтр между вами и
                    хаосом рынка — берём на себя всю рутину и направляем в действительно подходящую вам клинику.
                </Typography>
            </Box>

            <Box component="article"
                 className="animation-block"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Бесконечные поиски и сомнительные источники
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Вместо "гуглить" дни напролёт и теряться в слухах знакомых, вы просто рассказываете нам о своей
                    ситуации. Мы обследуем пул проверенных клиник — те, с кем взаимодействуем не первый год — и
                    подбираем нужное по профилю место за считанные часы. Это спасает уйму времени и нервов (и да,
                    никакой спешки: всё обсуждаем до полного понимания обеих сторон).
                </Typography>
            </Box>
            <Box component="article"
                 className="animation-block"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Кто-то учтет мои особенности?
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Не всегда лучший врач — тот, кто первым попался в поиске. Человек с хроническими заболеваниями
                    нуждается в определённом профиле помощи; пожилым важнее близость к дому; кто-то ищет особые условия
                    комфорта или узкое направление по диагнозу. Наши специалисты учитывают всё: диагнозы, сопутствующую
                    терапию вплоть до мелочей вроде питания или наличия отдельной палаты. Вы получаете не абстрактную
                    “клиника N”, а оптимально подходящий вариант для конкретного случая.
                </Typography>
            </Box>
            <Box component="article"
                 className="animation-block"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Как происходит сопровождение?
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Никто не любит оставаться один на один с бюрократией из документов или звонками по регистратурам
                    (особенно когда речь идёт о срочных госпитализациях). Мы держим клиента за руку: оформление бумаг,
                    запись к врачу, объяснения по этапам лечения — если нужно, подъедем лично помочь на месте.
                </Typography>
            </Box>
            <Box component="article"
                 className="animation-block"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Цены — никаких “подводных камней”
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    На старте обговариваем стоимость каждого этапа: транспортировка, обследование, проживание
                    сопровождающего и т.д. Фиксируем цену письменно — прозрачность важнее всего; мучиться от внезапных
                    счетов тут не придётся.
                </Typography>
            </Box>
            <Box component="article"
                 className="animation-block"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Комфортный транспорт
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Выездная служба со спецмашинами (скорой помощью, кислородом), обученным медперсоналом — чтобы
                    родственник приехал вовремя и безопасно.
                </Typography>
            </Box>
            <Box component="article"
                 className="animation-block"
                 sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckIcon sx={{ color: 'var(--red)' }} />
                    <Typography variant="h3"
                                sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                        Только лицензированные партнёры
                    </Typography>
                </Box>
                <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                    Работаем только с теми клиниками, кто прошёл госаккредитацию
                    (государственные/ведомственные/частные). Здесь нет случайных адресов из интернета — только
                    проверенные учреждения, где мы лично знакомы с врачами-специалистами.
                </Typography>
            </Box>
            <Box>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: 22, sm: 24 },
                        color: 'var(--red)',
                        paddingTop: { xs: '10px', sm: '20px' },
                        textAlign: 'center',
                        fontStyle: 'italic',
                        textWrap: 'balance',
                        lineHeight: 1.5
                    }}
                >
                    В ситуациях, требующих высококвалифицированной медицинской помощи, особенно важно действовать без
                    промедления. Мы организуем быструю госпитализацию в ведущие клиники Москвы, тщательно подбирая
                    учреждение и профильного специалиста в соответствии с вашими индивидуальными потребностями.
                </Typography>
            </Box>
        </Box>
    );
});
