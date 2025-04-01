import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import Head from 'next/head';
import { LocalHospital } from '@mui/icons-material';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';

export default function Gynecology() {
  return (
    <>
      <Head>
        <title>Гинекология госпитализация. 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Платная госпитализация в гинекологию. Обеспечим комфорт и заботу 24/7. Звоните: 8 (499) 719-81-00 для записи."
        />
        <meta
          name="keywords"
          content="гинекология госпитализация, платные больницы гинекологии, стационар гинекологическое отделение, стационар гинекология москва"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Платная гинекология в Москве 8 (499) 719-81-00, 24/7" />
        <meta property="og:description" content="Платная гинекология в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://msk-group-hospital.ru/directions/gynecology" />
        <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
        <meta property="og:image:alt" content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:site_name" content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
      </Head>
      <Box>
        <BaseBanner imgPath="/images/directions/3.webp" title="гинекология госпитализация" />

        <Box
          sx={{
            paddingY: { xs: '25px', sm: '50px' },
            marginX: { xs: '10px', lg: 0 },
          }}
        >
          <BaseText>
            В <span className="fw-800">отделениях гинекологии</span> наших партнеров гарантируется
            полноценная диагностика, включающая экспресс-обследования и профессиональную
            консультацию с размещением в комфортабельных одно- или двухместных палатах стационара.
          </BaseText>
          <Typography
            component="h2"
            sx={{
              color: 'var(--blue)',
              fontSize: { xs: 18, sm: 20 },
              fontWeight: 400,
              display: 'inline',
            }}
          >
            &nbsp;Стационар гинекологическое отделение.
          </Typography>
          <br />
          <br />
          <BaseText>
            Квалифицированный коллектив отделения, обладающий дружелюбием и высоким уровнем
            мастерства, обеспечивает быстрое и результативное решение медицинских задач пациенток.
          </BaseText>
          <br />
          <br />
          <BaseText>
            Особенностью гинекологического стационарного отделения является фокус на максимальное
            сохранение репродуктивной функции женщин. Это достигается за счет применения
            инновационных авторских методик лапароскопических операций, тщательного
            предоперационного анализа как генитальных, так и внеполовой патологии. Особое внимание
            уделяется внимательному послеоперационному сопровождению с контролем состояния
            дыхательных и сердечно-сосудистых систем. Отличительная черта — оперативное
            вмешательство для женщин с тяжелыми сопутствующими заболеваниями.
          </BaseText>
          <Typography
            component="h2"
            sx={{
              color: 'var(--blue)',
              fontSize: { xs: 18, sm: 20 },
              fontWeight: 400,
              display: 'inline',
            }}
          >
            &nbsp;Стационар гинекология Москва.
          </Typography>
          <br />
          <br />
          <BaseText>Госпитализация организована как в экстренном, так и плановом режимах.</BaseText>
          <br />
          <br />
          <Box
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: 32, sm: 38 },
                  fontWeight: 300,
                  color: 'var(--red)',
                  textTransform: 'uppercase',
                  // marginBottom: {xs: '15px', sm: '30px'},
                }}
              >
                В отделении гинекологии стационара проводится:
              </Typography>
              <br />
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                1. Большой спектр органосохраняющих лапароскопических хирургических вмешательств:
              </Typography>
              <List>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Устранение кист яичников</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Лечение апоплексии и внематочной беременности, поликистоза</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>
                      Операции по восстановлению репродуктивного здоровья (бесплодие)
                    </BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Коррекция наружных генитальных проявлений эндометриоза</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Удаление миомы матки и устранение спаек в малом тазу</BaseText>
                  </ListItemText>
                </ListItem>
              </List>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                2. Операции на онкоурологических патологиях женских половых органов:
              </Typography>
              <List>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>лечение рака шейки, яичников и тела матки (эндометрия)</BaseText>
                  </ListItemText>
                </ListItem>
              </List>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                3. Хирургическое вмешательство с использованием лапаротомного доступа различной
                сложности.
              </Typography>
              <br />

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                4. Эстетические операции в гинекологии:
              </Typography>
              <List>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Удаление кист бартолиниевой железы</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>
                      Реконструкция влагалищных стенок, восстановление девственной плевы
                      (гименопластика)
                    </BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>
                      Пластическая коррекция малых половых губ и хирургия при недержании мочи
                    </BaseText>
                  </ListItemText>
                </ListItem>
              </List>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                5. Мелкие гинекологические процедуры:
              </Typography>
              <List>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Диагностическая гистероскопия с раздельным выскабливанием</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Удаление полипов эндометрия, миоматозных узлов</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Рассечение внутриматочных синехий и перегородок</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Вскрытие абсцессов бартолиниевой железы</BaseText>
                  </ListItemText>
                </ListItem>
              </List>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                6. Консервативное лечение:
              </Typography>
              <List>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>
                      Терапия миомы, эндометриоза матки, функциональных кист яичников
                    </BaseText>
                  </ListItemText>
                </ListItem>
              </List>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                7. Специализированные услуги:
              </Typography>
              <List>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Планирование семьи и подбор контрацепции</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Заместительная гормональная терапия в период менопаузы</BaseText>
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>Профилактика и лечение остеопороза</BaseText>
                  </ListItemText>
                </ListItem>
              </List>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                8. Диагностические процедуры:
              </Typography>
              <List>
                <ListItem sx={{ gap: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <BaseText>
                      Аспирационная биопсия эндометрия, удаление полипов цервикального канала
                    </BaseText>
                  </ListItemText>
                </ListItem>
              </List>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: 20, sm: 28 },
                  fontWeight: 300,
                  color: 'var(--blue)',
                }}
              >
                9. Лечение бесплодия у женщин, терапия патологий шейки матки (лечение эктопии,
                лейкоплакии и дисплазий)
              </Typography>
            </Box>

            <PartnersBlock title="платные больницы гинекологии" color="var(--red)" />
          </Box>
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
