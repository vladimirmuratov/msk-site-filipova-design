import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import React from 'react';
import { BaseText } from '@/components/base/BaseText';
import PartnersBlock from '@/components/PartnersBlock';
import { BaseH2 } from '@/components/base/BaseH2';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import {
    neurologyList1,
    neurologyList10,
    neurologyList2,
    neurologyList3,
    neurologyList4,
    neurologyList5,
    neurologyList6,
    neurologyList7,
    neurologyList8,
    neurologyList9
} from '@/config/directions/neurology';
import { BaseLi } from '@/components/base/BaseLi';
import { neurologyImages } from '@/config/images';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Neurology() {
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
                Неврология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Медицинская Сервисная Компания. Неврология в Москве — госпитализация и лечение сложных неврологических случаев. Звоните! 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Срочная консультация невролога в Москве: лечение головных болей, остеохондроза, инсульта, парезов, невралгии. Комплексная диагностика и госпитализация — быстро и надёжно."
                />
                <meta
                    name="keywords"
                    content="невролог москва платно, платная неврология, приём невролога без омс, головная боль лечение, мигрень невролог, остеохондроз лечение, онемение рук и ног, боли в спине врач, бессонница лечение, тревожность невролог, ВСД симптомы лечение, невралгия москва, срочно к неврологу, хороший невролог москва, УЗИ сосудов головы и шеи, ЭЭГ москва, ЭНМГ платно, невролог рядом"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title" content="Медицинская Сервисная Компания. Неврология в Москве — госпитализация и лечение сложных неврологических случаев. Звоните! 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Срочная консультация невролога в Москве: лечение головных болей, остеохондроза, инсульта, парезов, невралгии. Комплексная диагностика и госпитализация — быстро и надёжно." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/neurology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Неврология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Неврология в Москве." />
            </Head>
            <Box>

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/directions/6.webp" title="неврология в москве" />

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        В партнерских медицинских учреждениях{' '}
                        <Box component="span" sx={{ color: 'var(--red)' }}>неврологические подразделения</Box> оснащены
                        всем необходимым для комплексного обследования и терапии пациентов с разнообразными
                        заболеваниями нервной системы.
                    </BaseText>
                    <BaseText style={{ display: 'box', marginBottom: '10px' }}>
                        Современное оборудование, включая сканеры МРТ/КТ, УЗИ-оборудование, аппаратуру для ЭЭГ и
                        ЭМГ исследований, а также полный спектр лабораторных анализов, обеспечивает глубокое
                        диагностирование.
                    </BaseText>
                    <BaseText>
                        Палаты одноместные с высоким уровнем комфорта: телевидение, телефон, личные санузлы со
                        встроенными душевыми кабинами.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Коллектив профессионалов включает:" />

                    <List>
                        {neurologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="В свободные от процедур моменты пациентам доступны:" />

                    <List>
                        {neurologyList2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        После стационара возможна переадресация в специализированный Реабилитационный Центр для
                        продолжения восстановительного лечения.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2
                        title="Спектр неврологических заболеваний, с которыми успешно справляются наши врачи:" />

                    <List>
                        {neurologyList3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Методы диагностики включают:" />

                    <List>
                        {neurologyList4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Индивидуальный подход к лечению основывается на:" />

                    <List>
                        {neurologyList5.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Лечение охватывает следующие заболевания:" />

                    <List>
                        {neurologyList6.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Противопоказания к госпитализации:" />

                    <List>
                        {neurologyList7.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Особое внимание уделяется лечению хронических болей в спине:" />

                    <List>
                        {neurologyList8.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Реабилитация после инсультов включает:" />

                    <List>
                        {neurologyList9.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Для пациентов с вестибулопатиями проводится совместная работа с ЛОР-врачами,
                        обеспечивающая адекватное восстановление равновесия.
                    </BaseText>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Лечение невротических расстройств предполагает:" />

                    <List>
                        {neurologyList10.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>
                </Box>

                <Box
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Мониторинг состояния пациентов осуществляется неврологами в сотрудничестве с
                        психиатрами, что обеспечивает оптимальные сроки лечения.
                    </BaseText>
                </Box>

                <PartnersBlock title="платный стационар неврологии" color="var(--red)" />

                <BaseCallBlock />

                <BasePhotoGallery imagesList={neurologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
