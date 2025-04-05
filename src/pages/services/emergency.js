import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { serviceEmergencyDescriptionText, servicesEmergencyInfo, stepsEmergency } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';

export default function Emergency() {
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
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Экстренная госпитализация в Москве 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Экстренная госпитализация в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/services/emergency" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
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
            <HowToBeHospitalized title="что делать при экстренной ситуации" steps={stepsEmergency} />
            <StableSummaryBlock />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
