import { BaseFirstBlock } from '@/components/base/for-service-pages/BaseFirstBlock';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import StableSummaryBlock from '@/components/base/for-service-pages/stable-components/StableSummaryBlock';
import { servicePatronageDescriptionText, servicesPatronageInfo, stepsPatronage } from '@/config';
import Head from 'next/head';
import { BaseBanner } from '@/components/base/BaseBanner';

export default function Patronage() {
  return (
    <>
      <Head>
        <title>Медицинский патронаж 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Профессиональный медицинский патронаж для вас и ваших близких. Звоните 8 (499) 719-81-00. Мы работаем круглосуточно!"
        />
        <meta
          name="keywords"
          content="медицинский патронаж, патронаж москва, патронаж на дому, патронаж пожилых людей"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://msk-group-hospital.ru/" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BaseBanner
        imgPath="/images/services/patronage.webp"
        title="медицинский патронаж"
        fontColor="var(--red)"
        fontShadowColor="var(--white)"
      />
      <BaseFirstBlock
        title="медицинский патронаж пожилых"
        description={servicePatronageDescriptionText}
        services={servicesPatronageInfo}
      />
      <HowToBeHospitalized title="медицинский патронаж на дому" steps={stepsPatronage} />
      <StableSummaryBlock />
    </>
  );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
