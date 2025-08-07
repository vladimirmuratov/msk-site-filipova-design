import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { gerontologyImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseLi } from '@/components/base/BaseLi';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { gerontology1, gerontology2, gerontology3, gerontology4 } from '@/config/directions/gerontology';

export default function Gerontology() {
    const breadcrumbs = (router) => {
        return [
            <Link
                // href="/"
                component="button"
                onClick={() => router.push('/')}
                underline="hover"
                key="1"
                sx={{ color: 'var(--blue)!important', fontWeight: 400 }}
            >
                Главная
            </Link>,
            <Typography key="2" sx={{ color: 'var(--gray)' }}>
                Геронтология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Геронтология в Москве — помощь пожилым, госпитализация, патронаж. 8
                    (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Услуги геронтолога в Москве: лечение пожилых, госпитализация без ОМС, перевод пациентов, патронаж. Помогаем пожилым людям — быстро, профессионально, с заботой."
                />
                <meta
                    name="keywords"
                    content="геронтология, помощь пожилым, лечение пожилых людей, геронтолог в Москве, госпитализация пожилых, патронаж, уход за пожилыми, медицинская помощь престарелым, платная госпитализация Москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Геронтология в Москве — помощь пожилым, госпитализация, патронаж. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Услуги геронтолога в Москве: лечение пожилых, госпитализация без ОМС, перевод пациентов, патронаж. Помогаем пожилым людям — быстро, профессионально, с заботой." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/gerontology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/gerontology/1.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Геронтология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Геронтология в Москве." />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/gerontology/1.webp"
                            title="Госпитализация пожилых пациентов (геронтологическое отделение)" />

                <BaseCallBlock />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <span style={{
                            fontWeight: 500,
                            color: 'var(--red)'
                        }}>Геронтология </span> — это наука о старении и комплексной медицинской, психологической и
                        социальной помощи пожилым людям. С возрастом организм подвергается естественным изменениям,
                        которые могут сопровождаться хроническими заболеваниями, снижением активности, нарушением памяти
                        и другими проблемами. Задача геронтологии — не только продлить жизнь, но и обеспечить её
                        качество.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        <span style={{
                            fontWeight: 500,
                            color: 'var(--red)'
                        }}>Медицинская Сервисная Компания</span> предлагает профессиональные геронтологические услуги в
                        Москве —
                        от диагностики и лечения до сопровождения тяжелобольных пациентов. Мы работаем с людьми
                        преклонного возраста, нуждающимися в наблюдении, госпитализации, постоянном уходе и
                        реабилитации.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Какие задачи решает геронтология?" />

                    <List>
                        {gerontology1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Виды госпитализации пожилых людей" />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>
                            Госпитализация пожилых пациентов — значимый шаг в
                            предоставлении ему необходимой медицинской поддержки. В зависимости от самочувствия и
                            медицинских заключений, выделяют несколько разновидностей:
                        </BaseText>
                    </Box>

                    <List>
                        {gerontology4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Индивидуальный подход к каждому пожилому пациенту" />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ fontWeight: 500 }}>Пожилые люди требуют особенного внимания. Наши врачи и
                            координаторы:</BaseText>
                    </Box>

                    <List>
                        {gerontology2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Мы понимаем, насколько важно доверить здоровье пожилого человека в надёжные руки. Обращаясь в
                        нашу компанию, вы получаете не просто услугу, а комплексную заботу: от подбора врача до помощи в
                        быту.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Почему выбирают нас?" />

                    <List>
                        {gerontology3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                </Box>

                {/*<PartnersBlock title="платные клиники москвы урология" color="var(--red)" />*/}

                <BaseCallBlock />

                <BasePhotoGallery imagesList={gerontologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
