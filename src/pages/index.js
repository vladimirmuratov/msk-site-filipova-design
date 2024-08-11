import Head from 'next/head'
import {Open_Sans} from 'next/font/google'
import {Banner} from '@/components/Banner'
import {DescriptionBlock} from '@/components/DescriptionBlock'
import {PartnersBlock} from '@/components/PartnersBlock'
import {directions, partners, services} from '@/config'
import {DirectionsBlock} from '@/components/DirectionsBlock'
import {ServiceBlock} from '@/components/ServiceBlock'

const openSans = Open_Sans({subsets: ['latin', 'cyrillic']})

export default function Home() {

    return (
        <>
            <Head>
                <title>МСК-Групп</title>
                <meta name="keywords" content="медицинские услуги, скорая помощь, госпитализация"/>
                <meta name="description" content="компания по оказанию экстренных медицинских услуг"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/icon.png"/>
            </Head>
            <main className={openSans.className}>
                <Banner/>
                <DescriptionBlock/>
                <PartnersBlock partners={partners}/>
                <DirectionsBlock directions={directions}/>
                <ServiceBlock services={services}/>
            </main>
        </>
    )
}
