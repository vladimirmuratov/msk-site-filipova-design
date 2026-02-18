import { Box, Link, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import { BaseText } from '@/components/base/BaseText';
import PartnersBlock from '@/components/PartnersBlock';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import React from 'react';
import { surgeryImages } from '@/config/images';
import { BaseBreadcrumbs } from '@/components/base/BaseBreadcrumbs';
import { BaseCallBlock } from '@/components/base/BaseCallBlock';

export default function Surgery() {
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
                Хирургия
            </Typography>,
        ];
    };

    return (
      <>
        <Head>
          <title>Хирургия в Москве — консультация, операция, госпитализация</title>
          <meta
            name="description"
            content="Диагностика и хирургическое лечение различных заболеваний. Подбор клиники и опытного хирурга, организация госпитализации без длительного ожидания."
          />
          <meta
            name="keywords"
            content="хирург москва платно, платная хирургия, приём хирурга без омс, амбулаторная хирургия, удаление новообразований, грыжа операция москва, лечение воспалений хирург, перевязки платно, вскрытие абсцесса, удаление швов, хирург экстренно, срочно к хирургу, хирургическая помощь москва, амбулаторные операции, частный хирург москва, хирургия без очереди"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <meta property="og:locale" content="ru_RU" />
          <meta
            property="og:title"
            content="Медицинская Сервисная Компания. Срочная и плановая хирургия без очередей. 8 (499) 719-81-00, 24/7"
          />
          <meta
            property="og:description"
            content="Экстренные и плановые хирургические вмешательства: госпитализация в течение 1 дня, ведущие хирурги, современное оборудование, круглосуточное сопровождение. Без ОМС — быстро, безопасно, результативно."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://msk-group-hospital.vercel.app/directions/surgery"
          />
          <meta
            property="og:image"
            content="https://msk-group-hospital.vercel.app/images/banner-3.webp"
          />
          <meta
            property="og:image:alt"
            content="Медицинская Сервисная Компания. Хирургия в Москве."
          />
          <meta property="og:image:type" content="image/webp" />
          <meta
            property="og:site_name"
            content="Медицинская Сервисная Компания. Хирургия в Москве."
          />

          {/*<link rel="canonical" href="https://msk-group-hospital.vercel.app/directions/surgery" />*/}
          <link rel="canonical" href="https://msk-group-hospital.vercel.app/" />
        </Head>
        <Box component="section">
          <BaseBreadcrumbs breadcrumbs={breadcrumbs} />

          <BaseBanner imgPath="/images/directions/1.webp" title="хирургия в Москве" />

          <BaseCallBlock />

          <Box
            component="article"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
              marginX: { xs: '10px', lg: 0 },
            }}
          >
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Если позволите, расскажу, как всё устроено у наших партнеров в{' '}
              <span style={{ color: 'var(--red)' }}>хирургических отделениях</span> — ну,чтобы вы
              представляли не абстрактную “медицину будущего”, а довольно осязаемую реальность.
              Представьте не унылую больничную палату из прошлого, а скорее аккуратный номер
              современной гостиницы: одноместные и двухместные комнаты, комфортная кровать, техника
              под рукой — чтобы после операции можно было не считать минуты до выписки, а
              по-настоящему восстанавливаться.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Всё это дело держит в руках опытный хирург, который досконально знает свою работу на
              каждом этапе: от того самого тревожного диагноза до последних шагов восстановления. Ну
              вы знаете этих экспертов-перфекционистов: когда говорит — слушают даже медсестры с
              двадцатилетним стажем. Он не только оперирует, но ещё и ведёт своих пациентов вплоть
              до полного возвращения к привычной жизни.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Операции здесь давно уже не ассоциируются с многонедельными лежаниями и испугом перед
              шрамами: малоинвазивные методики экономят и нервы, и время восстановления. Современные
              сканеры — УЗИ, КТ разной степени фантастичности — позволяют врачу видеть внутренний
              мир пациента буквально до мельчайших деталей; иногда применяют даже такие продвинутые
              вещи, как МР-холангиография (немногие клиники могут похвалиться таким арсеналом).
              Команда работает "одним фронтом": не врач-солист в одиночестве решает загадку
              диагноза, а всё отделение вместе обсуждает сложные случаи.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Кто за всем этим стоит? Не просто доктора по должности, а настоящие профи своего дела:
              кандидаты наук и врачи высшей категории — люди, которые не боятся сложных диагнозов и
              всегда держат планку качества на уровне европейских клиник. Их задача — возвращать
              людям нормальную жизнь, наполненную движением и ощущением собственного тела без боли
              или ограничения.
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Есть варианты размещения на любой вкус: от лаконичных стандартных палат до отдельных
              VIP-номеров. И если вас интересуют современные технологии — они здесь есть: самые
              новые видеоэндоскопические системы от топовых производителей мира помогают проводить
              высокоточные лапароскопические операции без старомодной "большой хирургии".
            </BaseText>
            <BaseText style={{ display: 'block', marginBottom: '10px' }}>
              Короче говоря, госпитализация тут воспринимается не как испытание, а скорее как
              инвестиция в быстрое и максимально комфортное возвращение к нормальной жизни.
            </BaseText>
          </Box>

          <PartnersBlock title="Платные больницы хирургия" color="var(--red)" />

          <BaseCallBlock text="Есть вопросы? Звоните без стеснения!" />

          <BasePhotoGallery imagesList={surgeryImages} />
        </Box>
      </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
