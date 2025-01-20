import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { serviceFederalDescriptionText, servicesFederalInfo, stepsFederal } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';

export default function Federal() {
  return (
    <>
      <Head>
        <title>Госпитализация в федеральные мед. учреждени. Звоните: 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Платная госпитализация в федеральные и ведомственные мед. учреждения: комфортные условия и высококвалифицированные специалисты. Звоните 24/7: 8 (499) 719-81-00."
        />
        <meta name="keywords" content="Платная госпитализация" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
