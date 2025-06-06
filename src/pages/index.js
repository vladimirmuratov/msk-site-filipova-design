import { Open_Sans } from 'next/font/google';
import DescriptionBlock from '@/components/DescriptionBlock';
import PartnersBlock from '@/components/PartnersBlock';
import DirectionsBlock from '@/components/DirectionsBlock';
import ServiceBlock from '@/components/ServiceBlock';
import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Loader } from '@/components/loader/Loader';
import { VideoBanner } from '@/components/VideoBanner';
import { ReviewsBlock } from '@/components/ReviewsBlock';
import { reviews } from '@/config/reviews';
import { Banner4 } from '@/components/Banner/Banner4';
import { HowToBeHospitalized } from '@/components/for-service-pages/planned-hospital/HowToBeHospitalized';
import { WhyWeBlock } from '@/components/WhyWeBlock';
import { stepsPlanHospitalization } from '@/config/steps';
import { directionsList } from '@/config/directions/directions-list';
import { services } from '@/config/services';
import { useScrollPosition } from '@/lib/useScrollPosition ';
import { DiseasesBlock } from '@/components/DiseasesBlock';
import { diseasesList } from '@/config/diseases/diseases-list';

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

    useScrollPosition('Home');

    return (
        <>
            <Head>
                <title>Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7</title>
                <meta name="yandex-verification" content="7bb2122b277ff1f4" />
                <meta
                    name="description"
                    content="Платная госпитализация в Москве. 15 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность."
                />
                <meta
                    name="keywords"
                    content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            {typeof isMobile === 'boolean' ? (
                <main className={openSans.className}>
                    {isMobile ? <Banner4 /> : <VideoBanner />}
                    <DescriptionBlock />
                    <WhyWeBlock />
                    <HowToBeHospitalized
                        steps={stepsPlanHospitalization}
                        title="как это работает"
                    />
                    <PartnersBlock />
                    <DirectionsBlock directions={directionsList} router={router} />
                    <ServiceBlock services={services} />
                    <DiseasesBlock diseases={diseasesList}/>
                    <ReviewsBlock reviews={reviews} isMobile={isMobile} />
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
