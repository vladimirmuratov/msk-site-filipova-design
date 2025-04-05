import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { servicesTransferInfo, serviceTransferDescriptionText, stepsTransfer } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';

export default function Transfer() {
    return (
        <>
            <Head>
                <title>Перевод пациента в другую больницу 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Перевод пациента в федеральный, ведомственный, частный стационар. Минимум документов. Оперативно."
                />
                <meta
                    name="keywords"
                    content="перевод в другую больницу, перевод больного в другую больницу"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Перевод пациента в другую больницу 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Перевод пациента в другую больницу. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/services/transfer" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <BaseBanner
                imgPath="/images/services/transfer.webp"
                title="перевод пациента в другую больницу"
                fontColor="var(--red)"
                fontShadowColor="var(--white)"
                bgPosition=""
            />
            <BaseFirstBlock
                services={servicesTransferInfo}
                title="перевод из одной больницы в другую"
                description={serviceTransferDescriptionText}
            />
            <HowToBeHospitalized
                steps={stepsTransfer}
                title="как осуществить перевод в другую больницу"
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
