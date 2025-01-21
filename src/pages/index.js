import { Open_Sans } from 'next/font/google';
import DescriptionBlock from '@/components/DescriptionBlock';
import PartnersBlock from '@/components/PartnersBlock';
import { directions, services } from '@/config';
import DirectionsBlock from '@/components/DirectionsBlock';
import ServiceBlock from '@/components/ServiceBlock';
import { useRouter } from 'next/router';
import { Banner2 } from '@/components/Banner2';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Loader } from '@/components/loader/Loader';
import { VideoBanner } from '@/components/VideoBanner';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
  const router = useRouter();
  const [isMobile, setMobile] = useState(undefined);

  useEffect(() => {
    const os = navigator.userAgentData.platform;

    if (os === 'Android' || os === 'iOS') {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Платная госпитализация 8 (499) 719-81-00, 24/7</title>
        <meta name="yandex-verification" content="7bb2122b277ff1f4" />
        <meta
          name="description"
          content="Платная госпитализация в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность."
        />
        <meta
          name="keywords"
          content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://msk-group-hospital.ru/" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {typeof isMobile === 'boolean' ? (
        <main className={openSans.className}>
          {isMobile ? <Banner2 /> : <VideoBanner />}
          <DescriptionBlock />
          <PartnersBlock />
          <DirectionsBlock directions={directions} router={router} />
          <ServiceBlock services={services} />
        </main>
      ) : (
        <Loader />
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
