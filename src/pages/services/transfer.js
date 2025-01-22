import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { servicesTransferInfo, serviceTransferDescriptionText, stepsTransfer } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';

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
        <link rel="canonical" href="https://msk-group-hospital.ru/" />
        <link rel="icon" href="/favicon.png" />
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
