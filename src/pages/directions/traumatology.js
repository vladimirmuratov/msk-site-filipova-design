import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import React from 'react';
import { BaseText } from '@/components/base/BaseText';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';
import { traumatologyImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { traumatologyList1 } from '@/config/directions/traumatology';
import { BaseLi } from '@/components/base/BaseLi';

export default function Traumatology() {
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
                Травматология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>Платная травматология Москва 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Платная травматология в Москве, круглосуточные услуги. Комфортабельные палаты и квалифицированные специалисты. Звоните 8 (499) 719-81-00"
                />
                <meta
                    name="keywords"
                    content="травматология платная палата, больница травматология платно, платная травматология москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Платная травматология Москва 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная травматология Москва. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/traumatology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/directions/2.webp" title="платная травматология москва" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <span
                            style={{ color: 'var(--red)' }}>Ортопедические и травматологические подразделения</span> наших
                        партнеров обладают глубоким опытом в области терапии различных заболеваний и повреждений
                        опорно-двигательной системы.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Высокий профессионализм специалистов позволяет осуществлять хирургическое вмешательство
                        любой сложности, не зависимо от возраста пациента.
                    </BaseText>
                    <BaseText>
                        Вся медицинская команда прошла сертификацию по передовым технологиям артропластики (АО)
                        и внедрению современных эндопротезов различных брендов.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                    }}
                >

                    <BaseSubTitle title="Основные направления деятельности включают:" />

                    <List>
                        {traumatologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        В нашей практике применяются самые актуальные подходы к терапии, включая авторские
                        разработки. Например, двухэтапное эндопротезирование тазобедренного сустава и
                        радикальные малоинвазивные операции на позвоночнике.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Использование передовых компьютерных систем с навигацией обеспечивает непрерывный
                        контроль процесса установки имплантатов, гарантируя их идеальное соответствие
                        анатомическим особенностям пациента.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Все данные операций сохраняются в цифровом формате и предоставляются больным для
                        дальнейшего использования.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        При лечении мы применяем только оригинальные продукты ведущих мировых производителей
                        фиксаторов и эндопротезов, обеспечивая высокое качество медицинских изделий.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        После хирургического вмешательства каждому пациенту предоставляется комплексная
                        реабилитационная программа для успешного восстановления функций опорно-двигательного
                        аппарата на всех этапах послеоперационной терапии.
                    </BaseText>
                </Box>

                <PartnersBlock title="больница травматология платно" color="var(--red)" />

                <BasePhotoGallery imagesList={traumatologyImages} />
            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
