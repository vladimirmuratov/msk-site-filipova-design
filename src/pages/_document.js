import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v14-pagesRouter';
import React from 'react';

export default function Document(props) {
    return (
        <Html lang="en" prefix="og: https://ogp.me/ns#">
            <Head>
                <DocumentHeadTags {...props} />
                {/*<meta name="yandex-verification" content="7bb2122b277ff1f4" />*/} {/*msk-group-hospital.ru*/}
                <meta name="yandex-verification" content="4cc32b794bc40356" /> {/*msk-group-hospital.vercel.app*/}
                <meta name="google-site-verification" content="esv7d4q6D0-Wq7NhLFwyhvy2OEOwaOGF8lVqUdghggo" />
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
