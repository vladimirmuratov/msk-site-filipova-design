import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';
import { serviceEmergencyDescriptionText } from '@/config/service-text';
import { stepsPlanHospitalization } from '@/config/steps';
import { servicesEmergencyInfo } from '@/config/services-info';
import { Link, Typography } from '@mui/material';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';

export default function Emergency() {
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
                Экстренная госпитализация
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>Экстренная госпитализация в Москве 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Экстренная госпитализация в Москве. Госпитализация в одну из 20-ти клниник-партнеров. Федеральные, ведомственные и частные клиники. Оперативно. Минимум документов. Финансовая прозрачность."
                />
                <meta name="keywords" content="Экстренная госпитализация в Москве" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Экстренная госпитализация в Москве 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Экстренная госпитализация в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/services/emergency" />
                <meta property="og:image" content="https://msk-group-hospital.vercel.app/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />

                {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/services/emergency" />*/}
                <link rel="canonical" href="https://msk-group-hospital.vercel.app/" />
            </Head>

            <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

            <BaseBanner
                imgPath="/images/services/emergency.webp"
                title="платная экстренная госпитализация"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
            />
            <BaseFirstBlock
                services={servicesEmergencyInfo}
                title="экстренная платная госпитализация в москве"
                description={serviceEmergencyDescriptionText}
            />
            <HowToBeHospitalized title="что делать при экстренной ситуации" steps={stepsPlanHospitalization} />
            <StableSummaryBlock />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
