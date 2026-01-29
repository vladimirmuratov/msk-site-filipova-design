import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { pneumoniaImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Pneumonia() {
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
                Пневмония
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Пневмония: симптомы и лечение | Медицинская Сервисная Компания. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Пневмония: основные симптомы, методы диагностики и эффективное лечение. Как распознать воспаление лёгких и когда обращаться к врачу. Современные подходы к терапии. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="пневмония, воспаление лёгких, симптомы пневмонии, лечение пневмонии, диагностика пневмонии, признаки воспаления лёгких, температура при пневмонии, кашель при пневмонии, пневмония у взрослых, как лечить пневмонию, осложнения пневмонии, вирусная пневмония, бактериальная пневмония"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Пневмония: симптомы и лечение. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Пневмония: основные симптомы, методы диагностики и эффективное лечение. Как распознать воспаление лёгких и когда обращаться к врачу. Современные подходы к терапии. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/diseases/pneumonia" />
                <meta property="og:image"
                      content="https://msk-group-hospital.vercel.app/images/diseases/pneumonia/pneumonia1.webp" />
                <meta property="og:image:alt" content="лечение пневмонии. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Пневмония: симптомы и лечение. 8 (499) 719-81-00, 24/7" />

                <link rel="canonical" href="https://msk-group-hospital.vercel.app/diseases/pneumonia"/>
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/pneumonia/pneumonia1.webp"
                    title="лечение пневмонии"
                    // bgPosition="top"
                />

                <BaseCallBlock text="Консультация" />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Пневмония</Box> — штука
                        коварная. Это когда воспаление поражает ткани легких, и если честно, долго может притворяться
                        чем-то совершенно безобидным, вроде затянувшейся простуды или сезонного кашля. Казалось бы,
                        просто недомогание: слабость, температура, неприятный кашель. Мы уставшие думаем — ну, полежу
                        пару дней с чайком и пройдёт... А за это время воспаление набирает обороты.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '25px' }}>
                        В чём подвох? <Box component="span" sx={{ color: 'var(--red)' }}>Заболевание
                        инфекционное и зачастую довольно агрессивное:</Box> цепляется к тем же самым клеткам лёгких и
                        запускает в них настоящий пожар. Иногда процесс развивается стремительно — лихорадка
                        подскакивает за считанные часы, дыхание становится тяжёлым; иногда—крадётся медленно, давая
                        совсем смазанные сигналы.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        Так вот, задача — не уступить этой болезни фору именно на старте. Если симптомы (упорный кашель,
                        одышка не по делу, “ломота” во всём теле) не проходят несколько дней или усиливаются — пора
                        показываться врачу. Лучше перестраховаться один раз — чем потом сожалеть об упущенном времени.
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
                        title="Симптомы пневмонии у взрослых и детей"
                        marginBottom={true}
                    />

                    {/*<List>
                        {pneumonia1.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Поначалу пневмония может маскироваться под
                            обычную простуду:</Box> тут тебе и кашель, который то набирает обороты, то будто стихает.
                        Иногда он сухой, но чаще становится влажным — сам по себе раздражает, а еще затрудняет дыхание.
                        Температура к этому добавляет масла в огонь: градусник легко перескакивает за привычные 37°C,
                        тело знобит, случаются приступы настоящей лихорадки (особенно у детей — не удивляйтесь, если
                        ребенок вдруг весь раскраснеется и начнет дрожать).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '25px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Дыхание тяжелеет</Box> почти у всех — с виду
                        это похоже на одышку после бега, только человек никуда не спешил, а легкие будто забыли, как
                        работать в полную силу. Плюс, при каждом глубоком вдохе или попытке откашляться пробегает <Box
                        component="span" sx={{ color: 'var(--red)' }}>резкая боль в груди</Box> —
                        словно кто-то стягивает ребра тугим обручем. А если болезнь затянулась, <Box component="span"
                                                                                                     sx={{
                                                                                                         color: 'var(--red)'
                                                                                                     }}>накатывает
                        усталость</Box> — не та приятная после долгой прогулки, а липкая, обессиливающая. <Box
                        component="span" sx={{ color: 'var(--red)' }}>Голова ноет</Box> и всё кажется
                        тяжелее обычного.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        Вот так <Box component="span" sx={{ color: 'var(--red)' }}>вирусная или бактериальная
                        пневмония</Box> заставляет организм сигналить со всех сторон: телу явно трудно справляться без
                        помощи.
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Представь ситуацию:</Box> у человека
                        развивается пневмония, но привычной лихорадки нет, температура остается нормальной. Такое чаще
                        встречается у пожилых или людей с ослабленным иммунитетом — и вот тут медицина сталкивается с
                        дополнительным вызовом. Организм будто бы «пропускает» классический сигнал тревоги, а мы
                        привыкли ловить проблему по жару и ознобу. И получается, что пневмония может подкрасться
                        незаметно — пациент просто ощущает слабость или затруднённое дыхание, а диагноза всё нет. По
                        этой причине врачу приходится быть особенно внимательным к малейшим изменениям состояния — любое
                        ухудшение дыхания или устойчивое чувство разбитости могут многое значить. Грубо говоря, если
                        раньше ориентировались на температуру как на прожектор во тьме, теперь приходится приглядываться
                        к гораздо более тусклым огонькам.
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
                        title="Диагностика пневмонии"
                        marginBottom={true}
                    />

                    {/*<List>
                        {pneumonia2.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>К диагностике пневмонии мы подходим
                            вдумчиво</Box> — здесь нельзя просто положиться на одно обследование и вынести вердикт. Всё
                        начинается с консультации у пульмонолога. Это не формальность: врач не только расспрашивает о
                        симптомах, но зачастую ловит нюансы, которые трудно заподозрить «на глаз» или по рассказу
                        пациента.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Затем — та самая <Box component="span" sx={{ color: 'var(--red)' }}>прослушка лёгких</Box>,
                        которую многие помнят с детства: аускультация. Глухие или жесткие хрипы иногда выдаются даже до
                        снимка, и опытный специалист услышит эти нюансы.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Если есть хоть тень сомнения — делаем <Box component="span"
                                                                   sx={{ color: 'var(--red)' }}>рентген</Box>. Картинка
                        сразу даёт понять, что происходит в лёгких: одно дело — бронхит, совсем другое — затемнение,
                        характерное для очага воспаления.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Ну и лаборатория подключается обязательно: <Box component="span" sx={{ color: 'var(--red)' }}>анализы
                        крови</Box> (туда же пойдёт и ПЦР-тестирование, если есть подозрение на инфекцию), плюс <Box
                        component="span" sx={{ color: 'var(--red)' }}>исследуем мокроту</Box> — иногда именно там
                        «выстреливает» причина болезни.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '25px' }}>
                        Если ситуация спорная или требуется увидеть картину максимально чётко, на помощь приходит <Box
                        component="span" sx={{ color: 'var(--red)' }}>компьютерная томография грудной клетки</Box>. Она
                        особенно полезна при сложных случаях или если обычный рентген не дал однозначного ответа.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        Каждый шаг дополняет другой — так удаётся не только поставить диагноз уверенно, но и подобрать
                        лечение, которое действительно работает.
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
                        title="Лечение пневмонии"
                        marginBottom={true}
                    />

                    {/*<List>
                        {pneumonia3.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Лечение пневмонии</Box> — это всегда история
                        про индивидуальный подбор решений. Заболели вы легко, или болезнь залетела с размахом? Причину
                        вызвал вирус или бактерия? Всё это определяет наш «рецепт» для каждого отдельного случая.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Начнем с основ — <Box component="span" sx={{ color: 'var(--red)' }}>современные препараты</Box>.
                        На деле, это не просто «антибиотик и отдых»: сначала точечно подбираем лекарство под возбудителя
                        (даже если он прячется за широкой спиной вируса или бактерии), чтобы попасть прямо «в цель».
                        Если температура скачет, применяем жаропонижающее, а кашель мешает спать и работать — добавляем
                        отхаркивающие средства. Это помогает не просто сбить симптом, а действительно поддержать
                        организм в борьбе.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Иногда нужно подключить тяжелую артиллерию: тут на помощь приходят <Box component="span"
                                                                                                sx={{ color: 'var(--red)' }}>ингаляции
                        и кислород</Box> — особенно если дыхание затруднено, и легкие требуют поддержки здесь и сейчас.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Сложные формы — это уже
                            стационар:</Box> круглосуточное наблюдение врачей, постоянная коррекция схемы лечения и
                        забота о каждой мелочи. Такой подход спасает жизни, когда счет идет буквально на часы.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '25px' }}>
                        После того как острые проявления отступили, мы не отпускаем пациента «гулять» без подготовки.
                        Здесь вступает в игру <Box component="span" sx={{ color: 'var(--red)' }}>физиотерапия и
                        специальные дыхательные упражнения</Box>. Много кто склонен ими пренебрегать, но на практике
                        именно они ускоряют восстановление легких и возвращение к активной жизни.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        Всё лечение строится на реальных потребностях человека перед нами — никаких стандартных подходов
                        «для всех». Пневмония бывает разная (это подтвердит любой врач), поэтому и помощь у нас всегда
                        адресная.
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Заниматься самолечением при воспалении
                            лёгких</Box> — это, по сути, играть в рулетку со своим здоровьем. Тут ставка слишком высока:
                        если пустить всё на самотёк или полагаться только на домашние методы, легко можно нарваться на
                        серьёзные проблемы. Например, воспаление может перекинуться на плевру (это называется плеврит),
                        может образоваться гнойник в лёгком — абсцесс, или дыхание станет настолько затруднённым, что
                        организму банально не хватит воздуха.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '25px' }}>
                        На практике это не редкость: человек пару дней полечится травками и таблетками "от кашля", а потом попадает в больницу уже с тяжелыми осложнениями. Поэтому если вы подозреваете у себя пневмонию — лучше не гадать и записаться к врачу. Поймать болезнь в самом начале проще, чем потом бороться с её последствиями.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px', color: 'var(--red)' }}>
                        Не откладывайте визит к пульмонологу — если пневмония настигла, время действительно играет против нас. Чем раньше начнем разбираться с этой историей, тем больше шансов вернуть дыхание в норму и не нажить себе ненужных последствий вроде затяжного кашля или хронической слабости. Иногда кажется, что "само пройдет", но легкие таких экспериментов не любят. Лучше уж встретиться со специалистом сейчас и выдохнуть спокойно потом.
                    </BaseText>
                </Box>

                <BaseCallBlock />

                <BasePhotoGallery imagesList={pneumoniaImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

