import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { LocalHospital } from '@mui/icons-material';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { therapyImages } from '@/config';
import Head from 'next/head';

export default function Therapy() {
    return (
        <>
            <Head>
                <title>Госпитализация в терапию. Платные госпитализации 8 (499) 719-81-00, 24/7</title>
                <meta name="description"
                      content="Госпитализация в терапию. Платные госпитализации 8 (499) 719-81-00, 24/7, платный стационар терапия больница терапия платная палата" />
                <meta name="keywords"
                      content="больница терапия платная палата, платный стационар терапия, госпитализация в терапию" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Box>

                <BaseBanner imgPath="/images/directions/8.webp" title="госпитализация в терапию" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 }
                    }}
                >
                    <BaseText>
                        <span className="fw-800">Терапевтическое отделение</span> в стационарах клиник партнеров
                        занимает
                        особое место, где сосредоточена высокопрофессиональная
                        медицинская поддержка для пациентов с терапевтическими, кардиологическими, ревматологическими и
                        эндокринными проблемами. Врачи отделения — сертифицированные специалисты в области «Терапии»,
                        «Кардиологии», «Ревматологии» и «Эндокринологии». Их глубокие знания и богатый клинический опыт
                        позволяют решать самые сложные медицинские задачи, обеспечивая широкий спектр помощи.
                    </BaseText>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 14, sm: 16, md: 18 },
                            fontWeight: 400,
                            display: 'inline'
                        }}
                    >&nbsp;Больница терапия платная палата.</Typography>

                    <Box
                        className="pb-0"
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                            marginX: { xs: '15px', lg: 0 }
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: 32, sm: 38 },
                                fontWeight: 300,
                                color: 'var(--red)',
                                textTransform: 'uppercase',
                                // marginBottom: {xs: '15px', sm: '30px'},
                            }}
                        >
                            Профили специализации:
                        </Typography>
                        <br />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Сложная сердечная недостаточность:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Эффективное управление с акцентом на достижении стабильности
                                        состояния
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Резистентная артериальная гипертензия:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Тщательная диагностика для исключения симптоматических причин</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Индивидуализированный подход к лечению</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Нарушения ритма сердца, включая фибрилляцию предсердий:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Оптимизация антиаритмической терапии</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Ишемия и коронарные заболевания:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Проведение стентирования в рамках высокотехнологичной медицинской
                                        помощи</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Индивидуальный подход к каждому случаю</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            className="pb-16"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Стабилизация состояния тяжелых пациентов с множественными хроническими патологиями.
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Анемии различного происхождения:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Быстрое выявление и комплексное лечение</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Ревматические заболевания:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Включая применение генно-инженерных препаратов</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Индивидуальные стратегии терапии</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Гипертоническая болезнь:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Программы с фиксированной стоимостью, учитывающие особенности каждого
                                        пациента</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            className="pb-16"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Подготовка к хирургическому вмешательству для тяжелых больных.
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Заболевания легких (включая интерстициальные и специфические формы):
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Современная терапия по клиническим протоколам</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Использование вспомогательных методов</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            className="pb-16"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Реабилитация после COVID-19, инфарктов, инсультов и тромбоэмболий.
                        </Typography>

                        <Typography
                            variant="h3"
                            className="pb-16"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Особенности лечения у пациентов с тяжелым морбидным ожирением.
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Сахарный диабет:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Разработка персонализированных схем терапии</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Ранняя диагностика сердечно-сосудистых и онкологических заболеваний:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Комплексное обследование для своевременного выявления патологий</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            className="pb-16"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Хроническая почечная недостаточность у полиморбидных пациентов.
                        </Typography>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)'
                            }}
                        >
                            Другие внутренние болезни:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Специализированная помощь в широком спектре состояний</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>

                    <PartnersBlock title="платный стационар терапия" color="var(--red)" />

                    <BasePhotoGallery imagesList={therapyImages} />
                </Box>
            </Box>
        </>
    );
}
