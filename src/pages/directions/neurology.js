import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import Head from 'next/head';
import React from 'react';
import { BaseText } from '@/components/base/BaseText';
import { LocalHospital } from '@mui/icons-material';
import PartnersBlock from '@/components/PartnersBlock';

export default function Neurology() {
  return (
    <>
      <Head>
        <title>
          Платная госпитализация неврологии 8 (499) 719-81-00, 24/7
        </title>
        <meta
          name="description"
          content="Платные стационарные услуги по неврологии в Москве. Квалифицированные специалисты и круглосуточная помощь. Свяжитесь с нами по телефону 8 (499) 719-81-00."
        />
        <meta
          name="keywords"
          content="Платная госпитализация неврология, больница неврология платно, платный стационар неврологии, платная неврология москва"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Платная неврология в Москве 8 (499) 719-81-00, 24/7" />
        <meta property="og:description" content="Платная неврология в Москве. 10 лет опыта. 20 клиник-партнеров. Федеральные, ведомственные и частные клиники. Работаем по всей территории России и СНГ. Оперативно. Финансовая прозрачность." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://msk-group-hospital.ru/directions/neurology" />
        <meta property="og:image" content="https://msk-group-hospital.ru/images/banner-3.webp" />
        <meta property="og:image:alt" content="Медицинская Сервисная Компания. Платная госпитализация 8 (499) 719-81-00, 24/7" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:site_name" content="Медицинская Сервисная Компания. Экстренная госпитализация 8 (499) 719-81-00, 24/7" />
      </Head>
      <Box>
        <BaseBanner imgPath="/images/directions/6.webp" title="платная госпитализация неврологии" />

        <Box
          sx={{
            paddingY: { xs: '25px', sm: '50px' },
            marginX: { xs: '10px', lg: 0 },
          }}
        >
          <BaseText>
            В партнерских медицинских учреждениях{' '}
            <span className="fw-800">неврологические подразделения</span> оснащены всем необходимым
            для комплексного обследования и терапии пациентов с разнообразными заболеваниями нервной
            системы.
          </BaseText>
          <br />
          <br />
          <BaseText>
            Современное оборудование, включая сканеры МРТ/КТ, УЗИ-оборудование, аппаратуру для ЭЭГ и
            ЭМГ исследований, а также полный спектр лабораторных анализов, обеспечивает глубокое
            диагностирование.
          </BaseText>
          <br />
          <br />
          <BaseText>
            Палаты одноместные с высоким уровнем комфорта: телевидение, телефон, личные санузлы со
            встроенными душевыми кабинами.
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
            &nbsp;Платная неврология москва.
          </Typography>

          <Box
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Коллектив профессионалов включает:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Высококвалифицированных неврологов – сертифицированных специалистов
                  </BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Внимательных и опытных медицинских сестер, прошедших специальное обучение по
                    уходу за больными с неврологическими проблемами
                  </BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Младшего персонала, создающего атмосферу домашнего тепла</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box
            className="pt-0"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              В свободные от процедур моменты пациентам доступны:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Прогулки в живописном парке</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Посещение зимнего сада</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Использование библиотечных ресурсов</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <BaseText>
            После стационара возможна переадресация в специализированный Реабилитационный Центр для
            продолжения восстановительного лечения.
          </BaseText>

          <Box
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Спектр неврологических заболеваний, с которыми успешно справляются наши врачи:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Головные боли и болевые синдромы различной локализации</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Нарушения кровообращения мозга</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Проблемы со слухом и зрением</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Депрессии, неврозы, психосоматические расстройства</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Пароксизмальные состояния сознания (эпилепсия)</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Памятные нарушения и проблемы сном</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box
            className="pt-0"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Методы диагностики включают:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>МРТ/КТ исследований</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Нейрофизиологическое обследование</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>УЗИ сосудов, включая дуплексное сканирование</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Лабораторную диагностику</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Полисомнографию</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box
            className="pt-0"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Индивидуальный подход к лечению основывается на:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Современных фармакологических препаратах</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Методах нелекарственного воздействия (физиотерапия, массаж, ЛФК)
                  </BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>ГБО и иглорефлексотерапии</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box
            className="pt-0"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Лечение охватывает следующие заболевания:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Сосудистые нарушения нервной системы</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Последствия черепно-мозговых травм</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Экстрапирамидные расстройства</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Головные боли, периферические неврологические болезни</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box
            className="pt-0"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Противопоказания к госпитализации:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Сложная сердечно-сосудистая/легочная/почечная патология</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Онкология</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Декомпенсированный сахарный диабет</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Гнойные инфекции</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box
            className="pt-0"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Особое внимание уделяется лечению хронических болей в спине:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Точное определение причин</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Быстрое купирование боли</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Комплексная терапия с акцентом на немедикаментозные методы (ЛФК, массаж,
                    магнитотерапия)
                  </BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box
            className="pt-0"
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Реабилитация после инсультов включает:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Индивидуальную лечебную гимнастику</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Восстановление двигательных функций и самостоятельности</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <BaseText>
            Для пациентов с вестибулопатиями проводится совместная работа с ЛОР-врачами,
            обеспечивающая адекватное восстановление равновесия.
          </BaseText>

          <Box
            sx={{
              paddingY: { xs: '25px', sm: '50px' },
            }}
          >
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
              Лечение невротических расстройств предполагает:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Современные медикаменты</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Психотерапию</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Индивидуальный подход и заботу персонала</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <PartnersBlock title="платный стационар неврологии" color="var(--red)" />

          <BaseText>
            Мониторинг состояния пациентов осуществляется неврологами в сотрудничестве с
            психиатрами, что обеспечивает оптимальные сроки лечения.
          </BaseText>
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
