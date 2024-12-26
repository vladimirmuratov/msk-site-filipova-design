import '@/styles/globals.css';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';
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
            <Head>
                <title>Платная госпитализация 8(499)719-81-00 МСК</title>
                <meta name="yandex-verification" content="7bb2122b277ff1f4" />
                <meta name="description"
                      content="Московская Сервисная Компания, специализирующаяся на экстренной помощи при госпитализации тяжело больных пациентов. Транспортировка в медицинские учреждения Москвы, Московской области. Организация госпитализации в стационарные отделения." />
                <meta name="keywords"
                      content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://msk-group-hospital.ru/" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            {visible && (
                <AppCacheProvider {...pageProps}>
                    <ThemeProvider theme={theme}>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </AppCacheProvider>
            )}
        </>
    );
}
