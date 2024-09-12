import {Html, Head, Main, NextScript} from 'next/document'
import {
    DocumentHeadTags,
    documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter'

export default function Document(props) {
    return (
        <Html lang="en">
            <Head>
                <title>МСК-Групп</title>
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
