import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { servicesPlanHospitalInfo, stepsPlanHospitalization } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';

export default function PlanHospital() {
    return (
        <>
            <Head>
                <title>Платная плановая госпитализация 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Федеральные, ведомственные и частные медучреждения. 20 клиник-партнеров. Оперативно. Минимум документов. Финансовая прозрачность."
                />
                <meta
                    name="keywords"
                    content="платная госпитализация, госпитализация в стационар платно, госпитализация с платной скорой, госпитализация в платную клинику, нужна платная госпитализация"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Платная плановая госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная плановая госпитализация. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/services/plan-hospital" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <BaseBanner
                imgPath="/images/services/plan-hospital.webp"
                title="платная плановая госпитализация"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
            />
            <BaseFirstBlock
                services={servicesPlanHospitalInfo}
                title="ПЛАТНАЯ ГОСПИТАЛИЗАЦИЯ В МОСКВЕ"
                description="Организация платной госпитализации в стационар ведущих клиник Москвы в экстренном и плановом порядке"
            />
            <HowToBeHospitalized
                steps={stepsPlanHospitalization}
                title="КАК ГОСПИТАЛИЗИРОВАТЬСЯ В НУЖНУЮ БОЛЬНИЦУ"
            />
            <StableSummaryBlock />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
