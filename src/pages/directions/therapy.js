import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';
import { therapyImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import {
    therapyList1,
    therapyList10,
    therapyList11,
    therapyList2,
    therapyList3,
    therapyList4,
    therapyList5,
    therapyList6,
    therapyList7,
    therapyList8,
    therapyList9
} from '@/config/directions/therapy';
import { BaseLi } from '@/components/base/BaseLi';

export default function Therapy() {
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
                Терапия
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>Госпитализация в терапию 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Платная госпитализация в терапию 24/7. Комфортные палаты и профессиональная помощь. Свяжитесь с нами по номеру 8 (499) 719-81-00."
                />
                <meta
                    name="keywords"
                    content="больница терапия платная палата, платный стационар терапия, госпитализация в терапию"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Госпитализация в терапию 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Госпитализация в терапию. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/therapy" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/directions/8.webp" title="госпитализация в терапию" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Терапевтическое отделение</Box> в стационарах
                        клиник партнеров занимает особое место, где сосредоточена высокопрофессиональная медицинская
                        поддержка
                        для пациентов с терапевтическими, кардиологическими, ревматологическими и эндокринными
                        проблемами. Врачи отделения — сертифицированные специалисты в области «Терапии»,
                        «Кардиологии», «Ревматологии» и «Эндокринологии». Их глубокие знания и богатый
                        клинический опыт позволяют решать самые сложные медицинские задачи, обеспечивая широкий
                        спектр помощи.
                    </BaseText>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 20, sm: 22 },
                            fontWeight: 400,
                            display: 'inline',
                        }}
                    >
                        &nbsp;Больница терапия платная палата.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '15px', lg: 0 },
                    }}
                >

                    <BaseSubTitle title="Профили специализации:" />

                    <br />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Сложная сердечная недостаточность:
                    </Typography>
                    <List>
                        {therapyList1.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Резистентная артериальная гипертензия:
                    </Typography>
                    <List>
                        {therapyList2.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Нарушения ритма сердца, включая фибрилляцию предсердий:
                    </Typography>
                    <List>
                        {therapyList3.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Ишемия и коронарные заболевания:
                    </Typography>
                    <List>
                        {therapyList4.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        className="pb-16"
                        sx={{
                            fontSize: { xs: 24, sm: 32 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        Стабилизация состояния тяжелых пациентов с множественными хроническими патологиями.
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Анемии различного происхождения:
                    </Typography>
                    <List>
                        {therapyList5.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Ревматические заболевания:
                    </Typography>
                    <List>
                        {therapyList6.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Гипертоническая болезнь:
                    </Typography>
                    <List>
                        {therapyList7.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        className="pb-16"
                        sx={{
                            fontSize: { xs: 24, sm: 32 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        Подготовка к хирургическому вмешательству для тяжелых больных.
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Заболевания легких (включая интерстициальные и специфические формы):
                    </Typography>
                    <List>
                        {therapyList8.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        className="pb-16"
                        sx={{
                            fontSize: { xs: 24, sm: 32 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        Реабилитация после COVID-19, инфарктов, инсультов и тромбоэмболий.
                    </Typography>

                    <Typography
                        variant="h3"
                        className="pb-16"
                        sx={{
                            fontSize: { xs: 24, sm: 32 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        Особенности лечения у пациентов с тяжелым морбидным ожирением.
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Сахарный диабет:
                    </Typography>
                    <List>
                        {therapyList9.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Ранняя диагностика сердечно-сосудистых и онкологических заболеваний:
                    </Typography>
                    <List>
                        {therapyList10.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                    <Typography
                        variant="h3"
                        className="pb-16"
                        sx={{
                            fontSize: { xs: 24, sm: 32 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        Хроническая почечная недостаточность у полиморбидных пациентов.
                    </Typography>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 30 },
                            fontWeight: 200,
                            color: 'var(--red)',
                        }}
                    >
                        Другие внутренние болезни:
                    </Typography>
                    <List>
                        {therapyList11.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                    </List>

                </Box>

                <PartnersBlock title="платный стационар терапия" color="var(--red)" />

                <BasePhotoGallery imagesList={therapyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
