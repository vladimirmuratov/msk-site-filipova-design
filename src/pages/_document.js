import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v14-pagesRouter';
import React from 'react';

export default function Document(props) {
    return (
        <Html lang="en" prefix="og: https://ogp.me/ns#">
            <Head>
                <DocumentHeadTags {...props} />
                <meta name="yandex-verification" content="7bb2122b277ff1f4" />
                <meta name="google-site-verification" content="esv7d4q6D0-Wq7NhLFwyhvy2OEOwaOGF8lVqUdghggo" />
                <title>Медицинская Сервисная Компания. Платная госпитализация. Клиники управления делами Президента РФ. 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Платная госпитализация в Москве. 15 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность. Медицинский туризм."
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}

Document.getInitialProps = async (ctx) => {
    const finalProps = await documentGetInitialProps(ctx);
    return finalProps;
};
