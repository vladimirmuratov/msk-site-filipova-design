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

export default function Robot() {
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
                Роботизированное эндопротезирование
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Роботизированное эндопротезирование суставов в Москве | Медицинская Сервисная Компания. 8 (499)
                    719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Платная госпитализация для роботизированного эндопротезирования коленного и тазобедренного суставов в Москве. Без ОМС. Помощь пациентам из РФ и СНГ."
                />
                <meta
                    name="keywords"
                    content="роботизированное эндопротезирование, замена суставов с помощью робота, эндопротезирование коленного сустава, тазобедренный сустав, госпитализация без ОМС, платная госпитализация, лечение в Москве, суставная хирургия, MAKO, робот-ассистированная операция, госпитализация из регионов"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Роботизированное эндопротезирование суставов в Москве — госпитализация. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Платная госпитализация для роботизированного эндопротезирования коленного и тазобедренного суставов в Москве. Без ОМС. Помощь пациентам из РФ и СНГ." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/directions/endoprosthetics/robot" />
                <meta property="og:image" content="https://msk-group-hospital.vercel.app/images/endoprosthetics/7.webp" />
                <meta property="og:image:alt"
                      content="Медицинская Сервисная Компания. Роботизированное эндопротезирование суставов в Москве." />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Роботизированное эндопротезирование суставов в Москве." />

                {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/directions/endoprosthetics/robot"/>*/}
                <link rel="canonical" href="https://msk-group-hospital.vercel.app/"/>
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/endoprosthetics/7.webp"
                    title="Роботизированное эндопротезирование"
                    fontShadowColor="var(--white)"
                    fontColor="var(--red)"
                />

                <BaseCallBlock text="Запись на консультацию" />

                <Box
                    component="article"
                    sx={{
                        paddingY: { xs: '25px', sm: '50px' },
                        marginX: { xs: '10px', lg: 0 },
                    }}
                >
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Когда речь заходит о замене коленного или тазобедренного сустава, многие представляют себе
                        классическую операцию — скальпель, опытный хирург и долгая реабилитация. Но современные
                        технологии вытащили эту сферу буквально в новую эпоху: сегодня подобные операции нередко
                        проводят с помощью роботизированных систем.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        В чем суть? Робот помогает врачу не только спланировать вмешательство до мельчайших деталей
                        (например, “подогнать” протез так, словно собираешь конструктор по индивидуальному эскизу), но и
                        поставить его с филигранной точностью — до долей миллиметра. Благодаря этому сокращается риск
                        ошибки, уменьшается количество повреждений окружающих тканей, а значит, человек быстрее
                        возвращается в привычный ритм жизни.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        Даже первые шаги после такой операции зачастую даются
                        гораздо легче: меньше боли, меньше отеков. За этим вроде бы сложным словосочетанием —
                        <Box component="span" sx={{ color: 'var(--red)' }}>“роботизированное эндопротезирование”</Box> —
                        прячется очень простой смысл: минимизировать человеческий фактор там, где цена ошибки высока, и
                        дать пациенту возможность быстрее восстановиться и забыть о боли в суставе.
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
                        title="Применяется при:"
                        marginBottom={true}
                    />

                    {/*<List>
                        {endoprostheticsRobot1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Тяжёлые формы артроза или коксартроза</Box>.
                        Когда сустав буквально разваливается на глазах — ни
                        уколы, ни таблетки уже не помогают, больной едва двигает ногой. Тут консервативные методы
                        бессильны, и вопрос операции — это уже вопрос качества жизни, а порой и элементарной возможности
                        передвигаться.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Врожденная дисплазия суставов</Box>. Если
                        анатомия с самого начала не заложилась правильно, проблема
                        никакими массажами полностью не решить. Иногда сустав приходится буквально “пересобирать”, чтобы
                        человек мог двигаться без боли.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Последствия серьёзных травм</Box> —
                        например, после автомобильной аварии или падения с большой
                        высоты. Бывает, сустав настолько повреждён, что восстановить его привычными методами невозможно
                        — нет той самой “биологической базы”.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        — <Box component="span" sx={{ color: 'var(--red)' }}>Когда сустав слишком нестабилен</Box> — то
                        есть ходит туда-сюда и никак не фиксируется. Постоянные
                        вывихи и подвывихи здоровью явно не способствуют; в таких ситуациях стабильность приходится
                        создавать “искусственно”.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '35px' }}>
                        — Ну и <Box component="span" sx={{ color: 'var(--red)' }}>рецидивы после прежних операций</Box>.
                        Жизнь иногда подбрасывает такие сюрпризы: прошло пару
                        лет, а старый имплантат разболтался или появились осложнения – приходится переделывать всё
                        заново (это те самые ревизионные операции).
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        В общем, применяется тогда, когда без вмешательства качество жизни падает ниже плинтуса — и
                        задача врачей тут одна: вернуть человеку возможность нормально двигаться и меньше страдать от
                        боли.
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
                        title="Преимущества робот-ассистированной замены суставов"
                        marginBottom={true}
                    />

                    {/*<List>
                        {endoprostheticsRobot2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Когда речь заходит о замене сустава с помощью робота, основные плюсы проявляются уже на
                        операционном столе — и продолжают радовать пациента долгие годы. Начнём с самого простого:
                        точность. Роботизированная система словно подстраивается под уникальную архитектуру вашего тела.
                        Она не действует по шаблону, а для каждого пациента буквально строит “план ремонта”
                        индивидуально. На практике это значит — имплант ложится именно туда, куда должен, с точностью до
                        миллиметра. Для хирурга такое качество исполнения руками сложно достижимо.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Дальше — вопросы травмы. Вмешательство получается гораздо более щадящим: робот помогает “не
                        мешать лишнему”, и в итоге здоровые ткани страдают меньше. Ну а отсюда вытекает один приятный
                        бонус — боль после операции заметно тише, восстанавливаться проще и быстрее.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Кстати о восстановлении. Самое показательное тут — цифры: те, кто решается на
                        робот-ассистированную операцию, как правило возвращаются к своим обычным делам (прогулки,
                        активные движения) на пару недель раньше, чем после классической процедуры. То есть человек не
                        просто лежит дома без боли, а реально возвращается к жизни — раньше.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Точность здесь работает и на перспективу — когда всё установлено максимально правильно, шансы на
                        всяческие смещения эндопротеза или неприятности вроде нестабильности снижаются в разы. Врачам
                        потом реже приходится переделывать работу: повторные операции становятся редким исключением.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        Ну и длинная дистанция: когда имплант сидит идеально, он служит дольше. Это не какая-то магия —
                        просто точная подгонка снижает износ и отдаляет ту самую “дату следующей замены”. А значит,
                        можно забыть о больнице надолго и жить полной жизнью без лишних переживаний о будущем своего
                        сустава.
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
                        title="Как проходит госпитализация?"
                        marginBottom={true}
                    />

                    {/*<List>
                            {endoprostheticsRobot3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                        </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Госпитализация — это, по сути, целый маршрут с разными остановками, и важно, чтобы никто не
                        бродил по этому пути в одиночку. Мы в Медицинской Сервисной Компании берем на себя все
                        организационные хлопоты: от поиска той самой клиники в Москве (где делают действительно
                        высокотехнологичные роботизированные операции на суставах — будь то коленный или тазобедренный),
                        до вопросов транспортировки.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        Вообще, все начинается с подробного обсуждения — кто именно вам нужен, где его найти, какие
                        условия важны для пациента. Если нужно — согласуем перевод из другого медучреждения: под ключ
                        решаем бумажные вопросы и контактируем с обеими сторонами. Плюс, если нет ОМС или пациента надо
                        доставить из другой области России или даже страны СНГ — организуем это быстро и с максимальным
                        комфортом. Доставляем, буквально встречая у порога.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '25px' }}>
                        Особая часть маршрута — помощь тем, кому тяжелее других: лежачие пациенты, люди со сложными
                        состояниями. Мы не просто оформляем госпитализацию, а сопровождаем их на каждом этапе: от
                        патронажа до круглосуточной поддержки семьи.
                    </BaseText>
                    <BaseText style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}>
                        В целом мы — как проводник по незнакомому городу медицины: показываем нужные повороты,
                        предупреждаем о подводных камнях и не отпускаем руку до самого финиша.
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
                            {endoprostheticsRobot4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                        </List>*/}

                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Во-первых</Box>, мы реально всегда на связи —
                        и когда у вас плановая консультация во вторник днем, и если вдруг что-то случилось посреди ночи.
                        Экстренные ситуации бывают — мы это понимаем и не теряемся: реагируем быстро.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Второй момент</Box>. Мы не ограничиваемся
                        только своим опытом — постоянно работаем плечом к плечу с ведущими профильными клиниками. Для
                        клиента это значит простую вещь: вы получаете доступ к лучшим специалистам, без лишних кругов
                        ада в поисках нужного врача.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Третий принцип</Box> — всё завязано на людях.
                        У каждого свой кейс, и вместо стандартных протоколов мы реально погружаемся в детали, подбираем
                        маршрут персонально под ситуацию и сопровождаем до финиша. Не бросаем на полпути.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Что ещё важно?</Box> Мы умеем организовывать
                        процесс так, чтобы лечение стартовало быстро: никаких бесконечных очередей и подвисших звонков в
                        регистратуру. Всё чётко.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Ну и опыт</Box>. За годы работы прошли через
                        самые разные сценарии — от простого обследования до действительно сложных случаев
                        госпитализации. Это даёт спокойствие и вам, и нам: если что-то непредсказуемо — знаем, как
                        действовать.
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
