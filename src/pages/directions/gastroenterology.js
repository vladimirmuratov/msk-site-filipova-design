import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { gastroenterologyImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import {
    gastroenterologyList1,
    gastroenterologyList2,
    gastroenterologyList3,
    gastroenterologyList4
} from '@/config/directions/gastroenterology';
import { BaseLi } from '@/components/base/BaseLi';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Gastroenterology() {
    const breadcrumbs = (router) => {
        return [
            <Link
                // href="/"
                component="button"
                onClick={() => router.back()}
                underline="hover"
                key="1"
                sx={{ color: 'var(--blue)!important', fontWeight: 400 }}
            >
                Главная
            </Link>,
            <Typography key="2" sx={{ color: 'var(--gray)' }}>
                Гастроэнтерология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Гастроэнтерология в Москве — диагностика и лечение ЖКТ. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платный приём гастроэнтеролога в Москве. Эффективное лечение гастрита, язвы, панкреатита, СРК и других заболеваний ЖКТ. Современная диагностика без очередей. Звоните 8 (499) 719-81-00."
                />
                <meta
                    name="keywords"
                    content="платная гастроэнтерология в москве, платная больница гастроэнтерология,  платный стационар гастроэнтерология,  платная госпитализация в москве гастроэнтерология, платные палаты в больнице, гастроэнтеролог москва платно, платная гастроэнтерология, консультация гастроэнтеролога, прием гастроэнтеролога без омс, гастроэнтеролог без очереди, хороший гастроэнтеролог москва, частная гастроэнтерология"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Медицинская Сервисная Компания. Гастроэнтерология в Москве — диагностика и лечение ЖКТ. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платный приём гастроэнтеролога в Москве. Эффективное лечение гастрита, язвы, панкреатита, СРК и других заболеваний ЖКТ. Современная диагностика без очередей. Звоните 8 (499) 719-81-00." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/gastroenterology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Гастроэнтерология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Гастроэнтерология в Москве — диагностика и лечение ЖКТ." />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/directions/7.webp"
                    title="гастроэнтерология в москве"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        У наших партнеров сформирован значительный опыт лечения и диагностирования разнообразных
                        желудочно-кишечных заболеваний, включая инфекции (особенно хеликобактерные), патологии
                        печени желчевыводящих путей всех этиологий, поражения поджелудночной железы и кишечника.
                    </BaseText>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 18, sm: 20 },
                            fontWeight: 400,
                            display: 'inline',
                        }}
                    >
                        &nbsp;Платная госпитализация в москве гастроэнтерология.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="В сферу диагностических исследований входят:" />

                    <List>
                        {gastroenterologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Лечебные стратегии включают:" />

                    <List>
                        {gastroenterologyList2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Для пациентов с метаболическими нарушениями (ожирение, диабет, дислипопротеинемия) разработан комплексный метод:" />

                    <List>
                        {gastroenterologyList3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Коллектив состоит из высококлассных гастроэнтерологов, терапевтов с внимательным
                        подходом к пациентам, создающим атмосферу заботы и профессионализма по стандартам лучших
                        медицинских учреждений страны.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Размещение предусматривает одноместные и двухместные палаты:" />

                    <List>
                        {gastroenterologyList4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <PartnersBlock title="платная больница гастроэнтерология" color="var(--red)" />

                <BaseCallBlock />

                <BasePhotoGallery imagesList={gastroenterologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
