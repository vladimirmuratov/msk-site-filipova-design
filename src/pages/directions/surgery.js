import { Box, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import { BaseText } from '@/components/base/BaseText';
import PartnersBlock from '@/components/PartnersBlock';
import { surgeryImages } from '@/config';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';

export default function Surgery() {
  return (
    <>
      <Head>
        <title>
          Платная госпитализация в Москве хирургия. Платные госпитализации 8 (499) 719-81-00, 24/7
        </title>
        <meta
          name="description"
          content="Обеспечьте себе качественную платную хирургическую помощь в Москве! Звоните 8 (499) 719-81-00, наша команда работает 24/7 для вашего удобства."
        />
        <meta
          name="keywords"
          content="платная госпитализация в москве хирургия, платные больницы хирургия, платная хирургия, платная палата в хирургии"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://msk-group-hospital.ru/" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box>
        <BaseBanner
          imgPath="/images/directions/1.webp"
          title="Платная госпитализация в Москве хирургия"
        />

        <Box
          sx={{
            paddingY: { xs: '25px', sm: '50px' },
            marginX: { xs: '10px', lg: 0 },
          }}
        >
          <BaseText>
            В <span className="fw-800">отделениях хирургии</span> наших партнеров внедрены передовые
            стандарты, предлагающие пациентам одноместные и двухместные палаты, оснащенные по
            последнему слову техники для обеспечения уютного пребывания в процессе хирургического
            лечения.
            <br />
            <br />
            Делом руководит хирург с обширным опытом успешной работы во всех аспектах хирургии – от
            диагностики и операций до реабилитации различных патологий, подтверждая статус ведущего
            специалиста своего профиля.
          </BaseText>
          <Typography
            component="h2"
            sx={{
              color: 'var(--blue)',
              fontSize: { xs: 14, sm: 16, md: 18 },
              fontWeight: 400,
              display: 'inline',
            }}
          >
            &nbsp;Платная госпитализация в Москве хирургия.
          </Typography>
          <br />
          <br />
          <BaseText>
            Применение инновационных малоинвазивных методов в стационаре минимизирует травматичность
            вмешательств, сокращает сроки госпитализации и ускоряет восстановление пациентов. В
            распоряжении хирургов – новейшие технологии: УЗИ, МСКТ, КТ-исследования и даже передовое
            использование МР-холангиографии. Мультидисциплинарный подход к диагностике объединяет
            все необходимые инструменты для комплексной оценки состояния здоровья.
          </BaseText>

          <PartnersBlock title="Платные больницы хирургия" color="var(--red)" />

          <br />
          <br />
          <BaseText>
            Профессиональный состав отделения включает кандидатов наук в медицине, а также врачей
            высшей категории, что гарантирует высочайший уровень медицинского обслуживания.
          </BaseText>
          <Typography
            component="h3"
            sx={{
              color: 'var(--blue)',
              fontSize: { xs: 14, sm: 16, md: 18 },
              fontWeight: 400,
              display: 'inline',
            }}
          >
            &nbsp;Платная хирургия. &nbsp;
          </Typography>
          <BaseText>
            Основная задача – обеспечение оптимального качества жизни пациентов благодаря внедрению
            современных технологий и высокому профессионализму команды.
          </BaseText>
          <Typography
            component="h3"
            sx={{
              color: 'var(--blue)',
              fontSize: { xs: 14, sm: 16, md: 18 },
              fontWeight: 400,
              display: 'inline',
            }}
          >
            &nbsp;Платная палата в хирургии.&nbsp;
          </Typography>
          <BaseText>
            Палаты предлагаются как стандартного комфортного уровня, так и в VIP-сегменте с
            использованием видеоэндоскопических систем от мировых лидеров индустрии для проведения
            точных лапароскопических операций.
          </BaseText>

          <BasePhotoGallery imagesList={surgeryImages} />
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}
