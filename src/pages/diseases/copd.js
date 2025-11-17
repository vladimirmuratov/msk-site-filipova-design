import { Box, List, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { copdImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { BaseLi } from '@/components/base/BaseLi';
import { copd1, copd2 } from '@/config/diseases/copd';

export default function Copd() {
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
                ХОБЛ
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. ХОБЛ лечение. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Эффективное лечение ХОБЛ – современный подход к терапии хронической обструктивной болезни лёгких. Диагностика, индивидуальные схемы лечения, поддержка дыхательной функции и улучшение качества жизни пациентов. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="ХОБЛ лечение, лечение ХОБЛ, хроническая обструктивная болезнь лёгких, симптомы ХОБЛ, терапия ХОБЛ, диагностика ХОБЛ, лечение легких, дыхательная недостаточность, бронхиальная обструкция, реабилитация при ХОБЛ, ингаляции при ХОБЛ, медикаментозное лечение ХОБЛ, как лечить ХОБЛ, современное лечение ХОБЛ, ХОБЛ у пожилых, помощь при ХОБЛ, клиника ХОБЛ, профилактика ХОБЛ"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. ХОБЛ лечение. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Эффективное лечение ХОБЛ – современный подход к терапии хронической обструктивной болезни лёгких. Диагностика, индивидуальные схемы лечения, поддержка дыхательной функции и улучшение качества жизни пациентов. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/copd" />
                <meta property="og:image"
                      content="https://msk-group-hospital.ru/images/diseases/copd/copd1.webp" />
                <meta property="og:image:alt" content="ХОБЛ лечение. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. ХОБЛ лечение. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/copd/copd1.webp"
                    title="хобл лечение"
                    // bgPosition="top"
                />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>ХОБЛ (хроническая обструктивная болезнь
                            лёгких)</Box> — это прогрессирующее заболевание дыхательной
                        системы, сопровождающееся затруднением дыхания, кашлем, одышкой и ухудшением качества жизни. Без
                        своевременного лечения ХОБЛ может привести к тяжёлой дыхательной недостаточности и инвалидности.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Основной причиной</Box> развития ХОБЛ
                        является длительное воздействие вредных частиц и газов — чаще
                        всего табачного дыма. Также в группе риска находятся люди, работающие на вредных производствах
                        или живущие в условиях загрязнённого воздуха.
                    </BaseText>
                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Основные симптомы:" />

                    <List>
                        {copd1.map(({ id, label }) => (
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
                        Хроническая обструктивная болезнь легких (ХОБЛ) развивается медленно, однако состояние со
                        временем постоянно ухудшается. <Box component="span" sx={{ color: 'var(--red)' }}>Своевременное
                        начало лечения</Box> существенно увеличивает вероятность
                        замедления прогресса болезни и сохранения обычного качества жизни. Поэтому, при появлении первых
                        тревожных симптомов, необходимо как можно быстрее обратиться за медицинской помощью.
                    </BaseText>
                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Подход к лечению:" />

                    <BaseText style={{ display: 'block', marginY: '10px' }}>
                        Наш центр предлагает комплексный подход к лечению ХОБЛ, включающий:
                    </BaseText>

                    <List>
                        {copd2.map(({ id, label }) => (
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
                        Не игнорируйте тревожные симптомы — обратитесь к специалисту и начните лечение вовремя.<br />
                        Не откладывайте лечение ХОБЛ — сохраните качество своей жизни.<br />
                        Это шанс сохранить лёгкие здоровыми!
                    </BaseText>
                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={copdImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

