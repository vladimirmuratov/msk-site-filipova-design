import { Box, List, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { adenomaImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { BaseLi } from '@/components/base/BaseLi';
import { adenoma1, adenoma2, adenoma3, adenoma4, adenoma5 } from '@/config/diseases/adenoma';

export default function Adenoma() {
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
                Лечение аденомы простаты
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Аденома простаты — диагностика и эффективное лечение в Москве. 8
                    (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Аденома простаты: симптомы, методы диагностики и современное лечение. Запишитесь на приём к опытному урологу в Москве. Консультации, УЗИ, ПСА, малоинвазивные методы, ТУР. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="аденома простаты, лечение аденомы простаты, симптомы аденомы, диагностика простаты, уролог Москва, ТУР простаты, ПСА анализ, лазерное лечение аденомы, гиперплазия предстательной железы, мужское здоровье"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Аденома простаты — диагностика и эффективное лечение в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Аденома простаты: симптомы, методы диагностики и современное лечение. Запишитесь на приём к опытному урологу в Москве. Консультации, УЗИ, ПСА, малоинвазивные методы, ТУР. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/copd" />
                <meta property="og:image"
                      content="https://msk-group-hospital.ru/images/diseases/copd/copd1.webp" />
                <meta property="og:image:alt"
                      content="Аденома простаты — диагностика и эффективное лечение в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Аденома простаты — диагностика и эффективное лечение в Москве. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/adenoma/adenoma2.webp"
                    title="лечение аденомы простаты"
                    bgPosition="top"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Аденома простаты (доброкачественная
                            гиперплазия предстательной железы)</Box> — одно из самых распространённых урологических
                        заболеваний у мужчин старше 45 лет. Заболевание характеризуется разрастанием ткани простаты, что
                        приводит к сдавлению мочеиспускательного канала и нарушению оттока мочи.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="причины возникновения аденомы простаты:" />

                    <List>
                        {adenoma1.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Основные симптомы:" />

                    <List>
                        {adenoma2.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>При появлении первых симптомов</Box> важно
                        как можно скорее обратиться к врачу-урологу — своевременная
                        диагностика позволяет избежать осложнений и перехода заболевания в запущенную стадию.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Диагностика аденомы простаты:" />

                    <BaseText style={{ display: 'block', marginY: '10px' }}>
                        Мы организуем комплексное обследование, включающее:
                    </BaseText>

                    <List>
                        {adenoma3.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Лечение аденомы простаты" />

                    <BaseText style={{ display: 'block', marginY: '10px' }}>
                        Метод лечения подбирается индивидуально и зависит от стадии заболевания:
                    </BaseText>

                    <List>
                        {adenoma4.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Почему выбирают нас" />

                    <List>
                        {adenoma5.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Запишитесь на приём к урологу уже сегодня — избавьтесь от симптомов аденомы простаты и верните
                        себе качество жизни.
                    </BaseText>
                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={adenomaImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

