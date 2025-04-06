import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import { LocalHospital } from '@mui/icons-material';
import PartnersBlock from '@/components/PartnersBlock';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';

export default function Cardiology() {
    return (
        <>
            <Head>
                <title>
                    Кардиология платная госпитализация 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация в кардиологию. Индивидуальный подход и высококачественное обслуживание. Звоните 8 (499) 719-81-00 для консультации."
                />
                <meta
                    name="keywords"
                    content="кардиология платная госпитализация, платная больница кардиология, платный стационар кардиология, платная госпитализация в москве кардиология, платные палаты"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Кардиология платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная кардиология в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/cardiology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box>

                <BaseBanner
                    imgPath="/images/directions/5.webp"
                    title="кардиология платная госпитализация"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        В <span style={{color: 'var(--red)'}}>кардиологических отделениях</span> наших партнеров
                        диагностика и терапия пациентов основывается на официальных рекомендациях Минздрава
                        России, клинических указаниях Российского кардиологического общества (РКО), Европейского
                        и Американских ассоциаций кардиологов, а также данных из доказательной медицины.
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
                        &nbsp;Кардиология платная госпитализация.
                    </Typography>
                    <br />
                    <br />

                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                        }}
                    >

                        <BaseSubTitle title="Мы специализируемся на лечении следующих состояний:" />

                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Острый коронарный синдром различной этиологии: с подъёмом/без подъема сегмента
                                        ST (включая инфаркт и нестабильную стенокардию)
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Гипертонический кризы</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Пароксизмальные нарушения ритма предсердий, включая мерцание и трепетание
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Острая сердечная недостаточность обоих видов (острую и хроническую)
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Миокардит в острых и хронических формах</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Перикардиты различной природы</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Инфекционный эндокардит</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Тромбоэмболические осложнения, включая легочную артерию</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Ишемическая болезнь сердца (острая фаза и хроническое течение)
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Симптоматическую и первичную гипертонию</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Нарушения ритма и проводимости: экстрасистолии, мерцательную аритмию,
                                        суправентрикулярные тахикардии, блокады (СССУ)
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Кардиомиопатии различных типов</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Хроническую сердечную недостаточность</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>

                    <Box
                        className="pt-0"
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                        }}
                    >

                        <BaseSubTitle title="В нашем отделении осуществляется:" />

                        <br />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)',
                            }}
                        >
                            1. Выбор и подготовка пациентов для оказания высокотехнологичной помощи при острых
                            коронарных синдромах, а также в рамках долгосрочного лечения ИБС.
                        </Typography>
                        <br />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)',
                            }}
                        >
                            2. Применение диагностических методов:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Электрокардиографические исследования</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Кардиоверсия (электрическая и медикаментозная)</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Тромболитическая терапия</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Стентирование коронарных и периферических артерий, имплантация кава-фильтров
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Дефибрилляционные процедуры</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Катетеризация вен (периферических и центральных)</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Временная электрокардиостимуляция</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Искусственная вентиляция легких, как инвазивного, так и неинвазивного характера
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Санационные процедуры трахеобронхиальной системы</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Небулайзерная терапия</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Пункции и дренирование плевральных полостей, перикарда, брюшной полости
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Трансфузии компонентов крови и свежезамороженной плазмы</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <br />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)',
                            }}
                        >
                            3. Диагностические исследования:
                        </Typography>
                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Эхокардиография (стандартная и чреспищеводная)</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Суточное мониторирование: ЭКГ, АД, частоты дыхания, насыщения крови кислородом
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Определение маркеров некроза миокарда</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Измерение гемодинамических показателей и катетеризация мочевого пузыря с
                                        контролем диуреза
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)',
                            }}
                        >
                            4. Рентгенологические исследования органов грудной клетки.
                        </Typography>

                        <br />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)',
                            }}
                        >
                            5. Система экстренного оповещения (сигнализации) в реанимационных палатах.
                        </Typography>

                        <br />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 20, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--blue)',
                            }}
                        >
                            6. Кислородотерапия и интенсивная терапия с круглосуточным мониторингом основных
                            показателей жизнедеятельности.
                        </Typography>
                    </Box>
                    <BaseText>
                        Палата реанимации оснащена для проведения полного комплекса мероприятий по
                        сердечно-легочной реанимации при клинической смерти.
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
                        &nbsp;Платные палаты.
                    </Typography>

                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                        }}
                    >

                        <BaseSubTitle title="Дополнительные направления деятельности:" />

                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Консультирование врачей других подразделений и медицинских организаций
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Проведение реабилитационных программ для пациентов с кардиологическими
                                        заболеваниями
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Образовательная работа по профилактике сердечно-сосудистых патологий среди
                                        населения
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>

                    <PartnersBlock title="платный стационар кардиология" color="var(--red)" />
                </Box>
            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
