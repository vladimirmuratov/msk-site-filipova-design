import Head from 'next/head';
import { MainPageContent } from '@/components/content-page/MainPageContent';


export default function Home() {


    return (
        <>
            <Head>
                <title>Медицинская Сервисная Компания. Платная госпитализация в Москве без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Организуем госпитализацию в клиники Москвы без полиса ОМС и направлений. Перевод из больниц, помощь тяжёлым пациентам, санитарный транспорт, патронаж. Всё под ключ — без очередей и бюрократии."
                />
                <meta
                    name="keywords"
                    content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия, Медицинский туризм."
                />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москве без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Организуем госпитализацию в клиники Москвы без полиса ОМС и направлений. Перевод из больниц, помощь тяжёлым пациентам, санитарный транспорт, патронаж. Всё под ключ — без очередей и бюрократии." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москве без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Платная госпитализация в Москве без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, 24/7" />
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
