import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import Head from 'next/head';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { BaseSubTitle } from '@/components/base/BaseSubTitle';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { gynecologyImages } from '@/config/images';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import {
    gynecologyList1,
    gynecologyList2,
    gynecologyList3,
    gynecologyList4,
    gynecologyList5,
    gynecologyList6,
    gynecologyList7
} from '@/config/directions/gynecology';
import { BaseLi } from '@/components/base/BaseLi';

export default function Gynecology() {
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
                Гинекология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>Гинекология госпитализация. 8 (499) 719-81-00, 24/7</title>
                <meta
                    name="description"
                    content="Платная госпитализация в гинекологию. Обеспечим комфорт и заботу 24/7. Звоните: 8 (499) 719-81-00 для записи."
                />
                <meta
                    name="keywords"
                    content="гинекология госпитализация, платные больницы гинекологии, стационар гинекологическое отделение, стационар гинекология москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Платная гинекология в Москве 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная гинекология в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/gynecology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/directions/3.webp" title="гинекология госпитализация" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        В <span style={{ color: 'var(--red)' }}>отделениях гинекологии</span> наших партнеров
                        гарантируется
                        полноценная диагностика, включающая экспресс-обследования и профессиональную
                        консультацию с размещением в комфортабельных одно- или двухместных палатах стационара.
                    </BaseText>
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        Квалифицированный коллектив отделения, обладающий дружелюбием и высоким уровнем
                        мастерства, обеспечивает быстрое и результативное решение медицинских задач пациенток.
                    </BaseText>
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        Особенностью гинекологического стационарного отделения является фокус на максимальное
                        сохранение репродуктивной функции женщин. Это достигается за счет применения
                        инновационных авторских методик лапароскопических операций, тщательного
                        предоперационного анализа как генитальных, так и внеполовой патологии. Особое внимание
                        уделяется внимательному послеоперационному сопровождению с контролем состояния
                        дыхательных и сердечно-сосудистых систем. Отличительная черта — оперативное
                        вмешательство для женщин с тяжелыми сопутствующими заболеваниями.
                    </BaseText>
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        Госпитализация организована как в экстренном, так и плановом режимах.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                    }}
                >
                    <Box>

                        <BaseSubTitle title="В отделении гинекологии стационара проводится:" />

                        <br />
                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            1. Большой спектр органосохраняющих лапароскопических хирургических вмешательств:
                        </Typography>
                        <List>
                            {gynecologyList1.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            2. Операции на онкоурологических патологиях женских половых органов:
                        </Typography>
                        <List>
                            {gynecologyList2.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            3. Хирургическое вмешательство с использованием лапаротомного доступа различной
                            сложности.
                        </Typography>
                        <br />

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            4. Эстетические операции в гинекологии:
                        </Typography>
                        <List>
                            {gynecologyList3.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            5. Мелкие гинекологические процедуры:
                        </Typography>
                        <List>
                            {gynecologyList4.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            6. Консервативное лечение:
                        </Typography>
                        <List>
                            {gynecologyList5.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            7. Специализированные услуги:
                        </Typography>
                        <List>
                            {gynecologyList6.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            8. Диагностические процедуры:
                        </Typography>
                        <List>
                            {gynecologyList7.map(({ id, label }) => <BaseLi key={id} label={label} component="h4" />)}
                        </List>

                        <Typography
                            variant="h3"
                            sx={{
                                fontSize: { xs: 22, sm: 28 },
                                fontWeight: 300,
                                color: 'var(--red)',
                            }}
                        >
                            9. Лечение бесплодия у женщин, терапия патологий шейки матки (лечение эктопии,
                            лейкоплакии и дисплазий)
                        </Typography>
                    </Box>
                </Box>

                <PartnersBlock title="платные больницы гинекологии" color="var(--red)" />

                <BasePhotoGallery imagesList={gynecologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
