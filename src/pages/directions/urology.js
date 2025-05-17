import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { urologyImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { urologyList1, urologyList2 } from '@/config/directions/urology';
import { BaseLi } from '@/components/base/BaseLi';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Urology() {
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
                Урология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Госпитализация урология Москва 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Госпитализация по урологии в Москве — платные услуги, квалифицированные специалисты. Звоните 8 (499) 719-81-00 для получения дополнительной информации!"
                />
                <meta
                    name="keywords"
                    content="госпитализация урология москва, платные клиники москвы урология, платная госпитализация урология"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Госпитализация урология Москва 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Госпитализация урология Москва. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/urology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/directions/4.webp" title="госпитализация урология москва" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        В клиниках наших партнеров осуществляется полный цикл урологических исследований и
                        терапии, соответствующий современным стандартам. Обратитесь к нам – мы подберём
                        идеальную для вас медицинскую структуру.
                    </BaseText>
                    <BaseText style={{ display: 'box' }}>
                        В условиях стационаров пациенты размещаются в комфортабельных одно- или двухместных
                        палатах с акцентом на непрерывность лечения между амбулаторной и госпитальной помощью.
                        Благодаря внедрению инновационных методик, продолжительность пребывания сокращается до
                        оптимального периода при сохранении высокого качества медицинского обслуживания.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="В наличии оснащённая по последнему слову науки лаборатория с возможностью проведения:" />

                    <List>
                        {urologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Применяется передовое оборудование для УЗИ с допплерографией, позволяющее выявлять
                        мельчайшие патологии и своевременно определять заболевания. Предлагаются все виды
                        рентгеновских исследований: классические, КТ (компьютерная томография) и МРТ
                        (магнитно-резонансная томография).
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                    }}
                >

                    <BaseH2
                        title="В арсенале урологического отделения богатый опыт применения консервативных методов в лечении широкого спектра заболеваний:" />

                    <List>
                        {urologyList2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        Также проводятся операции по исправлению врождённых аномалий мочеполовой системы:
                        стриктуры уретры, лоханочно-мочеточниковых сегментов, гипоспадии.
                    </BaseText>
                    <BaseText style={{ display: 'box' }}>
                        Для усиления терапевтического эффекта используются физиотерапевтические процедуры и при
                        необходимости – санаторно-курортное лечение.
                    </BaseText>
                </Box>

                <PartnersBlock title="платные клиники москвы урология" color="var(--red)" />

                <BaseCallBlock />

                <BasePhotoGallery imagesList={urologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
