import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { LocalHospital } from '@mui/icons-material';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import Head from 'next/head';

export default function Somnology() {
  return (
    <>
      <Head>
        <title>Сомнология в Москве. Платные госпитализации 8 (499) 719-81-00, 24/7</title>
        <meta
          name="description"
          content="Профессиональная сомнология в Москве. Лечение храпа и платные госпитализации 24/7. Свяжитесь с нами по телефону 8 (499) 719-81-00 для записи."
        />
        <meta
          name="keywords"
          content="сомнолог лечение, сомнолог москва лечение храпа, сомнология в москве"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box>
        <BaseBanner imgPath="/images/directions/9.webp" title="сомнология в москве" />

        <Box
          sx={{
            paddingY: { xs: '25px', sm: '50px' },
            marginX: { xs: '10px', lg: 0 },
          }}
        >
          <BaseText>
            Задача <span className="fw-800">отделения сомнологии</span> - диагностики расстройств
            сонного ритма. Мультидисциплинарная команда, специализирующуюся на всестороннем изучении
            и воздействии на разнообразие сбоев в режиме сна, оснащена передовыми инструментами для
            преодоления даже самых сложных и хронических нарушений.
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
              Отделение сомнологии специализируется на диагностике и терапии широкого спектра
              расстройств:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Хроническая бессонница</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Зависимость от снотворных препаратов</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Гиперсомния (чрезмерная дневная сонливость)</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Нарколепсия</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Нарушения циркадного ритма</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Невротические состояния, включая депрессию</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Апноэ сна и храповые синдромы</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Расстройства пищевого поведения (включая ожирение)</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Ночное учащенное мочеиспускание</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Эректильная дисфункция</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Сердечно-сосудистые проблемы во сне: аритмии, гипертония, ночные удушья и
                    вегетативные кризы
                  </BaseText>
                </ListItemText>
              </ListItem>
            </List>

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
              Дополнительные синдромы:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Синдром беспокойных ног (РЛС)</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Бруксизм</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Ночные кошмары, лунатизм, пробуждения с нарушениями сознания</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Сноговорение и судороги во сне</BaseText>
                </ListItemText>
              </ListItem>
            </List>

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
              Диагностические методы:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Полная полисомнографическая оценка (с учетом эректильной функции)
                  </BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Кардио-респираторный мониторинг</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Тестирование латентного периода сна</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Оптимизация режима СИПАП терапии</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Энцефалофония для глубокого анализа мозговых процессов</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Психотерапевтическая поддержка</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <BaseText>
            Мы гарантируем комплексный, персонализированный подход к каждому пациенту с целью
            восстановления гармоничного сна и улучшения качества жизни.
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
            &nbsp;Сомнолог лечение.
          </Typography>

          <PartnersBlock title="сомнолог москва лечение храпа" color="var(--red)" />
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
