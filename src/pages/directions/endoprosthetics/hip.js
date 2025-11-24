import { Box, Link, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import React from 'react';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';
import { BaseH2 } from '@/components/base/BaseH2';
import { endoprostheticsImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Hip() {
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
            <Link
                // href="/"
                component="button"
                onClick={() => router.push('/directions/endoprosthetics')}
                underline="hover"
                key="2"
                sx={{ color: 'var(--blue)!important', fontWeight: 400 }}
            >
                Эндопротезирование
            </Link>,
            <Typography key="3" sx={{ color: 'var(--gray)' }}>
                Тазобедренный сустав
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Эндопротезирование тазобедренного сустава в Москве | Медицинская Сервисная Компания. 8 (499)
                    719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Организуем платную госпитализацию для эндопротезирования тазобедренного сустава в ведущих клиниках Москвы. Без ОМС. Помощь пациентам из РФ и СНГ."
                />
                <meta
                    name="keywords"
                    content="эндопротезирование тазобедренного сустава, замена тазобедренного сустава, операция на тазобедренный сустав, платная госпитализация Москва, госпитализация без ОМС, ортопедия, лечение в Москве, госпитализация из регионов, лечение суставов, травматология, реабилитация после эндопротезирования"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Эндопротезирование тазобедренного сустава в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Организуем платную госпитализацию для эндопротезирования тазобедренного сустава в ведущих клиниках Москвы. Без ОМС. Помощь пациентам из РФ и СНГ." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.ru/directions/endoprosthetics/hip" />
                <meta property="og:image" content="https://msk-group-hospital.ru/images/endoprosthetics/6.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Эндопротезирование тазобедренного сустава в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Эндопротезирование тазобедренного сустава в Москве." />
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner imgPath="/images/endoprosthetics/6.webp"
                            title="Эндопротезирование тазобедренного сустава" />

                <BaseCallBlock text="Запись на консультацию" />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Знаете, когда речь заходит о тотальной замене тазобедренного сустава (а в медицинских кругах это
                        звучит куда строже — <Box component="span" sx={{ color: 'var(--red)' }}>эндопротезирование</Box>),
                        тут нельзя не подчеркнуть: для многих людей именно эта операция становится реальным спасением.
                        Представьте человека, который годами мучился от непрекращающейся боли в бедре — каждое утро
                        вставание с кровати похоже на испытание, не говоря уже о прогулках или любимых занятиях спортом.
                        А теперь он буквально возвращается к жизни и активности.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Такие операции назначают не просто так — чаще всего сустав в буквальном смысле “выработан до
                        дыры” из-за <Box component="span" sx={{ color: 'var(--red)' }}>артроза</Box>, после сложной
                        травмы (<Box component="span" sx={{ color: 'var(--red)' }}>сломанная шейка бедра</Box> у пожилых
                        — классика жанра), при врождённых проблемах с формой сустава или если случилось что-то совсем
                        неприятное вроде <Box component="span" sx={{ color: 'var(--red)' }}>некроза головки бедренной
                        кости</Box>. Лечить подобные ситуации “таблетками и уколами” уже бессмысленно — сустав своё
                        отработал.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        И вот тогда на сцену выходит протез — специально созданный “двойник” вашего сустава, который
                        берёт полноценную нагрузку и возвращает свободу движений. Да, решение непростое, но вы удивитесь
                        сколько людей после такой процедуры вдруг снова начинают активно ходить и даже ездят на
                        велосипеде!
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
                        title="Когда приходит время задуматься об эндопротезировании?"
                        marginBottom={true}
                    />

                    {/*<List>
                        {endoprostheticsHip1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Знаете ту точку, когда ни таблетки, ни мази, ни физиотерапия больше не помогают? Вот для таких
                        случаев и существует эндопротезирование. Особенно часто к этому решению приходят из-за артроза
                        тазобедренного сустава (он же <Box component="span"
                                                           sx={{ color: 'var(--red)' }}>коксартроз</Box>) — когда сустав
                        буквально «стирается» со временем или под действием нагрузок, и каждый шаг превращается в
                        испытание.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Иногда причина драматичнее: вдруг от банального падения <Box component="span"
                                                                                     sx={{ color: 'var(--red)' }}>ломается
                        шейка бедра</Box> (у пожилых такое случается чаще, чем мы привыкли думать). И вот уже никакие
                        пластыри не спасут — только новая «деталь».
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Плюс есть состояния, когда костная ткань буквально гибнет изнутри — например, при <Box
                        component="span" sx={{ color: 'var(--red)' }}>асептическом некрозе головки бедренной кости</Box>.
                        Или аутоиммунные истории вроде <Box component="span"
                                                            sx={{ color: 'var(--red)' }}>ревматоидного артрита</Box>,
                        где свои клетки нападают на собственные суставы.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '25px' }}>
                        Но главный критерий — это когда боль и невозможность нормально двигаться съедают всю радость
                        жизни. Если каждое утро превращается в борьбу с собой и чашка кофе выпивается стоя у двери в
                        поликлинику... В этот момент становится понятно: настало время серьезных решений.
                        Эндопротезирование в таких случаях не каприз хирурга или «последний писк моды», а реальный шанс
                        снова ходить, кататься с внуками с горки и забыть о постоянной боли.
                    </BaseText>

                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        И вот тут хирургия становится не крайним действием отчаяния, а настоящим окном возможностей.
                        После операции у людей появляется шанс забыть про хроническую боль и вернуть себе нормальный
                        ритм жизни — работать, гулять с детьми или внуками, заниматься любимым хобби. В общем, этот путь
                        обычно выбирают тогда, когда всё остальное уже испробовано и понятно: дальше тянуть нельзя.
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
                        title="Как проходит операция"
                        marginBottom={true}
                    />

                    {/*<List>
                            {endoprostheticsHip2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                        </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                marginBottom: '5px'
                            }}
                        >
                            Диагностика и консультация врача-ортопеда
                        </Box>
                        Всё начинается с консультации у ортопеда. Обычно это не просто разговор — врач внимательно
                        осматривает сустав, анализирует результаты снимков (МРТ, рентгены), задаёт десятки вопросов
                        о болях и вашей подвижности. От этого первого этапа зависит многое: правильно поставленный
                        диагноз — половина успеха.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                marginBottom: '5px'
                            }}
                        >
                            Выбор эндопротеза
                        </Box>
                        Дальше идёт история про выбор эндопротеза. Тут есть нюансы — кто-то выигрывает на цементном
                        креплении, кому-то подходит бесцементный или вообще гибридный вариант. Решение принимает
                        врач, опираясь на ваш возраст, плотность костной ткани и образ жизни (например, бегаете вы
                        марафоны или предпочитаете посидеть с книжкой). Здесь нет универсального рецепта — грамотный
                        подбор протеза влияет на то, как долго он прослужит и насколько комфортно будет двигаться
                        после операции.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                marginBottom: '5px'
                            }}
                        >
                            Операция под наркозом
                        </Box>
                        Сама операция проходит под наркозом — это надёжно убирает болевые ощущения и позволяет
                        хирургам работать максимально точно. Современные методы настолько совершенны, что всё
                        происходит довольно быстро — не тот уровень страха перед операцией, который был пару
                        десятилетий назад.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                marginBottom: '5px'
                            }}
                        >
                            Выбор эндопротеза
                        </Box>
                        Дальше идёт история про выбор эндопротеза. Тут есть нюансы — кто-то выигрывает на цементном
                        креплении, кому-то подходит бесцементный или вообще гибридный вариант. Решение принимает
                        врач, опираясь на ваш возраст, плотность костной ткани и образ жизни (например, бегаете вы
                        марафоны или предпочитаете посидеть с книжкой). Здесь нет универсального рецепта — грамотный
                        подбор протеза влияет на то, как долго он прослужит и насколько комфортно будет двигаться
                        после операции.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                marginBottom: '5px'
                            }}
                        >
                            Ранний подъём и восстановление
                        </Box>
                        Уже на следующий день после вмешательства врачи стараются поднять
                        пациента с постели (и это не шутка! ). Потихоньку ходить учат буквально в первые часы. Такой
                        ранний подъём кажется чем-то немыслимым, но он невероятно важен: движение запускает процесс
                        восстановления, снижает риск осложнений и прокладывает дорогу к быстрому возвращению в
                        нормальную жизнь.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                color: 'var(--red)',
                                fontSize: { xs: 22, sm: 24 },
                                marginBottom: '5px'
                            }}
                        >
                            Реабилитация
                        </Box>
                        Далее начинается реабилитация. Если честно, она ничуть не менее важна самой операции. Иногда
                        это значит ежедневные занятия с физиотерапевтом прямо в клинике; иногда реабилитация
                        продолжается на дому под присмотром специалистов. Главное правило тут простое (хотя
                        следовать ему бывает трудно): регулярность и постепенность победят любые ограничения сустава
                        после замены. Жизнь действительно начинает возвращаться в привычное русло шаг за шагом — и
                        каждый этот шаг стоит усилий.
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
                        title="Преимущества замены сустава"
                        marginBottom={true}
                    />

                    {/*<List>
                        {endoprostheticsHip3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Что же хорошего приносит операция по замене сустава? Ну, во-первых — избавление от той самой
                        боли и утренней скованности, из-за которых ставишь чайник и тут же мечтаешь вновь сесть. Вместо
                        постоянного дискомфорта появляется легкость — не магия, а вполне реальный результат грамотного
                        протезирования.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Еще одна вещь, про которую несправедливо забывают: возвращается нормальное движение. Обычные
                        мелочи вроде возможности спокойно подняться по лестнице или сесть в автобус вдруг снова
                        становятся возможными — тем самым рутина перестает быть подвигом.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        И вот что особенно радует (это не реклама медицинских технологий, а свежая статистика):
                        современные суставы служат 15–25 лет. Бывает и дольше — зависит от нагрузки, возраста и
                        характера человека. Но факт остается фактом: если раньше перспектива операции означала риск
                        через пару лет вновь ходить с палочкой, то теперь этот вопрос зачастую можно отложить "на потом"
                        аж на следующий жизненный этап.
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
                        title="Почему выбирают нас"
                        marginBottom={true}
                    />

                    {/*<List>
                        {endoprostheticsHip4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Сначала о самом главном: <Box component="span" sx={{ color: 'var(--red)' }}>мы умеем
                        организовать госпитализацию буквально «на завтра»</Box>. Иногда время решает всё — это не пустые
                        слова, а реальность для наших пациентов.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Отсутствует полис ОМС?</Box> Это не
                        препятствие. Мы знаем, что болезнь не спрашивает, есть ли у вас нужная бумажка в портфеле.
                        Поэтому находим возможность помочь даже тем, кто по каким-то причинам оказался вне стандартных
                        схем.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Мы давно сотрудничаем с ведущими федеральными
                            центрами</Box> — многим врачам там можно доверять как собственным друзьям. Такая связка
                        позволяет открывать двери в те места, где действительно помогают сложным пациентам (не просто по
                        протоколу, а по-человечески).
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Еще одна наша «фишка»: <Box component="span" sx={{ color: 'var(--red)' }}>своя команда
                        медицинского транспорта</Box>. То есть когда речь заходит об экстренной или аккуратной
                        перевозке, не приходится часами искать машины и договариваться — всё своё, отработанное до
                        мелочей.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        Ну и последнее — <Box component="span" sx={{ color: 'var(--red)' }}>мы сопровождаем человека на
                        всех этапах</Box>. Не только пока оформляются бумаги или везём в клинику, но и потом, во время
                        лечения и реабилитации. На каждом шаге рядом кто-то из нас, чтобы объяснить, поддержать или
                        просто быть рядом. В такие моменты это порой важнее любых регалий.
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
