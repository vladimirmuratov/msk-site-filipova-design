import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { serviceEmergencyDescriptionText, servicesEmergencyInfo, stepsEmergency } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';

export default function Emergency() {
  return (
    <>
      <Head>
        <title>Экстренная платная госпитализация в Москве. Звоните: 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Экстренная платная госпитализация в Москве. Звоните 8 (499) 719-81-00 для быстрого решения ваших медицинских проблем, 24 часа в сутки."
        />
        <meta name="keywords" content="экстренная платная госпитализация" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
