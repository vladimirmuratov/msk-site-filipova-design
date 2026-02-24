import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { emergencySurgeryImages } from '@/config/images';
import Link from 'next/link';
import { BaseH2 } from '@/components/base/BaseH2';
import React from 'react';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function EmergencySurgery() {
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
                Экстренная хирургия
            </Typography>,
        ];
    };

    return (
      <>
        <Head>
          <title>
            Экстренная хирургия в Москве 24/7 | Острый живот, аппендицит, холецистит — срочная
            помощь
          </title>
          <meta
            name="description"
            content="Круглосуточная экстренная хирургическая помощь в Москве. Операции при аппендиците, холецистите, панкреатите, кишечной непроходимости, грыжах, травмах. Быстрая госпитализация без очередей. Звоните 24/7!"
          />
          <meta
            name="keywords"
            content="экстренная хирургия в москве, отделение экстренной хирургии, экстренная помощь в хирургии, центр экстренной хирургии"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta property="og:locale" content="ru_RU" />
          <meta
            property="og:title"
            content="Медицинская Сервисная Компания. Экстренная хирургия. 8 (499) 719-81-00, 24/7"
          />
          <meta
            property="og:description"
            content="Экстренная хирургия — неотложная медицинская помощь при острых состояниях: травмах, аппендиците, кровотечениях и других угрозах жизни. Круглосуточно. Быстро. Надёжно."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://msk-group-hospital.vercel.app/diseases/emergency-surgery"
          />
          <meta
            property="og:image"
            content="https://msk-group-hospital.vercel.app/images/diseases/emergency-surgery/emergency-surgery1.webp"
          />
          <meta
            property="og:image:alt"
            content="экстренная хирургия в Москве. 8 (499) 719-81-00, 24/7"
          />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:site_name"
            content="Медицинская Сервисная Компания. Экстренная хирургия в Москве. 8 (499) 719-81-00, 24/7"
          />

          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/diseases/emergency-surgery"/>*/}
          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/" />*/}
        </Head>
        <Box component="section">
          <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

          <BaseBanner
            imgPath="/images/diseases/emergency-surgery/emergency-surgery1.webp"
            title="Экстренная хирургия в Москве"
            bgPosition="top"
            // fontShadowColor="var(--red)"
          />

          <BaseCallBlock text="Консультация" />

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseText style={{ display: 'block' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Экстренная хирургия
              </Box>{' '}
              — это про те моменты, когда медлить просто нельзя. Представьте себе ситуацию:
              аппендицит лопается или человек попадает в аварию, кровотечение уже не остановить
              таблетками. Вот тут хирурги и подключаются — без долгих анализов и раздумий, буквально
              на бегу. Их задача — не дать драгоценным минутам обернуться трагедией: остановить
              внутреннее кровотечение, убрать источник заражения, вернуть человеку шанс выбраться из
              беды. По сути, экстренная хирургия всегда про действия здесь и сейчас, чтобы
              стабилизировать критическое состояние или спасти жизнь тогда, когда дорога каждая
              минута.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="К экстренным случаям относятся" marginBottom={true} />

            {/*<List>
                        {emergencySurgeryList.map(({ id, label }) => (
                            <BaseLi key={id} label={label} />
                        ))}
                    </List>*/}

            <BaseText style={{ display: 'block', marginBottom: '15px' }}>
              Когда что-то из этого случается — времени на раздумья почти нет. В медицине есть целая
              категория так называемых “острых” случаев, когда человек может попасть на операционный
              стол в течение часа, а промедление буквально стоит жизни. Давайте пробежимся по этому
              тревожному списку.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Вот, например,{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                внезапная резкая боль в животе
              </Box>{' '}
              — не тот момент, чтобы пить чай и надеяться “само пройдёт”. Так же и с{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                острым аппендицитом
              </Box>
              : он начинается как вроде бы обычная боль сбоку, но без быстрой реакции вы рискуете
              столкнуться с{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                перитонитом
              </Box>{' '}
              — крайне опасным воспалением всей брюшной полости.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Дальше —{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                кровотечения
              </Box>
              . Тут каждый теряет голову (и драгоценные минуты), ведь внутри нас тоже могут
              порваться сосуды, чего мы даже не замечаем до тех пор, пока не станет совсем плохо
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Заподозрили травму с возможными повреждениями внутри?
              </Box>{' '}
              Не играйте в героев: разрыв органа не лечится “на глазок”. Аналогично и с ситуациями,
              когда забиваются сосуды — например, тромб перекрыл артерию и оставил орган без питания
              — дело идёт на часы
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Осложнения язвы желудка или кишечника (вроде прободения)
              </Box>{' '}
              тут же могут закончиться экстренной операцией.{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Желчная колика
              </Box>{' '}
              бывает настолько мучительной, что её сравнивают с родами; а если к ней добавляется
              подпечёночная желтуха (та самая “желтушка” взрослого человека) — это сигнал бегом в
              стационар!
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Ущемлённые грыжи
              </Box>{' '}
              тоже не терпят отсрочек, потому что зажатые ткани быстро отмирают без кровоснабжения.{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Острая кишечная непроходимость?
              </Box>{' '}
              За этим сухим термином скрывается реальный ужас: пища и жидкости перестают двигаться
              внутри кишечника — тут нужна срочная помощь.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '25px' }}>
              Ну и наконец,{' '}
              <Box component="span" sx={{ color: 'var(--red)' }}>
                обтурация кишечника
              </Box>{' '}
              (то есть закупорка) и целый пласт других состояний из разряда: “минута промедления =
              минус шанс на выздоровление”.
            </BaseText>
            <BaseText
              style={{
                display: 'block',
                borderLeft: '2px solid var(--red)',
                paddingLeft: '25px',
                textTransform: 'uppercase',
                color: 'var(--red)',
              }}
            >
              Самое простое правило: если боль острая, мучительная или возникает подозрение на
              внутреннюю аварию — никаких экспериментов дома . Обращайтесь к врачам сразу и без
              раздумий.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseText style={{ display: 'block', marginBottom: '20px' }}>
              <Box component="span" sx={{ color: 'var(--red)' }}>
                Экстренная хирургия
              </Box>{' '}
              – это, по сути, постоянная гонка со временем. Здесь нет люфта ни на долгие раздумья,
              ни на колебания: счёт идёт буквально на минуты. Врачи и весь медицинский персонал в
              такие моменты работают как хорошо слаженный механизм — никто не теряет ни секунды,
              ведь за этой кажущейся спешкой стоит одна простая цель: выиграть драгоценное время для
              жизни пациента.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              Многие терпят до последнего или надеются, что «само рассосётся», особенно если дело
              происходит в неурочное время — скажем, ночью или в выходные. Но откладывать визит к
              врачу в случае острых болей или внезапных тревожных симптомов — это как закрывать
              глаза за рулём на оживлённой трассе. Вы просто передаёте управление случаю, и цена
              ошибки тут может быть слишком высокой. Если что-то действительно беспокоит — звоните в
              скорую без стеснения. Лучше приехать к врачу зря, чем потом жалеть о потерянном
              времени. Опытные медики быстро разберутся, нужна ли срочная помощь или даже операция.
              И иногда эта вовремя открытая дверь приемного покоя оказывается границей между опасным
              риском и безопасностью для жизни
            </BaseText>
          </Box>

          <BaseCallBlock />

          <BasePhotoGallery imagesList={emergencySurgeryImages} />
        </Box>
      </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

