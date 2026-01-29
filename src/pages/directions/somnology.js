import { Box, Link, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { somnologyImages } from '@/config/images';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Somnology() {
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
                Сомнология
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Лечение нарушений сна в Москве | Медицинская Сервисная Компания. Звоните! 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация при бессоннице, храпе, апноэ сна. Помощь сомнолога, обследование, лечение в Москве. Принимаем без полиса ОМС, с полным сопровождением."
                />
                <meta
                    name="keywords"
                    content="сомнолог москва платно, платная сомнология, лечение бессонницы, диагностика сна москва, храп лечение, апноэ сна, полисомнография москва, нарушение сна причины, остановка дыхания во сне, синдром беспокойных ног, сонливость днём, тревожный сон, плохой сон лечение, бессонница у взрослых, консультация сомнолога, центр сна москва"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Лечение нарушений сна в Москве — госпитализация без ОМС. Звоните! 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная госпитализация при бессоннице, храпе, апноэ сна. Помощь сомнолога, обследование, лечение в Москве. Принимаем без полиса ОМС, с полным сопровождением." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/directions/somnology" />
                <meta property="og:image" content="https://msk-group-hospital.vercel.app/images/banner-3.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Сомнология в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Сомнология в Москве." />

                <link rel="canonical" href="https://msk-group-hospital.vercel.app/directions/somnology"/>
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/directions/9.webp" title="сомнология в москве" />

                <BaseCallBlock />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        В нашем <Box component="span" sx={{ color: 'var(--red)' }}>отделении сомнологии</Box> всё
                        крутится вокруг одного вопроса: почему человек не может
                        нормально выспаться, и что с этим делать? Здесь работает команда людей из разных областей —
                        немного как врачи-детективы, которым интересен каждый сбой в ритме сна, каждая не дающая покоя
                        бессонница. Мы смотрим на сон со всех сторон: разбираемся в биологических причинах, обсуждаем
                        привычки пациентов, иногда даже анализируем влияние гаджетов перед сном.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        Все эти поиски были бы бесполезны без современных инструментов (от продвинутых диагностических
                        систем до технологий мониторинга сна на дому). Благодаря им мы можем разобраться даже в самых
                        запутанных случаях, когда “ничего не помогает” годами. Для многих наших пациентов это
                        оказывается чуть ли не первым настоящим шагом к нормальному ночному отдыху — тому самому, после
                        которого вставать по утрам приятно.
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
                        title="Отделение сомнологии специализируется на диагностике и терапии широкого спектра расстройств"
                        marginBottom={true}
                    />

                    {/*<List>
                        {somnologyList1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        В нашем отделении сомнологии мы сталкиваемся не просто с «проблемами сна», а с целым миром самых
                        разных его нарушений. Заходят пациенты с <Box component="span" sx={{ color: 'var(--red)' }}>хронической
                        бессонницей</Box> — те, кто ночами считает не овец, а тревоги и мысли о завтрашнем дне. Часто
                        вместе с этим появляется ещё одна беда: зависимость от снотворных. И вот уже человек не спит без
                        таблетки, а потом и с ней толку мало.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Дальше интереснее. <Box component="span" sx={{ color: 'var(--red)' }}>Гиперсомния</Box> — это
                        когда человеку постоянно клонит в сон среди бела дня, как ни старайся взбодриться, всё клонит
                        носом на рабочем совещании или за рулём (что вообще-то опасно). Или <Box component="span"
                                                                                                 sx={{ color: 'var(--red)' }}>нарколепсия</Box> —
                        загадочная штука: человек засыпает буквально на ходу, мозг подшучивает над ним самым неожиданным
                        образом.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Часто встречаем <Box component="span" sx={{ color: 'var(--red)' }}>нарушения циркадных
                        ритмов</Box> — когда реально работаешь или учишься сутками напролёт, а потом сутки же спишь.
                        Вроде ты и «современный человек», но твои биологические часы включили режим абсолютно другого
                        часового пояса.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Невротические состояния</Box> тоже никуда не
                        уходят — навязчивые переживания, депрессии. Из-за этого страдает и сон, и сама жизнь начинает
                        казаться тусклой.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Сонное апноэ и храп</Box> относят к «мужским
                        шалостям», но на деле это штуки серьёзные: мозг вдруг лишается кислорода посреди ночи (иногда по
                        десятки раз за ночь! ), сердце скачет марафонцем — отсюда утром ощущение будто тебя избила
                        жизнь.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        К нам бегут и те, у кого проблемы из другой оперы: <Box component="span"
                                                                                sx={{ color: 'var(--red)' }}>лишний вес
                        тесно связан с качеством сна</Box>, а расстройства пищевого поведения только усугубляют картину.
                        Туда же — <Box component="span"
                                       sx={{ color: 'var(--red)' }}>ночное учащённое мочеиспускание</Box> (вроде мелочь:
                        попил вечером чаю? Но если каждую ночь работа превращается в гонку между кроватью и туалетом —
                        тут уже не до шуток).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        И наконец, вопросы интимной сферы: <Box component="span" sx={{ color: 'var(--red)' }}>эректильная
                        дисфункция</Box> часто приходит бок о бок с плохим сном
                        (наука этой связке давно машет флагом). К этому причисляем и <Box component="span"
                                                                                          sx={{ color: 'var(--red)' }}>сердечно-сосудистые
                        сложности во сне</Box>: аритмии, скачки давления, внезапные подкаты удушья среди ночи или даже
                        вегетативные кризы — все они становятся для человека настоящими мини-драмами.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '35px' }}>
                        Так что <Box component="span" sx={{ color: 'var(--red)' }}>спектр задач у нас самый широкий — от
                        ночных страхов до сердечного ритма</Box>. Кажется, «просто сон» – самая обманчивая фраза нашего
                        времени.
                    </BaseText>

                    <BaseH2
                        title="Дополнительные синдромы"
                        marginBottom={true}
                    />

                    {/*<List>
                        {somnologyList2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Когда речь заходит о качестве сна, на ум обычно приходят бессонница или, скажем, ранние
                        пробуждения. Но на самом деле картина куда богаче — есть целый набор состояний, которые
                        буквально заставляют ночное время работать против нас.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Возьмём, например, <Box component="span" sx={{ color: 'var(--red)' }}>синдром беспокойных ног
                        (или по-умному — RLS)</Box>. Представьте: лежишь вроде бы усталый — глаза слипаются, голова
                        тяжёлая… но вдруг начинается зудящее ощущение в ногах. Хочется непременно ими дёрнуть, пройтись
                        хотя бы до кухни. Вроде мелочь — а высыпаться при таком невозможно.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Ещё одно явление — <Box component="span" sx={{ color: 'var(--red)' }}>бруксизм</Box>. Это когда
                        человек скрипит зубами во сне. Причём часто он даже не подозревает об этом (а вот соседи по
                        комнате страдают). Последствия? Простая арифметика: несколько лет — и эмаль стирается как ластик
                        после экзамена; добавьте к этому постоянную утреннюю боль в челюсти и головные боли.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>А бывают состояния совсем загадочные для
                            обывателя</Box>: пробуждения среди ночи с полной растерянностью, когда человек на секунду не
                        может понять где он и что происходит; эпизоды сноговорения, когда спящий вдруг начинает
                        разговаривать или даже спорить с кем-то на целые монологи (особенно весело расшифровывать это
                        утром); или ночные судороги, когда весь сон прерывается резкой болью в мышцах.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Ну и классика жанра — <Box component="span" sx={{ color: 'var(--red)' }}>ночные кошмары или
                        лунатизм</Box>. Один просыпается от страшного сна в холодном поту; другой вскакивает среди ночи
                        и идёт по квартире под действием автопилота — сам потом удивляется рассказам домашних.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '35px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Каждый из этих синдромов имеет свои корни и
                            последствия для организма</Box>. Не просто беспокоят сон — они часто влияют на качество
                        жизни днём: утомляемость растёт, концентрация падает, раздражительность зашкаливает. Тут уже
                        перестаёшь воспринимать “здоровый сон” как данность — он становится настоящей ценностью, которую
                        нужно защищать.
                    </BaseText>

                    <BaseH2
                        title="Диагностические методы:"
                        marginBottom={true}
                    />

                    {/*<List>
                        {somnologyList3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Когда мы сталкиваемся с серьезными нарушениями сна, простой опрос пациента явно не спасет. Здесь
                        приходится подключать тяжелую артиллерию — целый арсенал диагностических методов.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Начнем с полисомнографии</Box> — это что-то
                        вроде полноценного ночного "кинозала" для вашего организма. Укладываем человека спать (в прямом
                        смысле), а сами внимательно следим за его дыханием, движениями, сердцем и, что немаловажно,
                        эректильной функцией у мужчин. Почему последняя? Дело в том, что ночные эрекции показательны не
                        только для уролога; они помогают отличить органические причины нарушений от психологических.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Иногда нам не нужен весь сериал — достаточно вырезки из ключевых сцен: тут выручает
                        <Box component="span" sx={{ color: 'var(--red)' }}>кардио-респираторный мониторинг</Box>. Это
                        компактнее, но по-прежнему дает понимание, не задыхается ли человек ночью (например, при апноэ).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Засыпаете вы мгновенно или крутитесь часами? <Box component="span" sx={{ color: 'var(--red)' }}>Тест
                        на латентный период сна</Box> — способ это выяснить. Он показывает скрытые нарушения
                        бодрствования: человек может даже сам не догадываться, насколько быстро "выключается", а тест
                        все раскроет.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Для тех, кто уже использует <Box component="span"
                                                         sx={{ color: 'var(--red)' }}>СИПАП-аппараты</Box> (эти
                        маски-роботы для сна при апноэ), важно подобрать режимы под конкретного человека. Иногда нужно
                        "подкрутить настройки" — так сон становится действительно восстановительным.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Есть и более тонкая настройка — <Box component="span"
                                                             sx={{ color: 'var(--red)' }}>энцефалофония</Box>. Сложное
                        слово, но суть проста: собираем данные о мозговой активности и ищем в них те паттерны, которые
                        могут объяснить странности сна или появление сложных симптомов.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Но есть еще одна важная вещь: техника-техникой, а психика отдельно. Порой корень проблем уходит
                        в стресс или личные переживания. Здесь очень помогает <Box component="span"
                                                                                   sx={{ color: 'var(--red)' }}>психотерапевтическая
                        поддержка</Box> — иногда именно разговор с профессионалом запускает настоящие перемены в
                        качестве жизни.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '35px' }}>
                        В общем, <Box component="span" sx={{ color: 'var(--red)' }}>диагностика нарушений
                        сна</Box> сегодня — это не гадание на кофейной гуще. Это целый конструктор инструментов… Чем
                        точнее их соберешь под конкретного человека — тем реальнее шанс наконец-то нормально выспаться.
                    </BaseText>

                </Box>

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText>
                        Мы подходим к каждому человеку не по шаблону, а с вниманием — учитываем именно его историю,
                        обстоятельства, особенности сна. Для нас сон — не просто биологическая функция, это важная часть
                        жизни, от которой зависит и энергия утром, и настроение в течение дня. Поэтому всё, что мы
                        делаем, нацелено на восстановление баланса: чтобы вы ложились отдыхать без тревоги, просыпались
                        бодрее и со временем ощущали — жизнь опять в ваших руках.
                    </BaseText>

                </Box>

                <PartnersBlock title="сомнология москва лечение храпа" color="var(--red)" />

                <BaseCallBlock />

                <BasePhotoGallery imagesList={somnologyImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
