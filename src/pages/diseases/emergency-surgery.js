import { Box, List, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { emergencySurgeryImages } from '@/config/images';
import Link from 'next/link';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { emergencySurgeryList } from '@/config/diseases/emergency-surgery';
import { BaseLi } from '@/components/base/BaseLi';

export default function EmergencySurgery() {
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
                Экстренная хирургия
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Колопроктология в Москве. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Диагностика и лечение заболеваний толстой и прямой кишки: геморрой, трещины, полипы, воспаления. Современные методы, индивидуальный подход, бережное восстановление здоровья. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="колопроктология в москве, институт колопроктологии в москве, центр колопроктологии в москве, больница колопроктологии в москве"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Колопроктология в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Диагностика и лечение заболеваний толстой и прямой кишки: геморрой, трещины, полипы, воспаления. Современные методы, индивидуальный подход, бережное восстановление здоровья. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/proctology" />
                <meta property="og:image"
                      content="https://msk-group-hospital.ru/images/diseases/proctology/proctology1.webp" />
                <meta property="og:image:alt" content="колопроктология в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Колопроктология в Москве. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/emergency-surgery//emergency-surgery1.webp"
                    title="Экстренная хирургия в Москве"
                    bgPosition="top"
                    // fontShadowColor="var(--red)"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Экстренная хирургия</Box> — это область
                        медицины, занимающаяся неотложным хирургическим вмешательством
                        при состояниях, угрожающих жизни пациента. Такие операции проводятся срочно, без длительной
                        подготовки, с целью спасения жизни, предотвращения осложнений или стабилизации состояния.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseSubTitle title="К экстренным случаям относятся:" />

                    <List>
                        {emergencySurgeryList.map(({ id, label }) => (
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
                        Особенность <Box component="span" sx={{ color: 'var(--red)' }}>экстренной хирургии</Box> —
                        высокая скорость реагирования. Решения принимаются быстро, а
                        команда врачей и медицинский персонал работает слаженно и оперативно, чтобы минимизировать риски
                        и спасти пациента.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        Не стоит откладывать обращение к врачам, даже если это поздно вечером или в выходной день,
                        поскольку затягивание с необходимой <Box component="span" sx={{ color: 'var(--red)' }}>медицинской
                        помощью</Box> может иметь серьезные последствия. В
                        критических случаях или при возникновении внезапных, тревожных признаков следует незамедлительно
                        вызывать <Box component="span" sx={{ color: 'var(--red)' }}>скорую помощь</Box>, чтобы опытные
                        медики смогли оценить ваше состояние и, если потребуется,
                        провести операцию.
                    </BaseText>

                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={emergencySurgeryImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

