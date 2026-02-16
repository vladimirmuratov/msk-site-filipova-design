import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { endoprostheticsImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';
import { endoprosthetics2 } from '@/config/directions/endoprosthetics';
import { BaseLink } from '@/components/base/BaseLink';
import { useScrollPosition } from '@/lib/useScrollPosition ';

export default function Endoprosthetics() {
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
                Эндопротезирование
            </Typography>,
        ];
    };

    useScrollPosition('Endoprosthetics');

    return (
        <>
            <Head>
                <title>
                    Эндопротезирование суставов в Москве | Медицинская Сервисная Компания. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Организуем эндопротезирование суставов в Москве: подбор клиники, госпитализация без ОМС, транспортировка, лечение под ключ. Работаем с регионами и СНГ."
                />
                <meta
                    name="keywords"
                    content="эндопротезирование, замена сустава, эндопротезирование сустава, платная госпитализация, эндопротезирование в Москве, госпитализация без ОМС, замена тазобедренного сустава, замена коленного сустава, медицинская транспортировка, госпитализация из региона, операция по замене сустава, лечение суставов Москва, протезирование суставов, плановая госпитализация, эндопротез Москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Эндопротезирование суставов в Москве — госпитализация под ключ. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Организуем эндопротезирование суставов в Москве: подбор клиники, госпитализация без ОМС, транспортировка, лечение под ключ. Работаем с регионами и СНГ." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/directions/endoprosthetics" />
                <meta property="og:image" content="https://msk-group-hospital.vercel.app/images/endoprosthetics/1.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Эндопротезирование суставов в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Эндопротезирование суставов в Москве." />

                {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/directions/endoprosthetics"/>*/}
                <link rel="canonical" href="https://msk-group-hospital.vercel.app/"/>
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/endoprosthetics/1.webp"
                            title="Эндопротезирование коленного и тазобедренного суставов" />

                <BaseCallBlock text="Запись на консультацию" />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Когда привычное движение — шагнуть, присесть, повернуться — становится испытанием из-за боли в
                        колене или бедре, эндопротезирование приходит как настоящее облегчение. По сути, это операция,
                        во время которой изнашивавшийся до предела сустав <Box component="span"
                                                                               sx={{ color: 'var(--red)' }}>аккуратно
                        заменяют на современный искусственный имплантат</Box>. Предчувствие потери активности для многих
                        оказывается куда
                        тяжелее самой операции — ведь боль преследует при каждом движении, сковывает жизнь.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>После эндопротезирования ситуация
                            меняется</Box>: хроническая боль уходит, многие снова без опаски поднимаются по лестнице или
                        гуляют в парке. Эта операция возвращает свободу тем, кого артроз, артрит, дисплазия или
                        серьезная травма были прочно «приковали» к ограниченному образу жизни. Ну и самое приятное —
                        реальные истории восстановления после такого вмешательства десятками лет доказывают: иногда
                        надежда получить вторую «опору» под ногами вполне оправданна.
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
                        title="Когда необходимо эндопротезирование?"
                        marginBottom={true}
                    />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText style={{ display: 'block', }}>Когда действительно приходит время задуматься об
                            эндопротезировании? Если говорить проще — когда без замены сустава уже ни туда, ни сюда. Вот
                            какие ситуации чаще всего подталкивают к этому решению:</BaseText>
                    </Box>

                    {/*<List>
                        {endoprosthetics1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Деформирующий остеоартроз</Box> (те самые
                        злополучные артрозы: <Box component="span" sx={{ color: 'var(--red)' }}>коксартроз</Box> — если
                        страдают тазобедренные суставы, <Box component="span"
                                                             sx={{ color: 'var(--red)' }}>гонартроз</Box> — когда "ноют"
                        колени). Поначалу кажется, что можно потерпеть или обойтись мазями, но со временем боль берет
                        верх, а движения становятся всё менее доступными.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Асептический некроз головки бедренной
                        кости</Box> — штука серьезная. Кровоснабжение нарушается, ткань медленно погибает — и сустав
                        буквально начинает “сыпаться” изнутри. Не восстановить его ни реабилитацией, ни просто покоем.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Последствия серьезных травм</Box>. Бывает,
                        после перелома или вывиха сустав так и не возвращается в нормальное состояние: появляются
                        скованность, боли, даже простые движения становятся испытанием.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Врожденные патологии</Box> — например, <Box
                        component="span" sx={{ color: 'var(--red)' }}>дисплазия тазобедренного сустава</Box>. Если
                        такие проблемы дать “дорасти” до взрослого возраста (или они себя во взрослом впервые
                        проявляют), то нередко обходится только хирургией.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — Ну и тот случай, <Box component="span" sx={{ color: 'var(--red)' }}>когда предыдущая операция
                        или попытка починить перелом дала сбой</Box>. Когда чужой шов не прижился или пластина не
                        справилась — вот тут эндопротезирование тоже выходит на сцену.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Самое интересное</Box>: для каждого эти
                        причины проявляются по-своему. Кто-то годами мучается с болью в суставе и никак не решится на
                        операцию, другие “доходят” до нее за пару месяцев из-за неожиданного осложнения. Но общий
                        знаменатель один — возвращение к нормальной жизни возможно именно спустя замену сустава.
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
                        Когда все попытки помочь суставу обходятся без операции — лекарства, физиотерапия, смена
                        привычек — а боль только крепчает и уже не даёт жить нормально (двигаться сложно, простые вещи
                        превращаются в испытание), выход остаётся один: искусственный сустав. Это тот случай, когда
                        жизни становится однозначно комфортнее после замены — ведь мучиться ради принципа смысла нет.
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
                        title="Какие операции организуем"
                        marginBottom={true}
                    />
                    <Box
                        sx={{
                            marginY: '15px'
                        }}
                    >
                        <BaseText>Наиболее часто проводятся:</BaseText>
                    </Box>

                    <Box>
                        {endoprosthetics2.map((link) => <BaseLink key={link.id} {...link} />)}
                    </Box>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseH2
                        title="Как проходит операция?"
                        marginBottom={true}
                    />

                    <BaseText>
                        Давай расскажу, как всё обычно происходит. <Box component="span" sx={{ color: 'var(--red)' }}>Операцию
                        делают под мощной анестезией</Box> — либо общей, когда человек спит крепким сном, либо
                        спинальной (тут обезболивают только нижнюю часть тела, и пациент в сознании).
                        <br />
                        <Box component="span" sx={{ color: 'var(--red)' }}>Сам процесс напоминает ювелирную работу</Box>:
                        хирурги аккуратно убирают те фрагменты сустава, которые уже «отжили своё» и больше не работают
                        как надо.
                        <br />
                        На их место <Box component="span" sx={{ color: 'var(--red)' }}>ставят протезы, подобранные под
                        конкретного человека</Box> — никакой универсальности «на всех», всё индивидуально. Материалы
                        используют такие, чтобы организм с ними "подружился": они прочные и – что особенно важно –
                        биосовместимые.
                        <br />
                        <Box component="span" sx={{ color: 'var(--red)' }}>Благодаря современным техникам операция стала
                            не такой травматичной</Box>: врачи стараются максимально щадить окружающие ткани. В
                        результате человек не только отметает ненужную боль и скованность движения – восстановление
                        после вмешательства идёт куда быстрее, чем лет двадцать назад.
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
                        title="Виды протезов"
                        marginBottom={true}
                    />

                    {/*<List>
                        {endoprosthetics3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Когда речь заходит о протезах, быстро понимаешь: универсального решения здесь не существует. Всё
                        зависит от деталей — возраста, состояния кости, насколько активен человек в повседневной жизни
                        (и тут «прогулки по парку» и «ежедневные тренировки» — совсем разные истории), да и просто от
                        индивидуальных особенностей организма.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Если попытаться разложить всё по полочкам, обычно выделяют три варианта:
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Цементные протезы</Box>. Само название
                        говорит само за себя — такие импланты фиксируют в костной ткани
                        с помощью особого медицинского цемента. Это напоминает то, как крепят плитку на полу: цемент
                        заполняет все мельчайшие щели между протезом и костью, что особенно важно у пожилых людей или
                        пациентов с ослабленной костной тканью (косточка уже не такая прочная, чтобы держать что-то
                        просто так).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Бесцементные протезы</Box> действуют иначе:
                        их поверхность специально делают пористой — словно губка.
                        Идея в том, что со временем костная ткань буквально врастает в эти мельчайшие поры (представьте
                        себе корни растения, прорастающие сквозь рыхлую почву). Такой способ лучше подходит молодым
                        людям с хорошей плотностью костей — если позволить кости взять всё дело в свои руки (или скорее
                        клетки), фиксация в перспективе выходит очень надёжной.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Гибридные протезы</Box>. Это нечто среднее
                        между двумя предыдущими вариантами: часть
                        конструкции закрепляют на цементе, а другую часть доверяют естественному врастанию. Например,
                        чашку тазобедренного сустава делают бесцементной, а ножку крепят цементно (или наоборот — логика
                        зависит от конкретной задачи хирурга).
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        В одном случае главным критерием становится прочность кости и прогнозируемый результат операции;
                        в другом — скорость восстановления или возможный уровень физической активности после
                        вмешательства. Нет идеального ответа для всех — и это нормальная история для современной
                        медицины.
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
                        title="Реабилитация после эндопротезирования"
                        marginBottom={true}
                    />

                    {/*<List>
                        {endoprosthetics4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Про восстановление после эндопротезирования часто спрашивают: “А какими будут мои первые недели?
                        ” И вот тут самое интересное — не бывает универсального рецепта. Всё подбирается, как хороший
                        костюм: по размеру и с учетом деталей. Смотрят на возраст, качество костной ткани, насколько
                        человек активен вообще, есть ли какие-то особенности здоровья (ну и пару личных нюансов — кто-то
                        терпеть не может вставать рано, кому-то важна возможность заниматься дома).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Физкультуру и физиотерапию</Box> включают
                        практически всегда, просто дозируют нагрузки в зависимости
                        от того, насколько организм готов. Не перегибать палку тут принципиально — важно не форсировать
                        события, а выстроить плавный мостик обратно к привычному движению.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Вся история с реабилитацией строится под
                            конкретного человека</Box>: один встанет на ноги самоуверенно на третий день и рвётся
                        пройтись до лифта — другому потребуется немного больше времени и поддержка патронажной медсестры
                        прямо у себя дома (это ни о чём плохом не говорит; иногда такая поддержка — ключ к уверенности).
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Медицинский контроль</Box> тут как якорь —
                        врачи внимательно следят за динамикой и корректируют план восстановления при малейшей
                        необходимости. В итоге уже буквально через пару дней большинство пациентов делают свои первые
                        шаги с опорой (обычно это 2–3 сутки). Каждый этот шаг — всегда особенное чувство: вроде бы
                        мелочь, а воспринимается как победа.
                    </BaseText>

                </Box>

                {/*<PartnersBlock title="платные клиники москвы урология" color="var(--red)" />*/}

                <BaseCallBlock text="Запись на операцию" />

                <BasePhotoGallery imagesList={endoprostheticsImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
