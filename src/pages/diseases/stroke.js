import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { strokeImages } from '@/config/images';
import Link from 'next/link';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Stroke() {
    const breadcrumbs = () => {
        return [
            <Link
                className="breadcrumb-link"
                href="/"
                key="1"
            >
                Главная
            </Link>,
            <Typography key="2" sx={{ color: 'var(--gray)' }}>
                Реабилитация после инсульта
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Реабилитация после инсульта в Москве. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Комплексная реабилитация после инсульта: восстановление речи, движений, памяти и навыков самообслуживания. Индивидуальные программы, ЛФК, массаж, логопедия, психологическая поддержка. Возвращаем к активной жизни. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="реабилитация после инсульта, центр реабилитации после инсульта, реабилитация после инсульта в москве, больница реабилитация после инсульта"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Реабилитация после инсульта в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Комплексная реабилитация после инсульта: восстановление речи, движений, памяти и навыков самообслуживания. Индивидуальные программы, ЛФК, массаж, логопедия, психологическая поддержка. Возвращаем к активной жизни. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/stroke" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/diseases/stroke/stroke1.webp" />
                <meta property="og:image:alt" content="реабилитация после инсульта в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Реабилитация после инсульта в Москве. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/stroke/stroke1.webp"
                    title="реабилитация после инсульта в москве"
                    bgPosition="top"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Восстановление после инсульта</Box> –
                        важнейший период в процессе возвращения к здоровью и привычному
                        образу жизни. Несмотря на оперативную медицинскую помощь, инсульт нередко приводит к ощутимым
                        проблемам: затруднениям в речи, ограничениям в движении, ухудшению памяти, нарушению равновесия
                        и изменениям в эмоциональной сфере.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Основная задача реабилитации</Box> – вернуть
                        утраченные способности, помочь пациенту приспособиться к
                        изменившимся обстоятельствам и обеспечить максимальную независимость. В рамках реабилитационных
                        мероприятий применяются упражнения на физическую активность, занятия с дефектологом,
                        психологическая помощь, массаж, физиотерапевтические процедуры и обучение необходимым навыкам
                        самообслуживания.
                    </BaseText>
                    <BaseText>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Начало реабилитационных мер</Box> в
                        кратчайшие сроки значительно повышает вероятность полного или
                        частичного выздоровления. Регулярные занятия под руководством квалифицированных специалистов
                        способствуют не только улучшению физического здоровья, но и возвращению уверенности в себе,
                        желания двигаться вперед и повышению общего качества жизни.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseSubTitle title="Методики реабилитации после инсульта" marginBottom={true} />

                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: 18, sm: 20 },
                                color: 'var(--blue)',
                                marginBottom: { xs: '10px', sm: '20px' }
                            }}
                        >
                            Комплекс подбирается индивидуально с учётом степени нарушений, общего состояния и динамики
                            восстановления.
                        </Typography>
                    </Box>

                    <Box component="article"
                         sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckIcon sx={{ color: 'var(--red)' }} />
                            <Typography variant="h3"
                                        sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                                Лечебная физкультура (ЛФК)
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                            Упражнения под контролем специалиста помогают восстановить подвижность, силу мышц и
                            координацию
                            движений. Занятия проходят постепенно — от пассивной гимнастики до активных тренировок.
                        </Typography>
                    </Box>
                    <Box component="article"
                         sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckIcon sx={{ color: 'var(--red)' }} />
                            <Typography variant="h3"
                                        sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                                Физиотерапия
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                            Используются методы электростимуляции, магнитотерапии, лазерной и ультразвуковой терапии для
                            активации кровообращения, уменьшения спастики и улучшения обменных процессов в тканях.
                        </Typography>
                    </Box>
                    <Box component="article"
                         sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckIcon sx={{ color: 'var(--red)' }} />
                            <Typography variant="h3"
                                        sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                                Массаж
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                            Улучшает кровообращение, снижает мышечное напряжение, способствует восстановлению
                            чувствительности и подвижности.
                        </Typography>
                    </Box>
                    <Box component="article"
                         sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckIcon sx={{ color: 'var(--red)' }} />
                            <Typography variant="h3"
                                        sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                                Логопедические занятия
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                            При нарушениях речи логопед помогает восстановить произношение, понимание и коммуникацию с
                            окружающими.
                        </Typography>
                    </Box>
                    <Box component="article"
                         sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckIcon sx={{ color: 'var(--red)' }} />
                            <Typography variant="h3"
                                        sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                                Психологическая поддержка и нейропсихология
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                            Восстановление когнитивных функций (памяти, внимания, мышления), помощь в преодолении
                            тревожности, депрессии и адаптации к изменениям.
                        </Typography>
                    </Box>
                    <Box component="article"
                         sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckIcon sx={{ color: 'var(--red)' }} />
                            <Typography variant="h3"
                                        sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                                Эрготерапия
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                            Обучение навыкам самообслуживания — одевание, приём пищи, гигиенические процедуры,
                            использование
                            вспомогательных средств для повышения самостоятельности.
                        </Typography>
                    </Box>
                    <Box component="article"
                         sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <CheckIcon sx={{ color: 'var(--red)' }} />
                            <Typography variant="h3"
                                        sx={{ color: 'var(--blue)', fontSize: { xs: 20, sm: 24 }, fontWeight: 500 }}>
                                Работа с родственниками
                            </Typography>
                        </Box>
                        <Typography component="p" sx={{ fontSize: { xs: 18, sm: 20 }, color: 'var(--gray)' }}>
                            Обучение уходу за пациентом, правильному сопровождению процесса восстановления и созданию
                            поддерживающей среды дома.
                        </Typography>
                    </Box>

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Своевременно начатая и грамотно выстроенная реабилитация позволяет значительно повысить шансы на
                        восстановление и улучшить качество жизни после инсульта.
                    </BaseText>
                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={strokeImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

