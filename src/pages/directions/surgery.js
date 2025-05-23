import { Box, Link, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import { BaseText } from '@/components/base/BaseText';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import React from 'react';
import { surgeryImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Surgery() {
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
                Хирургия
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Хирургия в Москве — консультации и операции без ОМС. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная хирургия в Москве: приём опытного хирурга, диагностика, лечение, амбулаторные и плановые операции. Без очередей, запись онлайн. 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="хирург москва платно, платная хирургия, приём хирурга без омс, амбулаторная хирургия, удаление новообразований, грыжа операция москва, лечение воспалений хирург, перевязки платно, вскрытие абсцесса, удаление швов, хирург экстренно, срочно к хирургу, хирургическая помощь москва, амбулаторные операции, частный хирург москва, хирургия без очереди"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Медицинская Сервисная Компания. Хирургия в Москве — консультации и операции без ОМС. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная хирургия в Москве: приём опытного хирурга, диагностика, лечение, амбулаторные и плановые операции. Без очередей, запись онлайн." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/surgery" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Хирургия в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Хирургия в Москве." />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/directions/1.webp"
                    title="хирургия в Москве"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        В <span style={{ color: 'var(--red)' }}>отделениях хирургии</span> наших партнеров внедрены
                        передовые
                        стандарты, предлагающие пациентам одноместные и двухместные палаты, оснащенные по
                        последнему слову техники для обеспечения уютного пребывания в процессе хирургического
                        лечения.
                        <br />
                        <br />
                        Делом руководит хирург с обширным опытом успешной работы во всех аспектах хирургии – от
                        диагностики и операций до реабилитации различных патологий, подтверждая статус ведущего
                        специалиста своего профиля.
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
                        &nbsp;Платная госпитализация в Москве хирургия.
                    </Typography>
                    <br />
                    <br />
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Применение инновационных малоинвазивных
                            методов</Box> в стационаре минимизирует травматичность
                        вмешательств, сокращает сроки госпитализации и ускоряет восстановление пациентов. В
                        распоряжении хирургов – новейшие технологии: УЗИ, МСКТ, КТ-исследования и даже передовое
                        использование МР-холангиографии. Мультидисциплинарный подход к диагностике объединяет
                        все необходимые инструменты для комплексной оценки состояния здоровья.
                    </BaseText>
                    <BaseText>
                        Профессиональный состав отделения включает кандидатов наук в медицине, а также врачей
                        высшей категории, что гарантирует высочайший уровень медицинского обслуживания.
                    </BaseText>
                    <Typography
                        component="h3"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 14, sm: 16, md: 18 },
                            fontWeight: 400,
                            display: 'inline',
                        }}
                    >
                        &nbsp;Платная хирургия. &nbsp;
                    </Typography>
                    <BaseText>
                        Основная задача – обеспечение оптимального качества жизни пациентов благодаря внедрению
                        современных технологий и высокому профессионализму команды.
                    </BaseText>
                    <Typography
                        component="h3"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 14, sm: 16, md: 18 },
                            fontWeight: 400,
                            display: 'inline',
                        }}
                    >
                        &nbsp;Платная палата в хирургии.&nbsp;
                    </Typography>
                    <BaseText>
                        Палаты предлагаются как стандартного комфортного уровня, так и в VIP-сегменте с
                        использованием видеоэндоскопических систем от мировых лидеров индустрии для проведения
                        точных лапароскопических операций.
                    </BaseText>

                </Box>

                <PartnersBlock title="Платные больницы хирургия" color="var(--red)" />

                <BaseCallBlock />

                <BasePhotoGallery imagesList={surgeryImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
