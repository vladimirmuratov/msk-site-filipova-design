import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { somnologyList1, somnologyList2, somnologyList3 } from '@/config/directions/somnology';
import { BaseLi } from '@/components/base/BaseLi';
import { somnologyImages } from '@/config/images';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Somnology() {
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
                Сомнология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Лечение нарушений сна в Москве — госпитализация без ОМС. Звоните! 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация при бессоннице, храпе, апноэ сна. Помощь сомнолога, обследование, лечение в Москве. Принимаем без полиса ОМС, с полным сопровождением."
                />
                <meta
                    name="keywords"
                    content="сомнолог москва платно, платная сомнология, лечение бессонницы, диагностика сна москва, храп лечение, апноэ сна, полисомнография москва, нарушение сна причины, остановка дыхания во сне, синдром беспокойных ног, сонливость днём, тревожный сон, плохой сон лечение, бессонница у взрослых, консультация сомнолога, центр сна москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Медицинская Сервисная Компания. Лечение нарушений сна в Москве — госпитализация без ОМС. Звоните! 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная госпитализация при бессоннице, храпе, апноэ сна. Помощь сомнолога, обследование, лечение в Москве. Принимаем без полиса ОМС, с полным сопровождением." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/somnology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Сомнология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Сомнология в Москве." />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/directions/9.webp" title="сомнология в москве" />

                <BaseCallBlock />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Задача <span style={{ color: 'var(--red)' }}>отделения сомнологии</span> - диагностики
                        расстройств
                        сонного ритма. Мультидисциплинарная команда, специализирующуюся на всестороннем изучении
                        и воздействии на разнообразие сбоев в режиме сна, оснащена передовыми инструментами для
                        преодоления даже самых сложных и хронических нарушений.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Отделение сомнологии специализируется на диагностике и терапии широкого спектра расстройств:" />

                    <List>
                        {somnologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <BaseH2 title="Дополнительные синдромы:" />

                    <List>
                        {somnologyList2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <BaseH2 title="Диагностические методы:" />

                    <List>
                        {somnologyList3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Мы гарантируем комплексный, персонализированный подход к каждому пациенту с целью
                        восстановления гармоничного сна и улучшения качества жизни.
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
                        &nbsp;Сомнолог лечение.
                    </Typography>
                </Box>

                <PartnersBlock title="сомнолог москва лечение храпа" color="var(--red)" />

                <BaseCallBlock />

                <BasePhotoGallery imagesList={somnologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
