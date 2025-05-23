import { Box, List, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { pulmonologyImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { BaseLi } from '@/components/base/BaseLi';
import { pulmonologyList1, pulmonologyList2 } from '@/config/directions/pulmonology';

export default function Pulmonology() {
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
                Пульмонология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Пульмонология в Москве. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Пульмонология в Москве — диагностика и лечение заболеваний дыхательной системы: астма, бронхит, пневмония, ХОБЛ, постковид. Приём пульмонолога, современная диагностика. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="пульмонология в москве, институт пульмонологии в москве, центр пульмонологии в москве"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Пульмонология в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Пульмонология в Москве — диагностика и лечение заболеваний дыхательной системы: астма, бронхит, пневмония, ХОБЛ, постковид. Приём пульмонолога, современная диагностика. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/diseases/pulmonology" />
                <meta property="og:image"
                      content="https://msk-group-hospital.ru/images/diseases/pulmonology/pulmonology1.webp" />
                <meta property="og:image:alt" content="пульмонология в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Пульмонология в Москве. 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/pulmonology/pulmonology1.webp"
                    title="Пульмонология в Москве"
                    bgPosition="top"
                />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Пульмонология</Box> — это медицинская
                        специальность, направленная на диагностику, лечение и
                        профилактику заболеваний дыхательной системы. Врачи-пульмонологи в нашей клинике
                        помогают взрослым и детям справляться с острыми и хроническими заболеваниями лёгких и бронхов.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        В клинике <Box component="span"
                                       sx={{ color: 'var(--red)' }}>специалисты пульмонологи</Box> способны справиться с
                        нарушениями нормального
                        дыхания. Здесь трудятся опытные врачи, включая докторов и кандидатов наук, а также врачей высшей
                        квалификационной категории. Клиника является площадкой для внедрения передовых терапевтических
                        подходов, разработанных как в России, так и за рубежом. Это позволяет пациентам получать самые
                        действенные и надежные лекарственные средства с наименьшим риском нежелательных реакций.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Когда стоит обратиться к пульмонологу:" />

                    <List>
                        {pulmonologyList1.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        В нашей клинике <Box component="span" sx={{ color: 'var(--red)' }}>диагностика респираторных
                        заболеваний</Box> выполняется с применением самых
                        современных и передовых технологий. Врачи используют для исследований оборудование последнего
                        поколения, произведенное известными европейскими, американскими и японскими компаниями. Особое
                        внимание уделяется эндоскопии, компьютерной томографии легких и средостения.
                        Специалисты-пульмонологи осуществляют точную дифференциацию между хронической обструктивной
                        болезнью легких и бронхиальной астмой.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Что лечит пульмонолог:" />

                    <List>
                        {pulmonologyList2.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Не откладывайте здоровье на потом — при первых признаках проблем с лёгкими запишитесь на приём к
                        пульмонологу в Москве. Дышите свободно — мы рядом, чтобы помочь.
                    </BaseText>
                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={pulmonologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

