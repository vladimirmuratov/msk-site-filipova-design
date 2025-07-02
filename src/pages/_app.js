import '@/styles/globals.css';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import { Layout } from '@/components/Layout';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 0);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {visible && (
                <AppCacheProvider {...pageProps}>
                    <ThemeProvider theme={theme}>
                        <Layout>
                            <Head>
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

                                <title>Медицинская Сервисная Компания. Платная госпитализация. Медицинский туризм. 8 (499) 719-81-00, 24/7</title>
                                <meta
                                    name="description"
                                    content="Платная госпитализация в Москве. 15 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность. Медицинский туризм."
                                />
                                <meta
                                    name="keywords"
                                    content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия, Медицинский туризм."
                                />
                                <meta property="og:locale" content="ru_RU" />
                                <meta property="og:title" content="Платная госпитализация. Медицинский туризм. 8 (499) 719-81-00, 24/7" />
                                <meta property="og:description" content="Платная госпитализация в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность. Медицинский туризм." />
                                <meta property="og:type" content="website" />
                                <meta property="og:url" content="https://msk-group-hospital.ru/" />
                                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                                <meta property="og:image:alt" content="Медицинская Сервисная Компания. Платная госпитализация. Медицинский туризм. 8 (499) 719-81-00, 24/7" />
                                <meta property="og:image:type" content="image/webp" />
                                <meta property="og:site_name" content="Медицинская Сервисная Компания. Платная госпитализация. Медицинский туризм. 8 (499) 719-81-00, 24/7" />
                            </Head>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </AppCacheProvider>
            )}
        </>
    );
}
