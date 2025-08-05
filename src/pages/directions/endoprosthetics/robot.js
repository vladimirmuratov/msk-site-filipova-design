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
    endoprostheticsRobot1,
    endoprostheticsRobot2,
    endoprostheticsRobot3,
    endoprostheticsRobot4
} from '@/config/directions/endoprosthetics';

export default function Robot() {
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
            <Link
                // href="/"
                component="button"
                onClick={() => router.push('/directions/endoprosthetics')}
                underline="hover"
                key="2"
                sx={{ color: 'var(--blue)!important', fontWeight: 400 }}
            >
                Эндопротезирование
            </Link>,
            <Typography key="3" sx={{ color: 'var(--gray)' }}>
                Роботизированное эндопротезирование
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Роботизированное эндопротезирование суставов в Москве —
                    госпитализация. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация для роботизированного эндопротезирования коленного и тазобедренного суставов в Москве. Без ОМС. Помощь пациентам из РФ и СНГ."
                />
                <meta
                    name="keywords"
                    content="роботизированное эндопротезирование, замена суставов с помощью робота, эндопротезирование коленного сустава, тазобедренный сустав, госпитализация без ОМС, платная госпитализация, лечение в Москве, суставная хирургия, MAKO, робот-ассистированная операция, госпитализация из регионов"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Роботизированное эндопротезирование суставов в Москве — госпитализация. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная госпитализация для роботизированного эндопротезирования коленного и тазобедренного суставов в Москве. Без ОМС. Помощь пациентам из РФ и СНГ." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/endoprosthetics/robot" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/endoprosthetics/7.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Роботизированное эндопротезирование суставов в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Роботизированное эндопротезирование суставов в Москве." />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/endoprosthetics/7.webp"
                    title="Роботизированное эндопротезирование"
                    fontShadowColor='var(--white)'
                    fontColor='var(--red)'
                />

                <BaseCallBlock text='Запись на операцию' style={{fontWeight: 500, fontSize: {xs: 22, sm: 28}}} />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        <span
                            style={{
                                fontWeight: 500,
                                color: 'var(--red)'
                            }}>Роботизированное эндопротезирование коленного и тазобедренного суставов </span> — это высокотехнологичная операция по замене
                        сустава, проводимая с применением роботизированных хирургических систем. Такая методика
                        позволяет достичь максимальной точности в установке протеза, снизить травматичность
                        вмешательства и ускорить восстановление пациента.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Применяется при:" />

                    <List>
                        {endoprostheticsRobot1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Преимущества робот-ассистированной замены суставов" />

                    <List>
                        {endoprostheticsRobot2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseH2 title="Как проходит госпитализация?" />

                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>
                            <span
                                style={{
                                    color: 'var(--red)'
                                }}>Медицинская Сервисная Компания</span> организует платную госпитализацию в ведущие
                            клиники Москвы,
                            где выполняются роботизированные операции по замене суставов (коленного, тазобедренного и
                            др.). Мы сопровождаем пациентов на каждом этапе:
                        </BaseText>
                    </Box>

                    <Box
                        sx={{
                            marginTop: '15px',
                        }}
                    >
                        <List>
                            {endoprostheticsRobot3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                        </List>
                    </Box>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseH2 title="Почему выбирают нас:" />

                    <Box
                        sx={{
                            marginTop: '15px',
                        }}
                    >
                        <List>
                            {endoprostheticsRobot4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                        </List>
                    </Box>
                </Box>

                {/*<PartnersBlock title="платные клиники москвы урология" color="var(--red)" />*/}

                <BaseCallBlock text='Запись на операцию' style={{fontWeight: 500, fontSize: {xs: 22, sm: 28}}} />

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
