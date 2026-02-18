import { Box, Link, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import React from 'react';
import { BaseText } from '@/components/base/BaseText';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import { BaseH2 } from '@/components/base/BaseH2';
import { traumatologyImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Traumatology() {
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
                Травматология
            </Typography>,
        ];
    };

    return (
      <>
        <Head>
          <title>Травматология в Москве — операции и лечение травм</title>
          <meta
            name="description"
            content="Комплексное лечение переломов, повреждений суставов и мягких тканей. Подбор травматолога и организация госпитализации без длительного ожидания."
          />
          <meta
            name="keywords"
            content="травматология платная палата, больница травматология платно, платная травматология москва"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta property="og:locale" content="ru_RU" />
          <meta
            property="og:title"
            content="Медицинская Сервисная Компания. Срочная госпитализация в травматологию Москвы — без ОМС. 8 (499) 719-81-00, 24/7"
          />
          <meta
            property="og:description"
            content="Госпитализация при травмах любой сложности. Срочно, официально, с комфортом. Перевод из других клиник, приём без ОМС, круглосуточная поддержка."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://msk-group-hospital.vercel.app/directions/traumatology"
          />
          <meta
            property="og:image"
            content="https://msk-group-hospital.vercel.app/images/banner-3.webp"
          />
          <meta
            property="og:image:alt"
            content="Медицинская Сервисная Компания. Травматология в Москве."
          />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:site_name"
            content="Медицинская Сервисная Компания. Травматология в Москве."
          />

          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/directions/traumatology"/>*/}
          <link rel="canonical" href="https://msk-group-hospital.vercel.app/" />
        </Head>
        <Box component="section">
          <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

          <BaseBanner imgPath="/images/directions/2.webp" title="травматология в москве" />

          <BaseCallBlock text="Ответим на любые вопросы по госпитализации и лечению. Звоните!" />

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Наши партнерские клиники ― это настоящие мастера своего дела, когда речь заходит{' '}
              <span style={{ color: 'var(--red)' }}>
                о лечении болезней и травм опорно-двигательного аппарата
              </span>
              . Здесь работают врачи, которые уже не первый год помогают пациентам с самыми разными
              проблемами — от свежих переломов до давно тянущихся заболеваний суставов и костей.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Что особенно радует: хирурги берутся за операции любой степени сложности и не делают
              скидок на возраст пациента. В их практике — операции для самых юных и самых взрослых,
              причем одинаково внимательное отношение к каждому.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              Но просто практики мало — команда постоянно учится: все прошли серьезную подготовку по
              современным методикам артропластики (если коротко ― это замена суставов новейшими
              протезами, часто по международным стандартам AO). Оборудование используют ведущих
              мировых брендов — так что шанс на восстановление максимально высокий даже там, где
              традиционные подходы уже не работали.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="Основные направления деятельности включают:" marginBottom={true} />

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <span style={{ color: 'var(--red)' }}>
                Наша работа — это не только сложная хирургия
              </span>
              , но еще и постоянный вызов самим себе. Представьте: человек после тяжелой аварии,
              казалось бы, навсегда теряет возможность ходить или даже просто двигать рукой. А мы
              берёмся за реконструкцию конечностей — буквально собираем по частям то, что травма
              разбила на осколки. Такие операции — это всегда ювелирная точность и, честно говоря,
              огромная ответственность.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              <span style={{ color: 'var(--red)' }}>
                Еще одна часть нашей работы — борьба с изношенными и деформированными суставами
              </span>
              , а также со всеми теми неприятностями, которые подкидывает нам позвоночник. Ну не
              молодеем же мы, увы! Разбираемся с самыми сложными случаями остеоартроза или сколиоза,
              используем методики, о которых десять лет назад можно было только мечтать. Например,
              внедряем современные протезы или проводим корригирующие операции с применением
              3D-навигации. Всё для того, чтобы человек снова почувствовал себя мобильным и
              уверенным в движении — иногда первый раз за много лет.
            </BaseText>
          </Box>

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseH2 title="В чём наши преимущества?" marginBottom={true} />

            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              В нашей работе мы не просто следуем современным стандартам — мы действительно внедряем
              в практику те методы, которые сейчас считаются самыми эффективными. Некоторые техники
              мы дорабатываем сами: например,{' '}
              <span style={{ color: 'var(--red)' }}>
                двухэтапное эндопротезирование тазобедренного сустава
              </span>{' '}
              — это уже проверенное решение для сложных клинических случаев, а{' '}
              <span style={{ color: 'var(--red)' }}>
                минимально инвазивные операции на позвоночнике
              </span>{' '}
              позволяют пациенту вернуться к обычной жизни намного быстрее, чем при традиционных
              вмешательствах.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Когда речь заходит о точности, тут нет места компромиссам. Мы используем{' '}
              <span style={{ color: 'var(--red)' }}>компьютерные навигационные системы</span>,
              которые буквально «ведут» хирурга во время установки имплантата. Всё на экране и под
              контролем в реальном времени — ни малейшего отклонения от анатомии конкретного
              человека.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              <span style={{ color: 'var(--red)' }}>
                Любая операция фиксируется в цифровом виде
              </span>
              . Пациент после выписки получает полный пакет данных — на флешке или через облако —
              так что если потребуется последующее лечение или консультация, информация всегда под
              рукой (никому теперь не нужно мучительно вспоминать детали из выписки пятилетней
              давности).
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Мы принципиально не работаем с ноунейм-имплантатами —{' '}
              <span style={{ color: 'var(--red)' }}>
                только оригинальные компоненты от производителей с мировым именем
              </span>
              . Качество здесь — буквально вопрос движения и безболезненной жизни пациента на многие
              годы вперёд.
            </BaseText>
            <BaseText style={{ display: 'block' }}>
              А дальше начинается настоящая совместная работа над восстановлением:{' '}
              <span style={{ color: 'var(--red)' }}>
                реабилитация прописывается индивидуально для каждого
              </span>{' '}
              и охватывает все этапы — от первых дней после операции до полного возвращения к
              привычным делам. Это не какой-то абстрактный реабилитационный «комплекс», а
              продуманная пошаговая поддержка — чтобы процесс восстановления был максимально быстрым
              и комфортным.
            </BaseText>
          </Box>

          <PartnersBlock title="больница травматология платно" color="var(--red)" />

          <BaseCallBlock text="Остались вопросы? Звоните!" />

          <BasePhotoGallery imagesList={traumatologyImages} />
        </Box>
      </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
