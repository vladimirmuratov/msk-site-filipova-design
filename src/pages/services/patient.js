import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { servicePatientDescriptionText, servicesPatientInfo, stepsPatient } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';

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
        <link rel="canonical" href="https://msk-group-hospital.ru/" />
        <link rel="icon" href="/favicon.png" />
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
      <HowToBeHospitalized title="госпитализация тяжелобольных" steps={stepsPatient} />
      <StableSummaryBlock />
    </>
  );
}
