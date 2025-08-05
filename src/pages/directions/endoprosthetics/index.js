import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { endoprostheticsImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseLi } from '@/components/base/BaseLi';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import {
    endoprosthetics1,
    endoprosthetics2,
    endoprosthetics3,
    endoprosthetics4
} from '@/config/directions/endoprosthetics';
import { BaseLink } from '@/components/base/BaseLink';
import { useScrollPosition } from '@/lib/useScrollPosition ';

export default function Endoprosthetics() {
    const breadcrumbs = (router) => {
        return [
            <Link
                // href="/"
                component="button"
                onClick={() => router.push('/')}
                underline="hover"
                key="1"
                sx={{ color: 'var(--blue)!important', fontWeight: 400 }}
            >
                Главная
            </Link>,
            <Typography key="2" sx={{ color: 'var(--gray)' }}>
                Эндопротезирование
            </Typography>,
        ];
    };

    useScrollPosition('Endoprosthetics');

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Эндопротезирование суставов в Москве — госпитализация под ключ. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Организуем эндопротезирование суставов в Москве: подбор клиники, госпитализация без ОМС, транспортировка, лечение под ключ. Работаем с регионами и СНГ."
                />
                <meta
                    name="keywords"
                    content="эндопротезирование, замена сустава, эндопротезирование сустава, платная госпитализация, эндопротезирование в Москве, госпитализация без ОМС, замена тазобедренного сустава, замена коленного сустава, медицинская транспортировка, госпитализация из региона, операция по замене сустава, лечение суставов Москва, протезирование суставов, плановая госпитализация, эндопротез Москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Эндопротезирование суставов в Москве — госпитализация под ключ. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Организуем эндопротезирование суставов в Москве: подбор клиники, госпитализация без ОМС, транспортировка, лечение под ключ. Работаем с регионами и СНГ." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/endoprosthetics" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/endoprosthetics/1.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Эндопротезирование суставов в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Эндопротезирование суставов в Москве." />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/endoprosthetics/1.webp" title="Эндопротезирование коленного и тазобедренного суставов" />

                <BaseCallBlock />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        <span style={{
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            color: 'var(--red)'
                        }}>Эндопротезирование коленного и тазобедренного суставов</span> — это хирургическая операция по замене повреждённого сустава
                        искусственным
                        имплантатом. Процедура позволяет восстановить подвижность, устранить хроническую боль и вернуть
                        качество жизни пациентам с тяжёлыми формами артроза, артрита, дисплазии или после серьёзных
                        травм.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Когда необходимо эндопротезирование?" />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>Показания к проведению операции:</BaseText>
                    </Box>

                    <List>
                        {endoprosthetics1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Если консервативное лечение не даёт результатов, боль усиливается, а движения ограничены —
                        показана замена сустава.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Какие операции организуем" />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>Наиболее часто проводятся:</BaseText>
                    </Box>

                    <Box>
                        {endoprosthetics2.map((link) => <BaseLink key={link.id} {...link} />)}
                    </Box>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseH2 title="Как проходит операция?" />
                    <Box
                        sx={{
                            marginTop: '15px',
                        }}
                    >
                        <BaseText>
                            Операция проводится под общей или спинальной анестезией. Повреждённые части сустава
                            удаляются и
                            заменяются индивидуально подобранными протезами из прочных биосовместимых материалов.
                            Современные технологии позволяют сохранить окружающие ткани и обеспечить быструю
                            реабилитацию.
                        </BaseText>
                    </Box>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Виды протезов" />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>Выбор зависит от возраста, состояния костной ткани, образа
                            жизни и других
                            факторов.</BaseText>
                    </Box>

                    <List>
                        {endoprosthetics3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Реабилитация после эндопротезирования" />

                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>Выбор зависит от возраста, состояния костной ткани, образа
                            жизни и других
                            факторов.</BaseText>
                    </Box>

                    <List>
                        {endoprosthetics4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <Box
                        sx={{
                            marginTop: '15px'
                        }}
                    >
                        <BaseText>В большинстве случаев пациенты начинают ходить с опорой уже на 2–3 день после
                            операции.</BaseText>
                    </Box>

                </Box>

                {/*<PartnersBlock title="платные клиники москвы урология" color="var(--red)" />*/}

                <BaseCallBlock />

                <BasePhotoGallery imagesList={endoprostheticsImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
