import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import { LocalHospital } from '@mui/icons-material';
import PartnersBlock from '@/components/PartnersBlock';
import { urologyImages } from '@/config';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';

export default function Urology() {
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
                <link rel="icon" href="/favicon.png" />
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
                <BaseBanner imgPath="/images/directions/4.webp" title="госпитализация урология москва" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        В клиниках наших партнеров осуществляется полный цикл урологических исследований и
                        терапии, соответствующий современным стандартам. Обратитесь к нам – мы подберём
                        идеальную для вас медицинскую структуру.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        В условиях стационаров пациенты размещаются в комфортабельных одно- или двухместных
                        палатах с акцентом на непрерывность лечения между амбулаторной и госпитальной помощью.
                        Благодаря внедрению инновационных методик, продолжительность пребывания сокращается до
                        оптимального периода при сохранении высокого качества медицинского обслуживания.
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
                        &nbsp;Платная госпитализация урология.
                    </Typography>

                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                        }}
                    >

                        <BaseSubTitle
                            title="В наличии оснащённая по последнему слову науки лаборатория с возможностью проведения:" />

                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Стандартных исследований крови и мочи</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Бактериологических посевов (моча, секрет простаты, уретральный экссудат)
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Биохимического анализа</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Иммунологической диагностики</BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                    <BaseText>
                        Применяется передовое оборудование для УЗИ с допплерографией, позволяющее выявлять
                        мельчайшие патологии и своевременно определять заболевания. Предлагаются все виды
                        рентгеновских исследований: классические, КТ (компьютерная томография) и МРТ
                        (магнитно-резонансная томография).
                    </BaseText>

                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                        }}
                    >

                        <BaseSubTitle
                            title="В арсенале урологического отделения богатый опыт применения консервативных методов в лечении широкого спектра заболеваний:" />

                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Инфекций мочеполовой системы, включая ЗППП</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Эректильной дисфункции и бесплодия (включая протезирование полового члена)
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Современные подходы к лечению мочекаменной болезни: эндоскопические операции,
                                        перкутанная литотрипсия, дистанционное дробление камней
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Терапия доброкачественных и злокачественных новообразований простаты (ТУР
                                        аденомы, лазерная энуклеация) с использованием малоинвазивных технологий
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Коррекция мочеполовых расстройств: облитерации, стриктуры уретры и мочеточников,
                                        включая кишечную пластику
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Лечение недержания мочи (установка сетчатых петель TVT/Аргус) и искусственного
                                        сфинктера
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>Хирургия пролапса тазовых органов у женщин (система Prolift)</BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Закрытие свищей различной локализации, включая пузырно-влагалищные и
                                        ректовагинальные
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>

                    <PartnersBlock title="платные клиники москвы урология" color="var(--red)" />

                    <BaseText>
                        Также проводятся операции по исправлению врождённых аномалий мочеполовой системы:
                        стриктуры уретры, лоханочно-мочеточниковых сегментов, гипоспадии.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        Для усиления терапевтического эффекта используются физиотерапевтические процедуры и при
                        необходимости – санаторно-курортное лечение.
                    </BaseText>

                    <BasePhotoGallery imagesList={urologyImages} />
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
