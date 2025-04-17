import { Box, List, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { pneumoniaImages } from '@/config/images';
import Link from 'next/link';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { BaseLi } from '@/components/base/BaseLi';
import { pneumonia1, pneumonia2, pneumonia3 } from '@/config/diseases/pneumonia';

export default function Pneumonia() {
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
                Пневмония
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Пневмония: симптомы и лечение. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Пневмония: основные симптомы, методы диагностики и эффективное лечение. Как распознать воспаление лёгких и когда обращаться к врачу. Современные подходы к терапии. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="пневмония, воспаление лёгких, симптомы пневмонии, лечение пневмонии, диагностика пневмонии, признаки воспаления лёгких, температура при пневмонии, кашель при пневмонии, пневмония у взрослых, как лечить пневмонию, осложнения пневмонии, вирусная пневмония, бактериальная пневмония"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Пневмония: симптомы и лечение. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Пневмония: основные симптомы, методы диагностики и эффективное лечение. Как распознать воспаление лёгких и когда обращаться к врачу. Современные подходы к терапии. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/pneumonia" />
                <meta property="og:image"
                      content="https://msk-group-hospital.ru/images/diseases/pneumonia/pneumonia1.webp" />
                <meta property="og:image:alt" content="лечение пневмонии. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Пневмония: симптомы и лечение. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/pneumonia/pneumonia1.webp"
                    title="лечение пневмонии"
                    // bgPosition="top"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Пневмония (воспаление лёгких)</Box> — это
                        опасное инфекционное заболевание, при котором воспаляется
                        лёгочная ткань. Болезнь может развиваться как стремительно, так и постепенно, часто маскируясь
                        под обычную простуду. Поэтому важно распознать симптомы пневмонии на ранней стадии и
                        своевременно обратиться к врачу.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseSubTitle title="Симптомы пневмонии у взрослых и детей:" />

                    <List>
                        {pneumonia1.map(({ id, label }) => (
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
                    <BaseText style={{ display: 'block' }}>
                        Иногда может развиться <Box component="span" sx={{ color: 'var(--red)' }}>пневмония без
                        температуры</Box>, особенно у пожилых или ослабленных пациентов.
                        Это делает диагностику ещё более важной.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseSubTitle title="Диагностика пневмонии:" />

                    <BaseText style={{ display: 'block', marginY: '10px' }}>
                        Для постановки точного диагноза в нашей клинике проводится комплексное обследование:
                    </BaseText>

                    <List>
                        {pneumonia2.map(({ id, label }) => (
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

                    <BaseSubTitle title="Лечение пневмонии:" />

                    <BaseText style={{ display: 'block', marginY: '10px' }}>
                        Мы предлагаем эффективное лечение пневмонии с индивидуальным подходом к каждому пациенту. В
                        зависимости от тяжести и причины (вирусная, бактериальная форма) применяются:
                    </BaseText>

                    <List>
                        {pneumonia3.map(({ id, label }) => (
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
                        <Box component="span" sx={{ color: 'var(--red)' }}>Самолечение при воспалении лёгких</Box> может
                        быть опасным и привести к осложнениям: плевриту,
                        абсцессу лёгких, дыхательной недостаточности. Мы настоятельно рекомендуем не откладывать визит к
                        специалисту.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Запишитесь на консультацию
                            пульмонолога</Box> — начните лечение пневмонии вовремя и восстановите
                        здоровье без осложнений!
                    </BaseText>
                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={pneumoniaImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

