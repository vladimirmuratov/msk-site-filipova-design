import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { BaseH2 } from '@/components/base/BaseH2';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { cardiologyImages } from '@/config/images';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { cardiologyList1, cardiologyList2, cardiologyList3, cardiologyList4 } from '@/config/directions/cardiology';
import { BaseLi } from '@/components/base/BaseLi';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Cardiology() {
    const breadcrumbs = (router) => {
        return [
            <Link
                // href="/"
                component="button"
                onClick={() => router.back()}
                underline="hover"
                key="1"
                sx={{ color: 'var(--blue)!important', fontWeight: 400 }}
            >
                Главная
            </Link>,
            <Typography key="2" sx={{ color: 'var(--gray)' }}>
                Кардиология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Кардиология платная госпитализация 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация в кардиологию. Индивидуальный подход и высококачественное обслуживание. Звоните 8 (499) 719-81-00 для консультации."
                />
                <meta
                    name="keywords"
                    content="кардиология платная госпитализация, платная больница кардиология, платный стационар кардиология, платная госпитализация в москве кардиология, платные палаты"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Кардиология платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная кардиология в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/cardiology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/directions/5.webp"
                    title="кардиология платная госпитализация"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        В <Box component="span" sx={{ color: 'var(--red)' }}>кардиологических отделениях</Box> наших
                        партнеров диагностика и терапия пациентов основывается на официальных рекомендациях Минздрава
                        России, клинических указаниях Российского кардиологического общества (РКО), Европейского
                        и Американских ассоциаций кардиологов, а также данных из доказательной медицины.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                    }}
                >

                    <BaseH2 title="Мы специализируемся на лечении следующих состояний:" />

                    <List>
                        {cardiologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="В нашем отделении осуществляется:" />

                    <br />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        1. Выбор и подготовка пациентов для оказания высокотехнологичной помощи при острых
                        коронарных синдромах, а также в рамках долгосрочного лечения ИБС.
                    </Typography>
                    <br />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        2. Применение диагностических методов:
                    </Typography>
                    <List>
                        {cardiologyList2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <br />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        3. Диагностические исследования:
                    </Typography>
                    <List>
                        {cardiologyList3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        4. Рентгенологические исследования органов грудной клетки.
                    </Typography>

                    <br />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        5. Система экстренного оповещения (сигнализации) в реанимационных палатах.
                    </Typography>

                    <br />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        6. Кислородотерапия и интенсивная терапия с круглосуточным мониторингом основных
                        показателей жизнедеятельности.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        // paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Палата реанимации оснащена для проведения полного комплекса мероприятий по
                        сердечно-легочной реанимации при клинической смерти.
                    </BaseText>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 18, sm: 20 },
                            fontWeight: 400,
                            display: 'inline',
                        }}
                    >
                        &nbsp;Платные палаты.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Дополнительные направления деятельности:" />

                    <List>
                        {cardiologyList4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <PartnersBlock title="платный стационар кардиология" color="var(--red)" />

                <BaseCallBlock />

                <BasePhotoGallery imagesList={cardiologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
