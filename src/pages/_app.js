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
                            </Head>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </AppCacheProvider>
            )}
        </>
    );
}
