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

export default function Knee() {
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
                Коленный сустав
            </Typography>,
        ];
    };

    return (
      <>
        <Head>
          <title>Операция по замене коленного сустава в Москве</title>
          <meta
            name="description"
            content="Эндопротезирование коленного сустава при гонартрозе и разрушении хряща. Подбор опытного хирурга, клиники и организация госпитализации без длительного ожидания."
          />
          <meta
            name="keywords"
            content="эндопротезирование коленного сустава, замена коленного сустава, операция на коленный сустав, платная госпитализация, госпитализация без ОМС, клиника в Москве, ревизионное эндопротезирование, суставная хирургия, помощь пациентам из регионов, сопровождение больных, лечение артроза, транспортировка пациента, патронажная служба"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta property="og:locale" content="ru_RU" />
          <meta
            property="og:title"
            content="Медицинская Сервисная Компания. Эндопротезирование коленного сустава в Москве — госпитализация . 8 (499) 719-81-00, 24/7"
          />
          <meta
            property="og:description"
            content="Платная госпитализация в клинику для эндопротезирования коленного сустава. Без ОМС. Пациентам из регионов и СНГ. Перевод, сопровождение, помощь 24/7."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://msk-group-hospital.vercel.app/directions/endoprosthetics/knee"
          />
          <meta
            property="og:image"
            content="https://msk-group-hospital.vercel.app/images/endoprosthetics/5.webp"
          />
          <meta
            property="og:image:alt"
            content="Медицинская Сервисная Компания. Эндопротезирование коленного сустава в Москве."
          />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:site_name"
            content="Медицинская Сервисная Компания. Эндопротезирование коленного сустава в Москве."
          />

          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/directions/endoprosthetics/knee" />*/}
          <link rel="canonical" href="https://msk-group-hospital.vercel.app/" />
        </Head>
        <Box component="section">
          <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

          <BaseBanner
            imgPath="/images/endoprosthetics/5.webp"
            title="Эндопротезирование коленного сустава"
          />

          <BaseCallBlock text="Запись на консультацию" />

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseText>
              Представьте себе человека, который годами терпел боль в колене — не просто разовый
              дискомфорт после долгой прогулки, а хроническую, изматывающую невозможность нормально
              ходить, спать и вообще радоваться жизни. В какой-то момент ни обезболивающие, ни
              физиотерапия уже не спасают: сустав буквально разрушен, превращён в источник
              постоянного мучения. Именно на этом этапе и приходит время эндопротезирования. Грубо
              говоря, хирурги убирают "сломанные детали" родного сустава и заменяют их искусственным
              протезом — конструкцией, которая берёт на себя все функции настоящего сустава. Чаще
              всего к такому шагу прибегают из-за запущенного артроза или серьёзной травмы, когда
              консервативные методы окончательно бессильны. Это не подтяжка или полировка — это
              капитальный ремонт, но зато он возвращает шанс снова жить без боли.
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
              title="Когда стоит задуматься о протезировании коленного сустава?"
              marginBottom={true}
            />

            {/*<List>
                        {endoprostheticsKnee1.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

            <BaseText style={{ display: 'block', marginBottom: '15px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Есть несколько сигналов
              </Box>
              , которые просто невозможно игнорировать. Во-первых, если боль в колене не отпускает
              ни днём, ни ночью — она стала фоном вашей жизни. Сустав словно «зажат», движения
              вызывают дискомфорт или и вовсе невозможны, а походка изменилась из-за деформации
              ноги. В какой-то момент обычные обезболивающие уже не спасают, а возможность свободно
              гулять или даже просто вставать с постели становится роскошью.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Классическая ситуация — это{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                тяжёлый гонартроз
              </Box>
              , когда хрящ буквально «стёрся до дыр» (это 3–4 стадия по классификации). Но не только
              возрастные изменения могут подвести к операции. Хронические воспаления, такие как{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                ревматоидный артрит
              </Box>{' '}
              (когда иммунитет почему-то объявил войну собственным суставам), тоже разрушают ткань
              изнутри.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Бывает, что дело в старой травме
              </Box>
              : когда после перелома или вывиха сустав так и не восстановился и стал бесповоротно
              искривлённым или тугоподвижным. Кто-то получает этот диагноз после асептического
              некроза — это когда участок кости вдруг остаётся без питания и разрушается (по
              ощущениям, мало чем отличается от хроники с постоянной болью).
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '35px' }}>
              И уж совсем обидно — если причиной всех мучений стало неудачное вмешательство
              хирургов:{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                послеоперационные осложнения
              </Box>{' '}
              иногда приводят к необходимости ставить протез гораздо раньше, чем рассчитывалось.
            </BaseText>
            <BaseText
              style={{ display: 'block', borderLeft: '2px solid var(--red)', paddingLeft: '25px' }}
            >
              Если подытожить: эндопротезирование встаёт на повестке дня тогда, когда собственный
              сустав окончательно перестаёт справляться со своей главной задачей — обеспечить вам
              привычное движение без боли или страха сделать лишний шаг.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="Как проходит операция?" marginBottom={true} />

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Операция устроена довольно просто (но, конечно, для хирурга — без шуток ювелирная
              работа). Всё начинается с того, что врач аккуратно удаляет те части сустава, которые
              уже не выполняют свою задачу: разрушенный хрящ или костную ткань. После этого на их
              место ставят искусственный протез — его стараются подобрать так, чтобы он максимально
              точно повторял природную форму сустава конкретного человека. Тут удивительно вот что:
              современные протезы изготавливают из материалов, которые не только очень прочные, но и
              «дружат» с организмом — никаких конфликтов на иммунном уровне. Такие импланты
              выдерживают десятилетия; есть случаи, когда они служили даже дольше 20 лет.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              Вся операция занимает примерно полтора-два часа. А после неё понадобится задержаться в
              больнице — обычно от пяти дней до недели с хвостиком. Затем начинается следующий
              важный этап — реабилитация; она играет не меньшую роль для возвращения к активной
              жизни, чем сама хирургия.
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
              title="Госпитализация на эндопротезирование коленного сустава"
              marginBottom={true}
            />

            {/*<List>
                        {endoprostheticsKnee2.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Если коротко — мы помогаем организовать госпитализацию на эндопротезирование коленного
              сустава в лучших московских клиниках. Все проходит по плану и на платной основе, без
              скрытых сложностей. Наши пациенты — это не только жители Москвы или Подмосковья. К нам
              часто обращаются из других городов России, а также из стран СНГ. И да, наличие полиса
              ОМС не обязательно — действуем по коммерческим тарифам, так что можно не переживать по
              поводу формальностей с документами.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              Каждый случай мы рассматриваем отдельно: обсуждаем детали, объясняем этапы, чтобы
              ничего не осталось "за кадром". Если пытаться уместить всё в одну аналогию —{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                мы как персональный навигатор в большом мире московской медицины
              </Box>
              . Ваша задача — выбрать лучшее для себя решение, наша — чтобы путь к нему был
              максимально прямым и понятным.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="Что мы делаем" marginBottom={true} />

            {/*<List>
                        {endoprostheticsKnee3.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              — Помогаем найти именно ту клинику и того ортопеда, которому вы можете доверять. Не
              просто «по профилю», а чтобы специалист действительно разбирался в похожих случаях и
              умел говорить с вами простым языком.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              — Берём на себя вопрос госпитализации — думаете, что это обычная очередь в палату? На
              деле всё устроено иначе: продуманный сервис, поддержка на каждом шаге и ощущение, что
              о вас реально позаботились (для пациента это как глоток свежего воздуха).
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              — Если нужно — организуем поездку в клинику, даже если речь о другом городе. Важно не
              только довезти быстро, но и сделать так, чтобы человек был в безопасности всё время
              пути.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              — Иногда ситуация меняется: стало понятно, что нужна специализированная помощь —
              переводим пациента из одной больницы в другую без лишних бюрократических кругов и
              нервотрёпки.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              — Сложные случаи требуют особого внимания. У нас есть собственная патронажная служба:
              они рядом с пациентами, которые особо уязвимы или тяжелы для стандартной системы. Это
              не формальность, а настоящая поддержка на каждом этапе лечения и реабилитации.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="Почему к нам часто обращаются?" marginBottom={true} />

            {/*<List>
                        {endoprostheticsKnee4.map(({ id, label }) => <BaseLi key={id} label={label} />)}
                    </List>*/}

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Мы работаем только с хирургами-ортопедами, которых действительно знаем и которым
              доверяем — обычно это те специалисты, о которых пациенты потом вспоминают с
              благодарностью. Все операции проводим на базе крупных федеральных и ведомственных
              клиник Москвы — места, где строго следят за стандартами и оснащены самым современным
              оборудованием.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Есть еще такой момент: для госпитализации не всегда нужен полис ОМС. Иногда люди
              теряют документы или едут из другого региона — для них отсутствие этой бюрократии
              становится реальным спасением.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              И да, из приятного: держим связь 24/7, потому что вопросы (и тревоги) не спрашивают
              расписания. Ну а оформление? Честно скажу — мы заточены под минимальный набор бумажек.
              Получается уложиться в один день, без бесконечного сбора справок и ожиданий.
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
