import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { servicesRegionDescriptionText, servicesRegionInfo, stepsRegion } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';

export default function Region() {
  return (
    <>
      <Head>
        <title>Платная госпитализация из регионов. Звоните: 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Платная госпитализация из регионов — получите быструю медицинскую помощь. Звоните: 8 (499) 719-81-00, мы работаем 24/7. Не откладывайте!"
        />
        <meta name="keywords" content="Платная госпитализация из регионов" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BaseBanner
        imgPath="/images/services/region.webp"
        title="Платная госпитализация из регионов"
        fontColor="var(--red)"
        fontShadowColor="var(--white)"
      />
      <BaseFirstBlock
        title="госпитализация из регионов"
        description={servicesRegionDescriptionText}
        services={servicesRegionInfo}
      />
      <HowToBeHospitalized title="как вам надо действовать" steps={stepsRegion} />
      <StableSummaryBlock />
    </>
  );
}
