import Head from 'next/head';
import { Open_Sans } from 'next/font/google';
import DescriptionBlock from '@/components/DescriptionBlock';
import PartnersBlock from '@/components/PartnersBlock';
import { directions, services } from '@/config';
import DirectionsBlock from '@/components/DirectionsBlock';
import ServiceBlock from '@/components/ServiceBlock';
import { useRouter } from 'next/router';
import Banner3 from '@/components/Banner3';

const openSans = Open_Sans({subsets: ['latin', 'cyrillic']})

export default function Home() {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>МСК-Групп</title>
                <meta name="description" content="Платная госпитализация в федеральные и ведомственные лечебные учреждения г.Москвы. Платная скорая помощь. Перевод пациента из одной больницы в другую. Экстренная платная госпитализация. Платная госпитализация без полиса ОМС. Платная госпитализация из регионов. Работа с тяжелыми пациентами. Патронажная служба"/>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <main className={openSans.className}>
                <Banner3/>
                <DescriptionBlock/>
                <PartnersBlock />
                <DirectionsBlock directions={directions} router={router}/>
                <ServiceBlock services={services}/>
            </main>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {}
    }
}
