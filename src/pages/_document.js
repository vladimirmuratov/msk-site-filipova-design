import {Html, Head, Main, NextScript} from 'next/document'
import {
    DocumentHeadTags,
    documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter'

export default function Document(props) {
    return (
        <Html lang="en">
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
                <DocumentHeadTags {...props} />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx) => {
    const finalProps = await documentGetInitialProps(ctx)
    return finalProps
}
