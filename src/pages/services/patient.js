import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';
import React from 'react';
import { servicePatientDescriptionText } from '@/config/service-text';
import { stepsPlanHospitalization } from '@/config/steps';
import { servicesPatientInfo } from '@/config/services-info';
import { Link, Typography } from '@mui/material';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';

export default function Patient() {
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
                Лечение тяжелых больных
            </Typography>,
        ];
    };

    return (
      <>
        <Head>
          <title>Лечение и уход за тяжелобольными пациентами в Москве</title>
          <meta
            name="description"
            content="Полный спектр услуг для тяжелобольных пациентов в Москве: стационар, уход на дому (патронажная служба, сиделки). Контроль боли, симптоматическое лечение, психологическая поддержка. Индивидуальные программы."
          />
          <meta name="keywords" content="Лечение тяжелых пациентов" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta property="og:locale" content="ru_RU" />
          <meta
            property="og:title"
            content="Лечение тяжелых пациентов ОМС 8 (499) 719-81-00, 24/7"
          />
          <meta
            property="og:description"
            content="Лечение тяжелых пациентов. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://msk-group-hospital.vercel.app/services/patient"
          />
          <meta
            property="og:image"
            content="https://msk-group-hospital.vercel.app/images/banner-3.webp"
          />
          <meta
            property="og:image:alt"
            content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7"
          />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:site_name"
            content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7"
          />

          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/services/patient" />*/}
          <link rel="canonical" href="https://msk-group-hospital.vercel.app/" />
        </Head>

        <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

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
        <HowToBeHospitalized
          title="госпитализация тяжелобольных"
          steps={stepsPlanHospitalization}
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
