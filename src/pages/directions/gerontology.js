import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { gerontologyImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseLi } from '@/components/base/BaseLi';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { gerontology4 } from '@/config/directions/gerontology';

export default function Gerontology() {
    const breadcrumbs = (router) => {
        return [
            <Link
                // href="/"
                component="button"
                onClick={() => router.push('/')}
                underline="hover"
                key="1"
                sx={{ color: 'var(--blue)!important', fontWeight: 400 }}
            >
                Главная
            </Link>,
            <Typography key="2" sx={{ color: 'var(--gray)' }}>
                Геронтология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Геронтология в Москве | Медицинская Сервисная Компания. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Услуги геронтолога в Москве: лечение пожилых, госпитализация без ОМС, перевод пациентов, патронаж. Помогаем пожилым людям — быстро, профессионально, с заботой."
                />
                <meta
                    name="keywords"
                    content="геронтология, помощь пожилым, лечение пожилых людей, геронтолог в Москве, госпитализация пожилых, патронаж, уход за пожилыми, медицинская помощь престарелым, платная госпитализация Москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Геронтология в Москве — помощь пожилым, госпитализация, патронаж. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Услуги геронтолога в Москве: лечение пожилых, госпитализация без ОМС, перевод пациентов, патронаж. Помогаем пожилым людям — быстро, профессионально, с заботой." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/directions/gerontology" />
                <meta property="og:image" content="https://msk-group-hospital.vercel.app/images/gerontology/1.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Геронтология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Геронтология в Москве." />

                <link rel="canonical" href="https://msk-group-hospital.vercel.app/directions/gerontology"/>
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/gerontology/1.webp"
                            title="Госпитализация пожилых пациентов (геронтологическое отделение)" />

                <BaseCallBlock text="Запись на консультацию" />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Геронтология</Box> — штука гораздо более
                        тонкая, чем просто изучение «старости». Это целый подход к жизни и здоровью людей, чей возраст в
                        паспорте уже давно перешагнул некогда страшные цифры. По сути, это попытка разобраться: как
                        именно наш организм меняется с годами? Почему вчерашние привычки вдруг перестают работать, а
                        тело периодически подкидывает нам сюрпризы вроде хронических болячек, быстрой утомляемости или
                        забытых имен друзей из детства? Всё это — закономерная плата за пройденные десятки лет.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Но дело здесь далеко не только в медицинских аспектах. В реальности <Box component="span"
                                                                                                 sx={{ color: 'var(--red)' }}>геронтология
                        — это поиск баланса между поддержкой тела (чтобы не сдавало раньше времени) и заботой о душе и
                        разуме</Box>.
                        Потому что мало кому хочется прожить сто лет просто по количеству дней — куда важнее наполнить
                        каждый из них смыслом, радостью встреч или пусть даже спокойствием домашних вечеров.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '35px' }}>
                        Мы в <Box component="span" sx={{ color: 'var(--red)' }}>Медицинской Сервисной
                        Компании</Box> смотрим на эту задачу широко: помогаем пожилым людям не просто лечиться или
                        наблюдаться «на всякий случай», а строить жизнь максимально комфортно здесь
                        и сейчас. Кому-то действительно нужно постоянное внимание врача, кому-то — бережный уход дома
                        или помощь после операции. Есть те, у кого за плечами затяжная болезнь или сильное одиночество.
                        Для всех этих историй мы подбираем своё решение: будь то диагностика состояния здоровья без
                        очередей, организация госпитализации или сопровождение для самых уязвимых и тяжелобольных.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--blue)', paddingLeft: '25px' }}>
                        Короче говоря, наш подход — про поддержку не только тела, но часто и самого чувства стабильности
                        в этом новом для человека возрасте.
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
                        title="Вот что реально делает современная геронтология"
                        marginBottom={true}
                    />

                    {/*<List>
                        {gerontology1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Разбирается с возрастными болячками</Box>.
                        Это когда давление скачет, память потихоньку ускользает,
                        суставы ноют на погоду, а сахар держит в напряжении — врачи-геронтологи умеют в этом
                        разбираться. Их задача — не просто выдать список таблеток, а увидеть комплексную картину: почему
                        так случилось, что можно сделать здесь и сейчас, как жить максимально комфортно.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Помогает с госпитализацией</Box>. Не только
                        планово — например, на обследование или операцию — но и
                        в острых случаях, когда промедление опасно. Причём организовать всё это быстро бывает довольно
                        сложно, особенно если речь о пожилых людях с букетом диагнозов.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Помогает найти «свою» клинику</Box>. Москву
                        сейчас не назовёшь городом с дефицитом медцентов, но
                        выбирая между отделением при районной поликлинике и специализированным центром по работе с
                        пожилыми людьми — разница колоссальная. Можно подобрать место и под конкретный случай.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Организует медицинский патронаж дома</Box>.
                        Когда сил ехать в больницу уже совсем нет (или хочется
                        забыть про коридоры стационаров), возникает потребность во внимательном уходе на дому: контроль
                        давления/сахара/лекарств, помощь с бытовыми вещами, сопровождение к врачу.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Решает вопросы перевода между больницами и
                        регионами</Box>. Иногда нужно перевести пациента из одной
                        клиники в другую — или даже привезти из другого города или страны СНГ туда, где есть возможность
                        получить нужное лечение. Тут без специальной организации никак.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Помогает неподвижным и тяжелобольным
                        людям</Box>. Не все могут сами дойти до врача или передвигаться
                        по больнице; тут надо всё продумать — койка для транспортировки, специально обученный персонал,
                        индивидуальный уход.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '35px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Находит выход даже в ситуациях без
                        ОМС</Box>. Бывает так: у человека нет страхового полиса по
                        какой-то причине (документы потерялись или вовсе никогда не было) — команда помогает решать
                        такие каверзные моменты: юридические нюансы, оформление бумаг, поиск вариантов лечения.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        В общем, задача геронтологии такая же живая и многослойная, как сами её пациенты: помочь
                        человеку сохранить качество жизни независимо от пасспорта и текущего состояния здоровья — иногда
                        делая невозможное возможным.
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
                        title="Виды госпитализации пожилых людей"
                        marginBottom={true}
                    />

                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        Госпитализация пожилого человека — это всегда история не только про медицинские решения, но и
                        про заботу, взвешивание рисков, тревогу близких. Есть разные сценарии, когда такая помощь
                        становится необходимой, и каждый из них требует особого подхода.
                    </BaseText>

                    <List>
                        {gerontology4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <BaseText style={{
                        display: 'block',
                        borderLeft: '2px solid var(--red)',
                        paddingLeft: '25px',
                        marginTop: '30px'
                    }}>
                        Каждый вид госпитализации по-своему важен — это про возможность выбрать наилучший вариант помощи
                        для конкретного человека здесь и сейчас.
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
                        title="Индивидуальный подход к каждому пожилому пациенту"
                        marginBottom={true}
                    />

                    {/*<List>
                        {gerontology2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>С пожилыми пациентами всё всегда немного
                            сложнее</Box> — здесь просто рецепт и улыбка уже не
                        сработают. У каждого свой “букет” хронических заболеваний, привычек, страхов и нюансов со
                        здоровьем. Поэтому наши врачи и координаторы буквально становятся детективами: копаются в
                        анамнезе, учитывают сопутствующие проблемы (например, давление скачет или есть сахарный диабет),
                        смотрят на общее состояние, чтобы не пропустить ничего важного. Это уже не про “стандартное
                        лечение”, а про очень тонкую настройку под человека.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Когда дело доходит до выбора клиники</Box>,
                        тут тоже нельзя опираться только на красивую вывеску или
                        поближе к дому. Мы поможем подобрать то место, где есть необходимое оборудование и профильные
                        специалисты — иногда это федеральные центры или ведомственные учреждения вроде госпиталей
                        МВД/Минобороны.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        И для многих ключевой вопрос — <Box component="span"
                                                            sx={{ color: 'var(--red)' }}>транспортировка</Box>. Не
                        каждый может легко добраться сам до больницы
                        (особенно если требуется сопровождение или специальные носилки). Поэтому у нас есть возможность
                        организовать поездку на медицинском транспорте с медработником — чтобы дорога была максимально
                        безопасной и спокойной.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        И ещё один важный момент: <Box component="span" sx={{ color: 'var(--red)' }}>про поддержку
                        родственников мы не забываем</Box> вообще никогда. Объясняем
                        всё человеческим языком, держим связь от первой консультации до самого окончания лечения,
                        помогаем справляться с волнениями и бюрократией — иначе как вообще пережить этот марафон?
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        Когда речь заходит о здоровье пожилого родственника, доверие тут выходит на первый план — ведь
                        хочется быть уверенным, что рядом окажется тот, кому действительно можно поручить самое важное.
                        У нас подход как раз про это: мы не просто подбираем специалиста “по анкете”, а создаём целую
                        систему заботы вокруг человека. С одной стороны, помогаем найти врача, который по-настоящему
                        подходит (не только по опыту, но и по характеру, потому что общение — половина дела). А с другой
                        — берем на себя бытовые вопросы: кто поможет с покупками или поддержит порядок в доме. В итоге
                        вы получаете не разрозненные услуги, а ощущение настоящей поддержки для всей семьи.
                    </BaseText>
                </Box>

                {/*<Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >

                    <BaseH2 title="Почему выбирают нас?" />

                    <List>
                        {gerontology3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                </Box>*/}

                {/*<PartnersBlock title="платные клиники москвы урология" color="var(--red)" />*/}

                <BaseCallBlock />

                <BasePhotoGallery imagesList={gerontologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
