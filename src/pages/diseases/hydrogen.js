import { Box, List, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { copdImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { BaseLi } from '@/components/base/BaseLi';
import { hydrogen1, hydrogen2, hydrogen3, hydrogenFaq } from '@/config/diseases/hydrogen';
import { BaseAccordion } from '@/components/base/BaseAccordion/BaseAccordion';

export default function Copd() {
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
                Лечение водородом
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Ингаляции молекулярным водородом в Москве. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Эффективные ингаляции молекулярным водородом в Москве. Помощь при астме, ХОБЛ, постковидном синдроме и хронической усталости. Безопасно, без побочных эффектов. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="ингаляции молекулярным водородом, водородная терапия Москва, ингаляции водородом в Москве, лечение водородом Москва, водородотерапия при ХОБЛ, водородотерапия при астме, водородные ингаляции, молекулярный водород для дыхания, антиоксидантная терапия Москва, лечение постковида водородом, Медицинская Сервисная Компания Москва, водородотерапия отзывы, водород при бронхиальной астме, ингаляции при хронической усталости, безопасная дыхательная терапия"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Ингаляции молекулярным водородом в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Эффективные ингаляции молекулярным водородом в Москве. Помощь при астме, ХОБЛ, постковидном синдроме и хронической усталости. Безопасно, без побочных эффектов. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/hydrogen" />
                <meta property="og:image"
                      content="https://msk-group-hospital.ru/images/diseases/copd/copd2.webp" />
                <meta property="og:image:alt" content="Водородная терапия. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Ингаляции молекулярным водородом в Москве. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/copd/copd2.webp"
                    title="лечение водородом"
                    // bgPosition="top"
                />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Ингаляции молекулярным водородом: польза, показания и эффективность"
                        marginBottom={true}
                    />

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>
                            Ингаляции молекулярным водородом
                        </Box> — инновационный и безопасный метод восстановления и оздоровления организма. Благодаря
                        мощным антиоксидантным и противовоспалительным свойствам, водородная терапия приобретает всё
                        большую популярность в комплексном лечении хронических заболеваний, особенно дыхательной и
                        сердечно-сосудистой систем.
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Что такое ингаляции молекулярным водородом?"
                        marginBottom={true}
                    />
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Ингаляции молекулярным водородом</Box> — это
                        процедура, при которой пациент вдыхает специальную газовую смесь, содержащую молекулярный
                        водород (H₂), через маску или носовой катетер. Газ подаётся с помощью генератора водорода,
                        обеспечивающего безопасную концентрацию и стабильный поток.
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Как работает молекулярный водород?"
                        marginBottom={true}
                    />
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Молекулярный водород</Box> легко проникает в
                        клетки и нейтрализует самые опасные свободные радикалы — гидроксильные. Это помогает снизить
                        окислительный стресс, улучшить обмен веществ, восстановить дыхательную функцию и укрепить
                        иммунитет.
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Польза ингаляций водородом"
                        marginBottom={true}
                    />

                    <List>
                        {hydrogen1.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Показания к ингаляциям водородом" marginBottom={true} />

                    <List>
                        {hydrogen2.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Противопоказания"
                        marginBottom={true}
                    />
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Процедура имеет минимум ограничений, но предварительная консультация с врачом обязательна,
                        особенно при наличии серьёзных хронических заболеваний или в период беременности.
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Как проходят ингаляции?"
                        marginBottom={true}
                    />

                    <List>
                        {hydrogen3.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Ингаляции молекулярным водородом в Москве"
                        marginBottom={true}
                    />

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>
                            Медицинская Сервисная Компания</Box> предлагает современные ингаляции водородом с
                        использованием сертифицированного оборудования. Процедуры проводятся под наблюдением опытных
                        специалистов. Мы разрабатываем индивидуальные программы терапии, ориентируясь на состояние и
                        цели каждого пациента.
                    </BaseText>
                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Часто задаваемые вопросы (FAQ)"
                        marginBottom={true}
                    />

                    <BaseAccordion items={hydrogenFaq} />

                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={copdImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

