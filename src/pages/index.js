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
                <title>Платная госпитализация 8(499)719-81-00 МСК</title>
                <meta name="description" content="Московская Сервисная Компания, специализирующаяся на экстренной помощи при госпитализации тяжело больных пациентов. Транспортировка в медицинские учреждения Москвы, Московской области. Организация госпитализации в стационарные отделения."/>
                <meta name="keywords" content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="canonical" href="https://msk-group-hospital.ru/" />
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
