import { Open_Sans } from 'next/font/google';
import DescriptionBlock from '@/components/DescriptionBlock';
import PartnersBlock from '@/components/PartnersBlock';
import { directions, services } from '@/config';
import DirectionsBlock from '@/components/DirectionsBlock';
import ServiceBlock from '@/components/ServiceBlock';
import { useRouter } from 'next/router';
import Banner3 from '@/components/Banner3';

const openSans = Open_Sans({ subsets: ['latin', 'cyrillic'] });

export default function Home() {
    const router = useRouter();

    return (
        <main className={openSans.className}>
            <Banner3 />
            <DescriptionBlock />
            <PartnersBlock />
            <DirectionsBlock directions={directions} router={router} />
            <ServiceBlock services={services} />
        </main>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {}
    };
}
