import { Box, Link, List, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { BaseH2 } from '@/components/base/BaseH2';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { cardiologyImages } from '@/config/images';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { cardiologyList2, cardiologyList3 } from '@/config/directions/cardiology';
import { BaseLi } from '@/components/base/BaseLi';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Cardiology() {
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
                Кардиология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Кардиология в Москве | Медицинская Сервисная Компания. Звоните! 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Организуем кардио лечение в ведущих клиниках Москвы. Госпитализация без ОМС, из регионов и СНГ. Срочные и плановые операции. Полное сопровождение."
                />
                <meta
                    name="keywords"
                    content="кардиология платная госпитализация, платная больница кардиология, платный стационар кардиология, платная госпитализация в москве кардиология, платная кардиология москва, кардиолог москва платно, услуги кардиолога в москве, кардиология без омс, лечение сердца в москве, диагностика сердца москва, платный прием кардиолога"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Кардиология в Москве — платная госпитализация и организация операций. Звоните! 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Организуем кардио лечение в ведущих клиниках Москвы. Госпитализация без ОМС, из регионов и СНГ. Срочные и плановые операции. Полное сопровождение." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/cardiology" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Кардиология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Кардиология в Москве — диагностика и лечение сердца." />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/directions/5.webp"
                    title="кардиология в москве"
                />

                <BaseCallBlock text="Экстренная госпитализация" />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        <Box component="span" sx={{ color: 'var(--red)' }}>В отделениях кардиологии</Box> у наших
                        партнеров всё строится не на чьих-то личных предпочтениях, а на
                        официальных протоколах: здесь внимательно следят за рекомендациями Минздрава России, берут на
                        вооружение клинические рекомендации Российского кардиологического общества, держат в поле зрения
                        последние позиции европейских и американских ассоциаций — то есть пользуются мировым опытом. Но
                        главное — каждое решение подкреплено данными доказательной медицины. Так что если вас лечат по
                        какому-то методу, значит, вопрос уже дотошно разбирали специалисты по всему миру. Это придаёт
                        уверенности и врачам, и пациенту: подходы выверены временем и исследованиями, а не продиктованы
                        настроением конкретного врача.
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
                        title="Мы специализируемся на лечении следующих состояний:"
                        marginBottom={true}
                    />

                    {/*<List>
                        {cardiologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Кардиология</Box> — словно сложный пазл, где
                        каждая деталька будто сама тянет одеяло на себя, и важно разобраться с каждой по отдельности.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Начнём с <Box component="span" sx={{ color: 'var(--red)' }}>острого коронарного синдрома</Box>.
                        Это понятно: тот случай, когда сердце внезапно даёт сбой
                        на фоне проблем с коронарными сосудами. Причём проявления у всех разные — кто-то приходит с
                        классическим инфарктом (на ЭКГ прямо видно подъём ST), а у кого-то без этого «подъёма» вовсе
                        обходится (то есть нестабильная стенокардия или инфаркт без подъема ST). Реальность такова:
                        симптомы играют в прятки, и клинику порой приходится распутывать буквально по ниточкам.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Дальше идут <Box component="span" sx={{ color: 'var(--red)' }}>гипертонические кризы</Box>. Это
                        когда давление взлетает так резко и высоко, что организм
                        успевает выдать целый спектакль: головная боль, шум в ушах, мелькание мушек перед глазами — и
                        всё это часто ночью или под утро, когда обычно никто серьёзных проблем не ждёт.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Сбои ритма сердца</Box> — ещё одна «личная
                        драма» организма. Особенно пароксизмальные перебои: вроде
                        всё спокойно - шаг за шагом, а тут вдруг как накроет приступ мерцания или трепетания
                        предсердий...
                        Пациент ощущает это очень остро — появляется чувство паники, нехватки воздуха.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Острая сердечная недостаточность</Box> тоже
                        редко развивается поступательно. Это всегда интенсивно и
                        тревожно: внезапно ноги отекают, дышать тяжело даже лёжа. Бывает и наоборот — человек тихонько
                        скатывается в хроническую форму: слабость, быстрая утомляемость — современный житель частенько
                        списывает на усталость. Между тем… сердце медленно сдаёт позиции.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Другие истории — <Box component="span" sx={{ color: 'var(--red)' }}>миокардит и перикардит</Box>.
                        Воспаления вроде бы похожие по названию (миокард
                        затрагивает мышцу сердца, перикард — наружную оболочку), а вот причин море: от вирусов до
                        аутоиммунных явлений. И хроника здесь любит оставаться в тени острого эпизода.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Инфекционный эндокардит</Box> долго не
                        афиширует себя: температура скачет, суставы ломят, на первый
                        взгляд обычное инфекционное заболевание. Пока врач случайно не услышит подозрительный шум над
                        клапаном.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Тромбоэмболии</Box> вообще отличаются
                        коварством — особенно если речь идёт о попадании тромба в
                        лёгочную артерию. Это может произойти совсем внезапно (один момент всё хорошо, а потом
                        стремительная одышка и боль).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Далее — <Box component="span" sx={{ color: 'var(--red)' }}>ишемическая болезнь сердца</Box> во
                        всех своих проявлениях. Острая фаза? Типичная ангина или
                        инфаркт. Но чаще люди живут годами с хроническим течением (сосуды уже поражены, но организм
                        умудряется держаться на плаву).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Повышенное давление</Box> бывает разное:
                        иногда это просто симптом чего-то другого (например, болезни
                        почек), а иногда самостоятельная история с осложнениями вроде гипертонической болезни.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        В кардиологии вообще много нюансов с аритмиями и нарушениями проводимости сигнала—
                        экстрасистолии (кажется мелочью, но могут испортить даже спокойный день), <Box component="span"
                                                                                                       sx={{ color: 'var(--red)' }}>приступы
                        тахикардий или мерцательной аритмии</Box> вплоть до более сложных блокад (СССУ).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Кардиомиопатии</Box> всегда заслуживают
                        отдельной главы: от дилатационной до гипертрофической формы —
                        каждой своя история происхождения и особенности проявлений.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Ну и наконец — <Box component="span" sx={{ color: 'var(--red)' }}>хроника сердечной
                        недостаточности</Box>. Этот диагноз часто встречается в жизни пожилых
                        людей; ни разу не слышал истории «просто жил без забот», если сердце работало со сбоями долгие
                        годы.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        В общем, каждое из этих состояний — словно отдельная сцена многосерийного фильма про сердце;
                        сценарий каждый раз свой, но итог один: к сердечно-сосудистым заболеваниям невозможно относиться
                        пренебрежительно ни пациенту, ни врачу.
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
                        title="В нашем отделении осуществляется:"
                        marginBottom={true}
                    />

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        1. Выбор и подготовка пациентов для оказания высокотехнологичной помощи при острых
                        коронарных синдромах, а также в рамках долгосрочного лечения ИБС.
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
                        2. Применение диагностических методов:
                    </Typography>
                    <List>
                        {cardiologyList2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <br />
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        3. Диагностические исследования:
                    </Typography>
                    <List>
                        {cardiologyList3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>

                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: 22, sm: 28 },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}
                    >
                        4. Рентгенологические исследования органов грудной клетки.
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
                        5. Система экстренного оповещения (сигнализации) в реанимационных палатах.
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
                        6. Кислородотерапия и интенсивная терапия с круглосуточным мониторингом основных
                        показателей жизнедеятельности.
                    </Typography>
                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        В реанимационной палате предусмотрено всё, чтобы в случае клинической смерти можно было
                        оперативно начать сердечно-легочную реанимацию — не просто “по протоколу”, а с полной
                        технической поддержкой (от дефибрилляторов до современного мониторинга). Тут каждая секунда на
                        счету, и пространство реально рассчитано так, чтобы врачи не отвлекались ни на какие мелочи —
                        все нужное оборудование под рукой.
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
                        title="Дополнительные направления деятельности:"
                        marginBottom={true}
                    />

                    {/*<List>
                        {cardiologyList4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        О чем еще приходится заботиться помимо работы с пациентами один на один? Вот тут можно удивиться
                        тому, насколько многослойна эта сфера.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Во‑первых, консультации для коллег из других отделений и клиник. Причём это не просто
                        формальность или «для галочки». Порой обсуждаем сложные случаи — когда диагноз лежит где-то на
                        стыке кардиологии и ещё пяти дисциплин. Такие моменты всегда напоминают: медицина работает как
                        слаженная команда, а не набор изолированных специалистов.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Дальше — реабилитация для людей с заболеваниями сердца. Если коротко, то это не только про
                        приборы и физические упражнения, а про то, чтобы помочь человеку заново привыкнуть жить и
                        радоваться после того, как мир под ногами как будто качнулся (например, после инфаркта). С
                        каждой такой программой становится всё очевиднее: вернуться к нормальной жизни – это работа не
                        только медикаментов.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        И ещё — просветительская деятельность. Профилактика сердечно-сосудистых заболеваний звучит
                        просто, но вот выйти к людям с реальными историями и объяснить, почему давление нельзя
                        игнорировать даже в тридцать лет — иногда больше половины успеха всей работы. Когда после лекций
                        кто-то говорит: «Я наконец измерил маме давление» — понимаешь, всё было не зря.
                    </BaseText>

                </Box>

                <PartnersBlock title="платный стационар кардиология" color="var(--red)" />

                <BaseCallBlock text="Остались вопросы? Звоните!" />

                <BasePhotoGallery imagesList={cardiologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
