import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';
import { servicesRegionDescriptionText } from '@/config/service-text';
import { stepsPlanHospitalization } from '@/config/steps';
import { servicesRegionInfo } from '@/config/services-info';
import { Link, Typography } from '@mui/material';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';

export default function Region() {
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
                Госпитализация из регионов
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>Госпитализация из регионов 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Госпитализация в столичный стационар. 20 клиник-партнеров. Федеральные, ведомственные, частные медицинские учреждения. Оперативно. Минимум документов. Финансовая прозрачность."
                />
                <meta name="keywords" content="Платная госпитализация из регионов" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Госпитализация из регионов 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Госпитализация из регионов. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/services/region" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>

            <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

            <BaseBanner
                imgPath="/images/services/region.webp"
                title="Платная госпитализация из регионов"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
            />
            <BaseFirstBlock
                title="госпитализация из регионов"
                description={servicesRegionDescriptionText}
                services={servicesRegionInfo}
            />
            <HowToBeHospitalized title="как вам надо действовать" steps={stepsPlanHospitalization} />
            <StableSummaryBlock />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
