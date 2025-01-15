import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { BaseBanner } from '@/components/base/BaseBanner';
import { BaseText } from '@/components/base/BaseText';
import { LocalHospital } from '@mui/icons-material';
import React from 'react';
import PartnersBlock from '@/components/PartnersBlock';
import { gastroenterologyImages } from '@/config';
import { BasePhotoGallery } from '@/components/base/BasePhotoGallery';
import Head from 'next/head';

export default function Gastroenterology() {
  return (
    <>
      <Head>
        <title>
          Платная гастроэнтерология в Москве. Платные госпитализации 8 (499) 719-81-00, 24/7
        </title>
        <meta
          name="description"
          content="Платная гастроэнтерология в Москве: высококвалифицированные специалисты, комфортные палаты и 24/7 госпитализация. Звоните 8 (499) 719-81-00."
        />
        <meta
          name="keywords"
          content="платная гастроэнтерология в москве, платная больница гастроэнтерология,  платный стационар гастроэнтерология,  платная госпитализация в москве гастроэнтерология, платные палаты в больнице"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box>
        <BaseBanner
          imgPath="/images/directions/7.webp"
          title="платная гастроэнтерология в москве"
        />

        <Box
          sx={{
            paddingY: { xs: '25px', sm: '50px' },
            marginX: { xs: '10px', lg: 0 },
          }}
        >
          <BaseText>
            У наших партнеров сформирован значительный опыт лечения и диагностирования разнообразных
            желудочно-кишечных заболеваний, включая инфекции (особенно хеликобактерные), патологии
            печени желчевыводящих путей всех этиологий, поражения поджелудночной железы и кишечника.
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
            &nbsp;Платная госпитализация в москве гастроэнтерология.
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
              В сферу диагностических исследований входят:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Комплексное биохимическое изучение крови (включая ферменты печени и поджелудка)
                  </BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Иммунные анализы</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Определение липидового профиля, показателей иммунитета</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Выявление маркеров инфекций — бактериальных, вирусных и паразитарных
                  </BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Эндоскопические исследования ЖКТ (включая ФГДС)</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Рентгенография с использованием современного оборудования (рентгенотелевизионные
                    системы, КТ)
                  </BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Ультразвуковые методы, радиоизотопная диагностика</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Магнитно-резонансное сканирование брюшной полости</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Гистологические исследования биопсийных материалов (желудок, печень), включая
                    подтверждение хеликобактероза и вирусного гепатита
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
              Лечебные стратегии включают:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Передовые схемы эрадикации H. pylori</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Этиотропное лечение хронических вирусных гепатитов</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Терапия воспалительных процессов в поджелудочной железе и кишечнике, с
                    восстановлением микрофлоры и моторики при СРК
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
                wordWrap: 'break-word',
                // marginBottom: {xs: '15px', sm: '30px'},
              }}
            >
              Для пациентов с метаболическими нарушениями (ожирение, диабет, дислипопротеинемия)
              разработан комплексный метод:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Индивидуально подобранные диеты</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Физиотерапия</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Лечебная физкультура и плавание</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Гипербарическая оксигенация</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Экстракорпоральные процедуры</BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <BaseText>
            Коллектив состоит из высококлассных гастроэнтерологов, терапевтов с внимательным
            подходом к пациентам, создающим атмосферу заботы и профессионализма по стандартам лучших
            медицинских учреждений страны.
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
              Размещение предусматривает одноместные и двухместные палаты:
            </Typography>
            <List>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Оснащены функциональными кроватями</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Телевизором, телефоном</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Санузлом, душевой кабиной</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>Селекторной связью</BaseText>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ gap: '10px' }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocalHospital fontSize="small" sx={{ color: 'var(--blue)' }} />
                </ListItemIcon>
                <ListItemText>
                  <BaseText>
                    Палаты повышенного комфорта дополнительно включают мягкую мебель и холодильник
                  </BaseText>
                </ListItemText>
              </ListItem>
            </List>
          </Box>

          <PartnersBlock title="платная больница гастроэнтерология" color="var(--red)" />

          <BasePhotoGallery imagesList={gastroenterologyImages} />
        </Box>
      </Box>
    </>
  );
}
