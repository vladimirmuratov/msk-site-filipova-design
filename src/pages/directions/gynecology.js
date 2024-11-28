import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import Head from 'next/head';
import { LocalHospital } from '@mui/icons-material';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';

export default function Gynecology() {
    return (
        <>
            <Head>
                <title>Гинекология госпитализация. Платные госпитализации 8 (499) 719-81-00, 24/7</title>
                <meta name="description"
                      content="Гинекология госпитализация. Платные госпитализации 8 (499) 719-81-00, 24/7, платные больницы гинекологии стационар гинекология москва стационар гинекологическое отделение" />
                <meta name="keywords"
                      content="гинекология госпитализация, платные больницы гинекологии, стационар гинекологическое отделение, стационар гинекология москва" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Box>

                <BaseBanner imgPath="/images/directions/3.webp" title="гинекология госпитализация" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '15px', lg: 0 }
                    }}
                >
                    <BaseText>
                        В <span className="fw-800">отделениях гинекологии</span> наших партнеров гарантируется полноценная диагностика, включающая экспресс-обследования и
                        профессиональную консультацию с размещением в комфортабельных одно- или двухместных палатах
                        стационара.
                    </BaseText>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 14, sm: 16, md: 18 },
                            fontWeight: 400,
                            display: 'inline'
                        }}
                    >&nbsp;Стационар гинекологическое отделение.</Typography>
                    <br />
                    <br />
                    <BaseText>
                        Квалифицированный коллектив отделения, обладающий дружелюбием и высоким уровнем мастерства,
                        обеспечивает
                        быстрое и результативное решение медицинских задач пациенток.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        Особенностью гинекологического стационарного отделения является фокус на максимальное сохранение
                        репродуктивной функции женщин. Это достигается за счет применения инновационных авторских
                        методик
                        лапароскопических операций, тщательного предоперационного анализа как генитальных, так и
                        внеполовой
                        патологии. Особое внимание уделяется внимательному послеоперационному сопровождению с контролем
                        состояния дыхательных и сердечно-сосудистых систем. Отличительная черта — оперативное
                        вмешательство
                        для женщин с тяжелыми сопутствующими заболеваниями.
                    </BaseText>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 14, sm: 16, md: 18 },
                            fontWeight: 400,
                            display: 'inline'
                        }}
                    >&nbsp;Стационар гинекология Москва.</Typography>
                    <br />
                    <br />
                    <BaseText>
                        Госпитализация организована как в экстренном, так и плановом режимах.
                    </BaseText>
                    <br />
                    <br />
                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                        }}
                    >
                        <BaseText>
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
                                В отделении гинекологии стационара проводится:
                            </Typography>
                            <br />
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                1. Большой спектр органосохраняющих лапароскопических хирургических вмешательств:
                            </Typography>
                            <List>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Устранение кист яичников</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Лечение апоплексии и внематочной беременности,
                                            поликистоза</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Операции по восстановлению репродуктивного
                                            здоровья (бесплодие)</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Коррекция наружных генитальных проявлений
                                            эндометриоза</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Удаление миомы матки и устранение спаек в
                                            малом тазу</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                2. Операции на онкоурологических патологиях женских половых органов:
                            </Typography>
                            <List>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>лечение рака шейки, яичников и тела матки
                                            (эндометрия)</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                3. Хирургическое вмешательство с использованием лапаротомного доступа различной
                                сложности.
                            </Typography>
                            <br />

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                4. Эстетические операции в гинекологии:
                            </Typography>
                            <List>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Удаление кист бартолиниевой железы</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Реконструкция влагалищных стенок, восстановление девственной плевы (гименопластика)</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Пластическая коррекция малых половых губ и хирургия при недержании мочи</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                5. Мелкие гинекологические процедуры:
                            </Typography>
                            <List>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Диагностическая гистероскопия с раздельным выскабливанием</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Удаление полипов эндометрия, миоматозных узлов</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Рассечение внутриматочных синехий и перегородок</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Вскрытие абсцессов бартолиниевой железы</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                6. Консервативное лечение:
                            </Typography>
                            <List>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Терапия миомы, эндометриоза матки, функциональных кист яичников</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                7. Специализированные услуги:
                            </Typography>
                            <List>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Планирование семьи и подбор контрацепции</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Заместительная гормональная терапия в период менопаузы</Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Профилактика и лечение остеопороза</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                8. Диагностические процедуры:
                            </Typography>
                            <List>
                                <ListItem sx={{ gap: '10px' }}>
                                    <ListItemIcon sx={{ minWidth: 0 }}>
                                        <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography sx={{ fontSize: 18 }}>Аспирационная биопсия эндометрия, удаление полипов цервикального канала</Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: 20, sm: 28 },
                                    fontWeight: 300,
                                }}
                            >
                                9. Лечение бесплодия у женщин, терапия патологий шейки матки (лечение эктопии, лейкоплакии и дисплазий)
                            </Typography>
                        </BaseText>

                        <PartnersBlock title="платные больницы гинекологии" color="var(--red)" />

                    </Box>

                </Box>
            </Box>
        </>
    );
}
