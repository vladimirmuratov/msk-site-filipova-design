import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { serviceOmsDescriptionText, servicesOmsInfo, stepsOms } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';

export default function Oms() {
  return (
    <>
      <Head>
        <title>Госпитализация без полиса ОМС 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Платная госпитализация без полиса ОМС. Федеральные, ведомственные и частные клиники. Для иногородних. Минимум документов. Оперативно. Финансовая прозрачность."
        />
        <meta
          name="keywords"
          content="без полиса омс, полис омс без прописки, без полиса омс в поликлинику"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://msk-group-hospital.ru/" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BaseBanner
        imgPath="/images/services/oms.webp"
        title="Платная госпитализация без полиса ОМС"
        fontColor="var(--red)"
        fontShadowColor="var(--white)"
      />
      <BaseFirstBlock
        title="госпитализация без полиса омс"
        description={serviceOmsDescriptionText}
        services={servicesOmsInfo}
      />
      <HowToBeHospitalized title="как вам надо действовать" steps={stepsOms} />
      <StableSummaryBlock />
    </>
  );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
