import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { servicePatientDescriptionText, servicesPatientInfo, stepsPlanHospitalization } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';

export default function Patient() {
    return (
        <>
            <Head>
                <title>Лечение тяжелых пациентов 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Лечение тяжелобольных пациентов. Если вам отказали в госпитализации - позвоните нам."
                />
                <meta name="keywords" content="Лечение тяжелых пациентов" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Лечение тяжелых пациентов ОМС 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Лечение тяжелых пациентов. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/services/patient" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <BaseBanner
                imgPath="/images/services/patient.webp"
                title="лечение тяжелых пациентов"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
            />
            <BaseFirstBlock
                title="лечение тяжелобольных пациентов"
                description={servicePatientDescriptionText}
                services={servicesPatientInfo}
            />
            <HowToBeHospitalized title="госпитализация тяжелобольных" steps={stepsPlanHospitalization} />
            <StableSummaryBlock />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
