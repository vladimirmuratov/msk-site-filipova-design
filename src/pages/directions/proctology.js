import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { proctologyImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { LocalHospital } from '@mui/icons-material';
import { proctologyList } from '@/config/diseases/proctology';
import { BaseLi } from '@/components/base/BaseLi';

export default function Proctology() {
    const breadcrumbs = () => {
        return [
            <Link
                className="breadcrumb-link"
                href="/"
                key="1"
            >
                Главная
            </Link>,
            <Typography key="2" sx={{ color: 'var(--gray)' }}>
                Колопроктология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Проктология в Москве — госпитализация без ОМС и очередей. Звоните! 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Боль, кровотечение, обострение? Организуем срочную госпитализацию в отделение проктологии в Москве. Без ОМС, без бюрократии, с санитарным транспортом и круглосуточной поддержкой."
                />
                <meta
                    name="keywords"
                    content="колопроктолог москва платно, платная колопроктология, приём колопроктолога без омс, геморрой лечение, анальные трещины, колоноскопия москва, ректороманоскопия, боли в кишечнике, воспаление кишечника, полипы кишечника, диагностика кишечника, срочный приём колопроктолога, лечение геморроя платно, колопроктология без очереди, консультация колопроктолога"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Проктология в Москве — госпитализация без ОМС и очередей. Звоните! 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Боль, кровотечение, обострение? Организуем срочную госпитализацию в отделение проктологии в Москве. Без ОМС, без бюрократии, с санитарным транспортом и круглосуточной поддержкой." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/proctology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/diseases/proctology/proctology1.webp" />
                <meta property="og:image:alt" content="Медицинская Сервисная Компания. Колопроктология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Колопроктология в Москве." />
                <link rel="canonical" href="https://msk-group-hospital.ru/" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/proctology/proctology1.webp"
                    title="Колопроктология в Москве"
                    bgPosition="top"
                    fontShadowColor="var(--red)"
                />

                <BaseCallBlock />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Обращение к <Box component="span" sx={{ color: 'var(--red)' }}>колопроктологу</Box> необходимо
                        при появлении симптомов: боли в области ануса, крови при
                        дефекации, запоров, диареи, ощущения неполного опорожнения кишечника или зуда. Ранняя
                        диагностика позволяет эффективно лечить заболевания и предотвратить развитие осложнений.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Колопроктология</Box> использует как
                        консервативные методы, так и современные малотравматичные
                        хирургические технологии, направленные на быстрое восстановление и улучшение качества жизни
                        пациентов.
                    </BaseText>

                </Box>


                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Лечение колопроктологических заболеваний:" />

                    <List>
                        {proctologyList.map(({id, label}) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Для <Box component="span" sx={{ color: 'var(--red)' }}>проведения операций</Box> мы применяем
                        современные малоинвазивные методики, такие как лапароскопия
                        и эндоскопия. В операционных задействовано передовое оборудование: ультразвуковой скальпель,
                        многофункциональные лапароскопические комплексы, системы коагуляции кровеносных сосудов и другие
                        инновационные разработки. Хирурги, обладающие значительным опытом, проводят как <Box
                        component="span" sx={{ color: 'var(--red)' }}>плановые</Box>, так и <Box component="span"
                                                                                                 sx={{ color: 'var(--red)' }}>неотложные
                        колопроктологические операции</Box>. В терапии пациентов используются только проверенные и
                        сертифицированные в России лекарственные средства.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        В нашем медицинском центре предоставляется широкий спектр услуг, включающий амбулаторное лечение
                        и хирургические процедуры.
                    </BaseText>

                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={proctologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

