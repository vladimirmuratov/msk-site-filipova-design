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
        <title>Экстренная платная госпитализация в Москве 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Экстренная платная госпитализация. Госпитализация в одну из 20-ти клниник-партнеров. Федеральные, ведомственные и частные клиники. Оперативно. Минимум документов. Финансовая прозрачность."
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

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
