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
    endoprostheticsKnee1,
    endoprostheticsKnee2,
    endoprostheticsKnee3,
    endoprostheticsKnee4
} from '@/config/directions/endoprosthetics';

export default function Knee() {
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
                Коленный сустав
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Эндопротезирование коленного сустава в Москве — госпитализация . 8
                    (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация в клинику для эндопротезирования коленного сустава. Без ОМС. Пациентам из регионов и СНГ. Перевод, сопровождение, помощь 24/7."
                />
                <meta
                    name="keywords"
                    content="эндопротезирование коленного сустава, замена коленного сустава, операция на коленный сустав, платная госпитализация, госпитализация без ОМС, клиника в Москве, ревизионное эндопротезирование, суставная хирургия, помощь пациентам из регионов, сопровождение больных, лечение артроза, транспортировка пациента, патронажная служба"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Эндопротезирование коленного сустава в Москве — госпитализация . 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная госпитализация в клинику для эндопротезирования коленного сустава. Без ОМС. Пациентам из регионов и СНГ. Перевод, сопровождение, помощь 24/7." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/endoprosthetics/knee" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/endoprosthetics/5.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Эндопротезирование коленного сустава в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Эндопротезирование коленного сустава в Москве." />
                <link rel="canonical" href="https://msk-group-hospital.ru/" />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/endoprosthetics/5.webp" title="Эндопротезирование коленного сустава" />

                <BaseCallBlock text='Запись на операцию' />

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
                            }}>Эндопротезирование коленного сустава </span> — это хирургическая операция по замене
                        повреждённого сустава искусственным имплантом (эндопротезом). Этот метод применяется при тяжёлых
                        стадиях артроза, травмах, деформациях и других патологиях, при которых консервативное лечение
                        уже не помогает.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Показания к эндопротезированию колена:" />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>
                            Если боль в колене стала постоянной, нарушена подвижность, а сустав деформирован — это
                            прямые показания к эндопротезированию.
                        </BaseText>
                    </Box>

                    <List>
                        {endoprostheticsKnee1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
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
                        <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                            Хирург удаляет разрушенные ткани сустава и устанавливает искусственный протез, максимально
                            приближённый по анатомии к природному. Современные протезы изготавливаются из прочных
                            биосовместимых материалов, срок их службы — до 20 лет и более.
                        </BaseText>
                        <BaseText style={{ display: 'block' }}>
                            Сама операция длится 1,5–2 часа. Госпитализация — от 5 до 10 дней, далее следует этап
                            реабилитации.
                        </BaseText>
                    </Box>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Госпитализация на эндопротезирование коленного сустава" />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>
                            <span
                                style={{
                                    color: 'var(--red)'
                                }}>Медицинская Сервисная Компания</span> организует плановую платную госпитализацию на
                            эндопротезирование коленного сустава в ведущие клиники Москвы. Мы работаем с пациентами:
                        </BaseText>
                    </Box>

                    <List>
                        {endoprostheticsKnee2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Мы обеспечиваем:" />

                    <List>
                        {endoprostheticsKnee3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Почему стоит выбрать нас?" />

                    <List>
                        {endoprostheticsKnee4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                            marginX: { xs: '10px', lg: 0 },
                        }}
                    >
                        <BaseH2 title="Цены и сроки" />
                        <Box
                            sx={{
                                marginTop: '15px',
                            }}
                        >
                            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                                Стоимость эндопротезирования зависит от выбранной клиники, вида протеза и сложности
                                случая. Мы подбираем оптимальный вариант под бюджет и медицинские показания пациента.
                                Предоставим подробную консультацию и поможем оформить все документы.
                            </BaseText>
                        </Box>
                    </Box>

                </Box>

                {/*<PartnersBlock title="платные клиники москвы урология" color="var(--red)" />*/}

                <BaseCallBlock text='Запись на операцию' />

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
