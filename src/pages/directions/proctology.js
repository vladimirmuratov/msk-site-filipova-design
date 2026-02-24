import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { proctologyImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Proctology() {
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
                Колопроктология
            </Typography>,
        ];
    };

    return (
      <>
        <Head>
          <title>Проктология в Москве — диагностика и операции</title>
          <meta
            name="description"
            content="Комплексное лечение геморроя, полипов, трещин и свищей. Организуем обследование и хирургическое лечение в ведущих клиниках Москвы без длительного ожидания."
          />
          <meta
            name="keywords"
            content="колопроктолог москва платно, платная колопроктология, приём колопроктолога без омс, геморрой лечение, анальные трещины, колоноскопия москва, ректороманоскопия, боли в кишечнике, воспаление кишечника, полипы кишечника, диагностика кишечника, срочный приём колопроктолога, лечение геморроя платно, колопроктология без очереди, консультация колопроктолога"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta property="og:locale" content="ru_RU" />
          <meta
            property="og:title"
            content="Медицинская Сервисная Компания. Проктология в Москве — госпитализация без ОМС и очередей. Звоните! 8 (499) 719-81-00, 24/7"
          />
          <meta
            property="og:description"
            content="Боль, кровотечение, обострение? Организуем срочную госпитализацию в отделение проктологии в Москве. Без ОМС, без бюрократии, с санитарным транспортом и круглосуточной поддержкой."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://msk-group-hospital.vercel.app/diseases/proctology"
          />
          <meta
            property="og:image"
            content="https://msk-group-hospital.vercel.app/images/diseases/proctology/proctology1.webp"
          />
          <meta
            property="og:image:alt"
            content="Медицинская Сервисная Компания. Колопроктология в Москве."
          />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:site_name"
            content="Медицинская Сервисная Компания. Колопроктология в Москве."
          />

          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/diseases/proctology" />*/}
          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/" />*/}
        </Head>
        <Box component="section">
          <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

          <BaseBanner
            imgPath="/images/proctology/proctology1.webp"
            title="Колопроктология в Москве"
            bgPosition="top"
            fontShadowColor="var(--red)"
          />

          <BaseCallBlock />

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Если вдруг начали замечать у себя неприятные ощущения в области ануса — например,
              боль, кровь при походе в туалет, неожиданно настигли частые запоры или, наоборот,
              диарея, или есть ощущение, что кишечник словно “не до конца” опорожнился, да ещё зуд
              добавился — это всё явные поводы записаться к{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                колопроктологу
              </Box>
              . Я понимаю: темы не самые приятные и причины оттягивать поход к врачу всегда
              находятся. Но опыт показывает (и это не выдумки! ), своевременное обращение часто
              делает лечение проще и быстрее. Иногда люди годами “терпят”, а потом вынуждены
              сталкиваться с куда более сложными последствиями — хотя могли бы обойтись малой
              кровью.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Что важно:{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                в современной колопроктологии
              </Box>{' '}
              давно уже ушли от идеологи “врач мучитель”. Здесь в арсенале есть не только таблетки и
              диеты, но и целый набор современных малоинвазивных штук — то есть операций с
              минимальным вмешательством, которые позволяют вернуться к обычной жизни без долгого
              периода восстановления (часто буквально на следующий день человек может отправиться по
              своим делам). Всё это делается, чтобы человек не просто избавился от симптомов, а
              реально почувствовал разницу: начал жить комфортнее и увереннее в своём теле.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              Мораль простая: странные ощущения и тревожный звоночек — лучше разок перестраховаться
              у врача. Иногда визит занимает меньше времени и сил, чем многие пытаются представить.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="Колопроктологические заболевания" marginBottom={true} />

            {/*<List>
                        {proctologyList.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>*/}

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Колопроктология
              </Box>{' '}
              — это, по сути, та самая область медицины, где лечат деликатные, но очень житейские
              проблемы: начиная с банального геморроя и заканчивая случаями, когда прямая кишка
              может буквально начать "выскальзывать" наружу. И вот тревожный список — с чем чаще
              всего сталкиваются мои пациенты.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Выпадение прямой кишки
              </Box>{' '}
              — звучит устрашающе и на самом деле сильно мешает жить. Вспомните: все органы должны
              быть там, где им положено! Здесь нужна точная диагностика и часто хирургия, чтобы
              вернуть всё на место.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Геморрой
              </Box>
              . Сколько шуток про него не ходи — больно и обидно всем, кто хоть раз сталкивался.
              Иногда достаточно изменить образ жизни (например, добавить клетчатку или больше
              двигаться), иногда без вмешательства врача не обойтись.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Анальное недержание
              </Box>{' '}
              — проблема, о которой редко кто говорит вслух. А ведь качество жизни падает резко:
              планы подстраиваются под близость туалета… Благо сейчас есть методики коррекции для
              любой причины, будь то слабость мышц или нервные нарушения.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Анальные трещины
              </Box>{' '}
              — маленькая ранка, а ощущения такие, будто сидишь на битом стекле. Лечатся они обычно
              консервативно (мази, ванночки), но затягивать нельзя: острая быстро может перейти в
              хроническую форму.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Свищи прямой кишки
              </Box>
              . По простому говоря — это когда появляется "лишний проход", соединяющий прямую кишку
              с кожей. Источник постоянных воспалений и дискомфорта, без грамотного хирургического
              подхода не закрывается.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Кокцигодиния (боли в копчике)
              </Box>
              . В буквальном смысле тяжело «сидеть ровно». Причин масса: травмы, воспаление после
              родов или просто неудачное падение в детстве (увы, такое вспоминается спустя годы).
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Запоры
              </Box>
              . Это тот случай, когда привычка махнуть рукой ("Подумаешь — день не сходил! ") может
              сыграть злую шутку: страдает весь ЖКТ и настроение впридачу. Причин много — от
              банального обезвоживания до неврологических нарушений.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Мегаколон
              </Box>{' '}
              — редкий диагноз и требует особенно внимательного подхода. Кишка значительно
              расширяется, нарушается транспорт кала… Тут мимо консультации колопроктолога не
              пройти.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Криптит и папиллит
              </Box>
              — названия мало кому что говорят (до встречи с ними). Это воспаления маленьких
              "карманов" в анусе. Вроде бы пустяк, а на деле могут провоцировать серьёзные боли и
              прочие неприятности.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Эпителиальный копчиковый ход
              </Box>
              . Часто проявляется воспалением или гнойниками чуть выше ягодиц — популярное проклятие
              офисных работников и студентов за долгие часы на одном месте.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Острый парапроктит
              </Box>
              . Когда инфекция попадает в параректальную клетчатку и начинается абсцесс. Обычно
              человек «добегает» до врача сам из-за сильной боли в области заднего прохода и
              температуры.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Перианальные остроконечные кондиломы
              </Box>{' '}
              возникают из-за вируса папилломы человека; появляются неприятные наросты вокруг ануса
              — доставляют массу беспокойства психологического плана тоже.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Ректоцеле
              </Box>{' '}
              — ситуация чаще женская: стенка прямой кишки выпячивается во влагалище из-за
              ослабленных мышц таза, нередко после тяжелых родов. Бывает непросто открыто говорить о
              такой проблеме даже врачу… Но чем раньше начать лечение — тем лучше жизнь возвращается
              к нормальности.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              На практике я вижу одну повторяющуюся вещь: большинство этих проблем люди стараются
              игнорировать или стесняются обсуждать даже с близкими. А между тем современные методы
              лечения уже давно позволяют жить без боли и ограничений — главное вовремя решиться на
              визит к специалисту.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="Методы лечения" marginBottom={true} />

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Когда речь заходит об операциях, мы давно отказались от классического разреза “от
              плеча” в пользу современных, щадящих подходов. Всё чаще используем{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                лапароскопию и эндоскопию
              </Box>{' '}
              — вместо больших швов здесь маленькие проколы, через которые камеры и инструменты
              буквально «ныряют» внутрь, не устраивая пациенту ненужных испытаний. Это не только
              ускоряет восстановление, но часто позволяет обойтись без длительной госпитализации:
              пациенты уже через несколько дней возвращаются к привычной жизни (а для кого-то это
              ключевой аргумент).
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Оснащены по последнему слову техники —{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                ультразвуковой скальпель, умные лапароскопические комплексы, хитрые приборы для
                молниеносной коагуляции сосудов…
              </Box>{' '}
              Можно было бы утомить перечнем моделей и характеристик, но суть одна: всё это
              существенно снижает риски во время процедуры и после неё. А если появилось что-то
              стоящее на рынке — мы узнаём о новинках одними из первых.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              За операционным столом всегда опытные хирурги — и тут стоит отметить не только стаж,
              но и уверенность: плановая операция или срочная ситуация — холодная голова одинаково
              обязательна. При подборе медикаментов не идём на компромиссы: используем только
              проверенные препараты со всеми российскими сертификатами (никаких “серых” поставок под
              видом экономии).
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Наш центр — это место, куда приходят решить вопрос по-настоящему комплексно:{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                от консультаций до амбулаторного лечения или операции
              </Box>
              . Мы закрываем большинство колопроктологических задач сами — чтобы пациент на каждом
              этапе знал своих врачей и чувствовал себя своим человеком в наших стенах.
            </BaseText>
          </Box>

          <BaseCallBlock />

          <BasePhotoGallery imagesList={proctologyImages} />
        </Box>
      </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

