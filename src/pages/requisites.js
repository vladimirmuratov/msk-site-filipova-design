import { Box, Link, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { address, email, phone, phone2 } from '@/config/default-values';

export default function Requisites() {
    return (
        <>
            <Head>
                <title>Платная госпитализация 8 (499) 719-81-00, 24/7</title>
                <meta name="yandex-verification" content="7bb2122b277ff1f4" />
                <meta
                    name="description"
                    content="Платная госпитализация в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность."
                />
                <meta
                    name="keywords"
                    content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </Head>
            <Box
                component="section"
                sx={{
                    paddingY: { xs: '25px', sm: '50px' },
                    paddingX: { xs: '10px' },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}
            >
                <Typography sx={{ color: 'var(--blue)', fontWeight: 500 }}>ООО "МСК"</Typography>
                {/*<Typography>
                    <span style={{ color: 'var(--blue)', fontWeight: 500 }}>адрес:</span> {address}
                </Typography>*/}
                <Link href={`tel:${phone}`}>
                    <Typography
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline !important',
                            },
                        }}
                    >
                        <span style={{ color: 'var(--blue)', fontWeight: 500 }}>телефон: </span>
                        {phone}
                    </Typography>
                </Link>
                <Link href={`tel:${phone2}`}>
                    <Typography
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline !important',
                            },
                        }}
                    >
                        <span style={{ color: 'var(--blue)', fontWeight: 500, visibility: 'hidden' }}>телефон: </span>
                        {phone2}
                    </Typography>
                </Link>
                <Link href={`mailto:${email}`}>
                    <Typography
                        sx={{
                            '&:hover': {
                                textDecoration: 'underline !important',
                            },
                        }}
                    >
                        <span style={{ color: 'var(--blue)', fontWeight: 500 }}>email: </span>
                        {email}
                    </Typography>
                </Link>
                <Typography>
                    <span style={{ color: 'var(--blue)', fontWeight: 500 }}>ИНН:</span> 9725116009
                </Typography>
                <Typography>
                    <span style={{ color: 'var(--blue)', fontWeight: 500 }}>КПП:</span> 772501001
                </Typography>
                <Typography>
                    <span style={{ color: 'var(--blue)', fontWeight: 500 }}>ОГРН:</span> 1237700147343
                </Typography>
            </Box>
        </>
    );
}
