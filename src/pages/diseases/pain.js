import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { painImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import { LocalHospital } from '@mui/icons-material';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Pain() {
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
                Лечение боли
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Лечение боли. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Эффективное лечение хронической боли: диагностика, индивидуальный подход, медикаментозная и восстановительная терапия. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="институт лечения боли в москве, клиника лечения боли в москве, лечение головной боли в москве, центр лечения боли в москве"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Лечение боли в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Эффективное лечение хронической боли: диагностика, индивидуальный подход, медикаментозная и восстановительная терапия. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/pain" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/diseases/pain/pain1.webp" />
                <meta property="og:image:alt" content="Лечение боли в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Лечение боли. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/pain/pain1.webp"
                    title="Лечение боли в Москве"
                    bgPosition="top"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Лечение <Box component="span" sx={{ color: 'var(--red)' }}>хронической боли</Box> требует
                        комплексного и индивидуального подхода. Такая боль может
                        сохраняться в течение месяцев или даже лет, снижая качество жизни и нарушая привычную
                        активность. Причины могут быть разными: заболевания нервной системы, последствия травм,
                        операций, онкологического лечения, психоэмоциональные факторы.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Врачи начинают с точной диагностики, чтобы определить источник боли. На основе полученных данных
                        разрабатывается персонализированная терапия. В неё входят обезболивающие препараты,
                        физиотерапия, психологическая поддержка, методы нейромодуляции и восстановительные процедуры.
                    </BaseText>
                    <BaseText>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Цель лечения</Box> — не только снизить
                        интенсивность боли, но и восстановить физическое и
                        эмоциональное состояние пациента, вернуть способность к активной жизни. При правильном подходе
                        хроническая боль становится контролируемой, а в ряде случаев — полностью исчезает.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Виды боли, которые мы лечим:" />

                    <List>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText>
                                    Боли в шее, спине, позвоночнике
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText>
                                    Головные боли
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText>
                                    Боли при онкологических заболеваниях
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText>
                                    Боли при повреждениях нервных корешков и периферических нервов
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText>
                                    Фантомные боли
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText>
                                    Сосудистые заболевания головного мозга
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Хроническая боль</Box> — это не просто
                        дискомфорт. Это сигнал организма, который нельзя игнорировать.
                        Она мешает спать, работать, двигаться, радоваться жизни. Со временем боль становится фоном, к
                        которому человек привыкает, теряя энергию, настроение и интерес к привычным вещам.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Лечение хронической боли возвращает свободу движений, восстанавливает эмоциональное равновесие и
                        возвращает к активной, полноценной жизни. Сделайте шаг к себе без боли — вы заслуживаете этого.
                    </BaseText>
                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={painImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

