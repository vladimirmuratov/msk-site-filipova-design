import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import React from 'react';
import { BaseText } from '@/components/base/BaseText';
import { LocalHospital } from '@mui/icons-material';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { traumatologyImages } from '@/config';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';

export default function Traumatology() {
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
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
                <BaseBanner imgPath="/images/directions/2.webp" title="платная травматология москва" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        <span className="fw-800">Ортопедические и травматологические подразделения</span> наших
                        партнеров обладают глубоким опытом в области терапии различных заболеваний и повреждений
                        опорно-двигательной системы.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        Высокий профессионализм специалистов позволяет осуществлять хирургическое вмешательство
                        любой сложности, не зависимо от возраста пациента.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        Вся медицинская команда прошла сертификацию по передовым технологиям артропластики (АО)
                        и внедрению современных эндопротезов различных брендов.
                    </BaseText>
                    <Box
                        sx={{
                            paddingY: { xs: '25px', sm: '50px' },
                        }}
                    >

                        <BaseSubTitle title="Основные направления деятельности включают:" />

                        <List>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Сложнейшие реконструктивные операции у взрослых, включая восстановление
                                        конечностей после тяжелых травм
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={{ gap: '10px' }}>
                                <ListItemIcon sx={{ minWidth: 0 }}>
                                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                                </ListItemIcon>
                                <ListItemText>
                                    <BaseText>
                                        Лечение дегенеративно-деформирующих суставов и коррекцию патологии позвоночника
                                        с использованием инновационных методик
                                    </BaseText>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                    <BaseText>
                        В нашей практике применяются самые актуальные подходы к терапии, включая авторские
                        разработки. Например, двухэтапное эндопротезирование тазобедренного сустава и
                        радикальные малоинвазивные операции на позвоночнике.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        Использование передовых компьютерных систем с навигацией обеспечивает непрерывный
                        контроль процесса установки имплантатов, гарантируя их идеальное соответствие
                        анатомическим особенностям пациента.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        Все данные операций сохраняются в цифровом формате и предоставляются больным для
                        дальнейшего использования.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        При лечении мы применяем только оригинальные продукты ведущих мировых производителей
                        фиксаторов и эндопротезов, обеспечивая высокое качество медицинских изделий.
                    </BaseText>
                    <br />
                    <br />
                    <BaseText>
                        После хирургического вмешательства каждому пациенту предоставляется комплексная
                        реабилитационная программа для успешного восстановления функций опорно-двигательного
                        аппарата на всех этапах послеоперационной терапии.
                    </BaseText>
                    <Typography
                        component="h2"
                        sx={{
                            color: 'var(--blue)',
                            fontSize: { xs: 14, sm: 16, md: 18 },
                            fontWeight: 400,
                            display: 'inline',
                        }}
                    >
                        &nbsp;Травматология платная палата.
                    </Typography>
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
