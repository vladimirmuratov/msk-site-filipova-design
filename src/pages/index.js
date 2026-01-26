import Head from 'next/head';
import { MainPageContent } from '@/components/content-page/MainPageContent';


export default function Home() {


    return (
        <>
            <Head>
                <title>Платная госпитализация в Москве — помощь 24/7 без ОМС</title>
                <meta
                    name="description"
                    content="Организация платной, плановой и экстренной госпитализации в ведущие клиники Москвы без ОМС. Сопровождение 24/7."
                />
                <meta
                    name="keywords"
                    content="платная госпитализация, госпитализация москва, без омс"
                />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинские услуги. Стационар. Без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, круглосуточно" />
                <meta property="og:description"
                      content="Организуем госпитализацию в клиники Москвы без полиса ОМС и направлений. Медицинские услуги. Стационар. Перевод из больниц, помощь тяжёлым пациентам, санитарный транспорт, патронаж. Всё под ключ — без очередей и бюрократии." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинские услуги. Стационар. Без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, круглосуточно" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинские услуги. Стационар. Без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, круглосуточно" />
            </Head>
            <MainPageContent />
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
