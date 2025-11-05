import React from 'react';
import { Box, Typography } from '@mui/material';

export const DescriptionBlockVer2 = React.memo(() => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: { xs: '25px', sm: '50px' },
                paddingX: { xs: '10px', lg: 0 },
                /*display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: { xs: '10px', sm: '80px' }*/
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '10px', sm: '80px' },
            }}
        >

            <Box
                component="article"
                sx={{
                    margin: { xs: 0, sm: '0 auto' }
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: 'var(--red)',
                        fontSize: { xs: '20px', sm: '32px' },
                        fontWeight: 300,
                        lineHeight: 1.4,
                        textAlign: 'center',
                        textWrap: 'balance',
                        // width: {xs: '100%', sm: '50%'}
                    }}
                >
                    МСК Групп —
                    официальный
                    координатор
                    по госпитализации в
                    федеральные медицинские учреждения
                    г.Москвы
                </Typography>
            </Box>

            <Box component="article">
                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: { xs: '18px', sm: '20px' },
                        fontWeight: 400,
                        marginBottom: { xs: '8px', sm: '10px' }
                    }}
                >
                    Центр госпитализации и сопровождения пациентов <span
                    style={{ fontWeight: 600, whiteSpace: 'nowrap', color: 'var(--red)' }}>МСК-Групп</span> — это не
                    просто еще один посредник между людьми и больницами. Мы работаем рука об руку с ведущими
                    медучреждениями Москвы: и с городскими клиниками, и с профильными ведомственными госпиталями, а
                    также с самыми престижными — федеральными центрами <span
                    style={{ fontWeight: 600, whiteSpace: 'nowrap', color: 'var(--red)' }}>Управления делами Президента РФ</span>.
                    Сотрудничество
                    официальное, аккредитация у нас в кармане — за эти годы ни разу не приходилось доказывать свою
                    репутацию дважды.
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--blue)',
                        fontSize: { xs: '18px', sm: '20px' },
                        fontWeight: 400
                    }}
                >
                    В списке наших партнеров — те самые места, куда родственники просят устроить "только туда", если
                    вдруг случилось что-то серьезное. Эти больницы серьезно держатся за проверенные временем традиции
                    отечественной медицины — но при этом никогда не боятся новизны. В одном коридоре здесь еще можно
                    встретить профессора старой школы, а по соседству уже вовсю трудится команда врачей с опытом
                    западных стажировок и мгновенным доступом к самым свежим протоколам лечения. В результате получается
                    редкая смесь: почти семейная забота о пациентах плюс профессионализм, который впечатляет даже
                    иностранных коллег. Вот почему к нам тянутся не только москвичи или люди из регионов, но и жители
                    других стран. Среди партнёрских клиник есть такие, о которых приятно рассказывать гордо — потому что
                    для многих они давно уже стали символом действительно современной медицины в России.
                </Typography>
            </Box>

        </Box>
    );
});

// export default React.memo(DescriptionBlockVer1)
