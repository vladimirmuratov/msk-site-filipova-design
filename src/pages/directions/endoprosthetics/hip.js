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
    endoprostheticsHip1,
    endoprostheticsHip2,
    endoprostheticsHip3,
    endoprostheticsHip4
} from '@/config/directions/endoprosthetics';

export default function Hip() {
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
                Тазобедренный сустав
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Эндопротезирование тазобедренного сустава в Москве. 8 (499)
                    719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Организуем платную госпитализацию для эндопротезирования тазобедренного сустава в ведущих клиниках Москвы. Без ОМС. Помощь пациентам из РФ и СНГ."
                />
                <meta
                    name="keywords"
                    content="эндопротезирование тазобедренного сустава, замена тазобедренного сустава, операция на тазобедренный сустав, платная госпитализация Москва, госпитализация без ОМС, ортопедия, лечение в Москве, госпитализация из регионов, лечение суставов, травматология, реабилитация после эндопротезирования"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Эндопротезирование тазобедренного сустава в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Организуем платную госпитализацию для эндопротезирования тазобедренного сустава в ведущих клиниках Москвы. Без ОМС. Помощь пациентам из РФ и СНГ." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/endoprosthetics/hip" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/endoprosthetics/6.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Эндопротезирование тазобедренного сустава в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Эндопротезирование тазобедренного сустава в Москве." />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/endoprosthetics/6.webp"
                            title="Эндопротезирование тазобедренного сустава" />

                <BaseCallBlock text="Запись на операцию" style={{ fontWeight: 500, fontSize: { xs: 22, sm: 28 } }} />

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
                            }}>Эндопротезирование тазобедренного сустава </span> — это высокоэффективная операция,
                        позволяющая восстановить подвижность и устранить боль при тяжёлых поражениях сустава. Замена
                        тазобедренного сустава показана при артрозах, травмах, дисплазии, некрозах головки бедренной
                        кости и других патологиях, которые не поддаются консервативному лечению.
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
                        <BaseText style={{ fontWeight: 500 }}>
                            Операция назначается при:
                        </BaseText>
                    </Box>

                    <List>
                        {endoprostheticsHip1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <Box
                        sx={{
                            marginTop: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>
                            Если обычное лечение больше не помогает, эндопротезирование — единственный способ вернуть
                            качество жизни.
                        </BaseText>
                    </Box>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseH2 title="Как проходит операция" />

                    <Box
                        sx={{
                            marginTop: '15px',
                        }}
                    >
                        <List>
                            {endoprostheticsHip2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                        </List>
                    </Box>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseH2 title="Преимущества замены сустава" />

                    <Box
                        sx={{
                            marginTop: '15px',
                        }}
                    >
                        <List>
                            {endoprostheticsHip3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                        </List>
                    </Box>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Почему выбирают нас" />

                    <List>
                        {endoprostheticsHip4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
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
