import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';
import { serviceOmsDescriptionText } from '@/config/service-text';
import { stepsPlanHospitalization } from '@/config/steps';
import { servicesOmsInfo } from '@/config/services-info';

export default function Oms() {
    return (
        <>
            <Head>
                <title>Госпитализация без полиса ОМС 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Платная госпитализация без полиса ОМС. Федеральные, ведомственные и частные клиники. Для иногородних. Минимум документов. Оперативно. Финансовая прозрачность."
                />
                <meta
                    name="keywords"
                    content="без полиса омс, полис омс без прописки, без полиса омс в поликлинику"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Госпитализация без полиса ОМС 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Госпитализация без полиса ОМС. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/services/oms" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <BaseBanner
                imgPath="/images/services/oms.webp"
                title="Платная госпитализация без полиса ОМС"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
            />
            <BaseFirstBlock
                title="госпитализация без полиса омс"
                description={serviceOmsDescriptionText}
                services={servicesOmsInfo}
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
