import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';
import { servicePatronageDescriptionText } from '@/config/service-text';
import { stepsPatronage } from '@/config/steps';
import { servicesPatronageInfo } from '@/config/services-info';
import { Link, Typography } from '@mui/material';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';

export default function Patronage() {
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
                Патронаж
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>Медицинский патронаж 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Профессиональный медицинский патронаж для вас и ваших близких. Звоните 8 (499) 719-81-00. Мы работаем круглосуточно!"
                />
                <meta
                    name="keywords"
                    content="медицинский патронаж, патронаж москва, патронаж на дому, патронаж пожилых людей"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинский патронаж 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Медицинский патронаж. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/services/patronage" />
                <meta property="og:image" content="https://msk-group-hospital.vercel.app/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />

                {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/services/patronage" />*/}
                <link rel="canonical" href="https://msk-group-hospital.vercel.app/" />
            </Head>

            <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

            <BaseBanner
                imgPath="/images/services/patronage.webp"
                title="медицинский патронаж"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
            />
            <BaseFirstBlock
                title="медицинский патронаж пожилых"
                description={servicePatronageDescriptionText}
                services={servicesPatronageInfo}
            />
            <HowToBeHospitalized title="медицинский патронаж на дому" steps={stepsPatronage} />
            <StableSummaryBlock />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
