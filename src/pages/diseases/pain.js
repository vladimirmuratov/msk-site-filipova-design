import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { painImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import { LocalHospital } from '@mui/icons-material';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Pain() {
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
                Лечение боли
            </Typography>,
        ];
    };

    return (
        <>
            <Head>
                <title>
                    Лечение боли в Москве | Медицинская Сервисная Компания. 8 (499) 719-81-00, 24/7
                </title>
                <meta
                    name="description"
                    content="Эффективное лечение хронической боли: диагностика, индивидуальный подход, медикаментозная и восстановительная терапия. Звоните 8 (499) 719-81-00, 24/7"
                />
                <meta
                    name="keywords"
                    content="институт лечения боли в москве, клиника лечения боли в москве, лечение головной боли в москве, центр лечения боли в москве"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:title"
                      content="Медицинская Сервисная Компания. Лечение боли в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:description"
                      content="Эффективное лечение хронической боли: диагностика, индивидуальный подход, медикаментозная и восстановительная терапия. Звоните 8 (499) 719-81-00, 24/7" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://msk-group-hospital.vercel.app/diseases/pain" />
                <meta property="og:image" content="https://msk-group-hospital.vercel.app/images/diseases/pain/pain1.webp" />
                <meta property="og:image:alt" content="Лечение боли в Москве. 8 (499) 719-81-00, 24/7" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:site_name"
                      content="Медицинская Сервисная Компания. Лечение боли. 8 (499) 719-81-00, 24/7" />

                {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/diseases/pain"/>*/}
                <link rel="canonical" href="https://msk-group-hospital.vercel.app/"/>
            </Head>
            <Box component="section">

                <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

                <BaseBanner
                    imgPath="/images/diseases/pain/pain1.webp"
                    title="Лечение боли в Москве"
                    bgPosition="top"
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
                        <Box component="span" sx={{ color: 'var(--red)' }}>С хронической болью всё не так просто</Box>,
                        как хотелось бы. Это не тот случай, когда выпил таблетку
                        — и забыл. Такая боль может преследовать человека месяцами или даже годами, выбивая из привычной
                        колеи: начинаешь избегать любимых дел, становишься раздражительным, устаёшь быстрее обычного.
                        Причин тут пруд пруди: кому-то досталась в наследство "поломка" в работе нервной системы, у
                        кого-то это — напоминание о старой травме или операции; иногда спусковым крючком становятся
                        последствия тяжёлого лечения или эмоциональные перегрузки.
                    </BaseText>
                    <BaseText style={{ display: 'block', marginBottom: '10px' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Путь начинается с диагностики</Box> — и это
                        действительно похоже на поиск потерянной вещи в темноте:
                        приходится прощупывать разные варианты, чтобы найти источник боли. После этого врач буквально
                        собирает план помощи по крупицам, подбирая лечение, которое подходит именно этому человеку.
                        Иногда в ход идут обезболивающие; для кого-то эффективнее физиотерапия или работа с психологом
                        (психика ведь умеет "раздувать" ощущение боли до невероятных масштабов); кто-то получает
                        облегчение благодаря нейромодуляции или восстановительным процедурам.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        <Box component="span" sx={{ color: 'var(--red)' }}>Но здесь задача всегда шире, чем просто
                            "выключить боль"</Box>. Настоящая цель — вернуть человеку
                        возможность проживать свои обычные дни без постоянного напряжения и страха новой вспышки боли,
                        чтобы снова хотелось выходить из дома или смеяться над глупой шуткой друга. И что любопытно:
                        если грамотно подобрать стратегию и действовать командой — врач, пациент, часто ещё
                        психотерапевт и реабилитолог — боль удаётся не только притушить, но иногда даже провести её за
                        порог навсегда.
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
                        title="С какими болями к нам чаще всего приходят?"
                        marginBottom={true}
                    />

                    <BaseText style={{ display: 'block', marginBottom: '15px' }}>
                        Картина довольно разнообразная — представить только: кто-то мучается от постоянной тянущей боли
                        в спине, у другого уже не первая неделя простреливает в шее, а ведь кажется, что просто неловко
                        повернулся пару дней назад.
                    </BaseText>

                    <List>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0, alignSelf: 'start', marginTop: '16px' }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText
                                    style={{ display: 'block', color: 'var(--red)', fontSize: { xs: 24, sm: 26 } }}>
                                    Боли в шее, спине, позвоночнике
                                </BaseText>
                                <BaseText style={{ display: 'block' }}>
                                    Картина довольно разнообразная — представить только: кто-то мучается от постоянной
                                    тянущей боли
                                    в спине, у другого уже не первая неделя простреливает в шее, а ведь кажется, что
                                    просто неловко
                                    повернулся пару дней назад.
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0, alignSelf: 'start', marginTop: '16px' }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText
                                    style={{ display: 'block', color: 'var(--red)', fontSize: { xs: 24, sm: 26 } }}>
                                    Головные боли
                                </BaseText>
                                <BaseText style={{ display: 'block' }}>
                                    Еще одна большая история — головные боли. Тут бывают настоящие детективы: мигрени,
                                    напряжение, боли “по непонятной причине”, и всё это порой мешает нормально работать
                                    или даже просто радоваться обычному дню.
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0, alignSelf: 'start', marginTop: '16px' }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText
                                    style={{ display: 'block', color: 'var(--red)', fontSize: { xs: 24, sm: 26 } }}>
                                    Боли при онкологических заболеваниях
                                </BaseText>
                                <BaseText style={{ display: 'block' }}>
                                    Работаем мы и с пациентами, сталкивающимися с болью на фоне онкологических
                                    заболеваний. Здесь часто требуется индивидуальный подход — ни один громкий
                                    “обезболивающий” не решает всех вопросов за раз, и приходится искать путь аккуратно,
                                    шаг за шагом.
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0, alignSelf: 'start', marginTop: '16px' }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText
                                    style={{ display: 'block', color: 'var(--red)', fontSize: { xs: 24, sm: 26 } }}>
                                    Боли при повреждениях нервных корешков и периферических нервов
                                </BaseText>
                                <BaseText style={{ display: 'block' }}>
                                    Встречаются случаи невралгии — когда мучают поврежденные нервные корешки или
                                    периферические нервы. Это такие боли, которые “отдают” вдоль всей руки или ноги
                                    неприятным током или жжением, особенно ночью. Харизма у этих болей особенная;
                                    зачастую для них свойственна прям-таки капризность по отношению к привычным
                                    лекарствам.
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0, alignSelf: 'start', marginTop: '16px' }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText
                                    style={{ display: 'block', color: 'var(--red)', fontSize: { xs: 24, sm: 26 } }}>
                                    Фантомные боли
                                </BaseText>
                                <BaseText style={{ display: 'block' }}>
                                    Одна из самых загадочных тем — фантомные боли. Человек теряет руку или ногу, а
                                    ощущение присутствия — вместе с болью! — всё равно не исчезает. Иногда это
                                    превращается в настоящий квест для врача: как объяснить мозгу, что то место больше
                                    не болит (да и вообще его нет)?
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                        <ListItem sx={{ gap: '10px' }}>
                            <ListItemIcon sx={{ minWidth: 0, alignSelf: 'start', marginTop: '16px' }}>
                                <LocalHospital fontSize="small" sx={{ color: 'var(--red)' }} />
                            </ListItemIcon>
                            <ListItemText>
                                <BaseText
                                    style={{ display: 'block', color: 'var(--red)', fontSize: { xs: 24, sm: 26 } }}>
                                    Сосудистые заболевания головного мозга
                                </BaseText>
                                <BaseText style={{ display: 'block' }}>
                                    И еще одно направление — сосудистые заболевания головного мозга. Тут речь про боли и
                                    нарушения после инсультов, приступов ишемии и прочих “катастроф”. Для восстановления
                                    порой нужна не только медицинская смекалка, но и терпение — своё собственное и
                                    пациента.
                                </BaseText>
                            </ListItemText>
                        </ListItem>
                    </List>

                    <BaseText style={{
                        display: 'block',
                        marginTop: '25px',
                        borderLeft: '2px solid var(--red)',
                        paddingLeft: '25px'
                    }}>
                        Вот такой спектр болевых историй мы разбираем каждый день — от стандартных до уникальных
                        случаев, где приходится подключать все знания о человеческом организме и чуточку эмпатии.
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
                        <Box component="span" sx={{ color: 'var(--red)' }}>Хроническая боль</Box> — штука коварная. Это
                        далеко не просто «неудобство» или то, что можно перетерпеть. Она словно надоедливый сосед,
                        который поселился у вас в голове и не собирается съезжать: мешает спать ночами, влияет на
                        работу, да даже простая прогулка может стать испытанием. Постепенно она превращается в унылый
                        фон жизни — вроде бы и привыкаешь, но за этот «комфорт» платишь дорогой ценой: снижается
                        энергия, исчезает интерес к любимым делам (даже банальные встречи с друзьями начинают вызывать
                        раздражение), а настроение будто уходит в минус.
                    </BaseText>
                    <BaseText style={{ display: 'block' }}>
                        Когда удаётся справиться с хронической болью — неважно, сами вы нашли лечение или пришли к врачу
                        наконец — возвращается почти забытая легкость. Появляется желание двигаться без оглядки на
                        резкую стрельбу в пояснице или тянущую ломоту. Сон становится крепче, голова яснее, а жизнь,
                        если честно, начинает снова приносить радость и ощущение свободы. В общем: меняться ради этого
                        точно стоит — вы ведь имеете право жить так, чтобы боль не диктовала свои правила.
                    </BaseText>
                </Box>

                <BaseCallBlock text="Остались вопросы? Звоните!" />

                <BasePhotoGallery imagesList={painImages} />

            </Box>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

