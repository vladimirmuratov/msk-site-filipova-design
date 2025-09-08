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
                <title>Медицинская Сервисная Компания. Платная госпитализация в Москве. Медицинские услуги. Стационар. Без ОМС — быстро, официально, с сопровождением. 8 (499) 719-81-00, круглосуточно</title>
                <meta
                    name="description"
                    content="Организуем госпитализацию в клиники Москвы без полиса ОМС и направлений. Медицинские услуги. Стационар. Перевод из больниц, помощь тяжёлым пациентам, санитарный транспорт, патронаж. Всё под ключ — без очередей и бюрократии."
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
