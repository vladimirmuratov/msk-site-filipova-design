import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { serviceFederalDescriptionText, servicesFederalInfo, stepsFederal } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';

export default function Federal() {
    return (
        <>
            <Head>
                <title>
                    Госпитализация в федеральные медицинские учреждения 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация в федеральные и ведомственные медицинские учреждения: комфортные условия и высококвалифицированные специалисты. Звоните: 8 (499) 719-81-00."
                />
                <meta name="keywords" content="Платная госпитализация" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Госпитализация в федеральные медицинские учреждения 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Госпитализация в федеральные медицинские учреждения. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/services/federal" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <BaseBanner
                imgPath="/images/services/federal.webp"
                title="Платная госпитализация в федеральные мед. учреждения"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
            />
            <BaseFirstBlock
                title="госпитализация в федеральные и ведомственные медицинские учреждения"
                description={serviceFederalDescriptionText}
                services={servicesFederalInfo}
            />
            <HowToBeHospitalized title="КАК ГОСПИТАЛИЗИРОВАТЬСЯ В НУЖНУЮ БОЛЬНИЦУ" steps={stepsFederal} />
            <StableSummaryBlock />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
