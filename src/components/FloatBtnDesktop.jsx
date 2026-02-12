import React from 'react';
import { Box, Fab } from '@mui/material';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { BaseSubFab } from '@/components/base/BaseSubFab';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useRouter } from 'next/router';
import { email, maxLink, telegramLink } from '@/config/default-values';
import { MaxIcon } from '@/components/icons/MaxIcon';
import { BaseSubLink } from '@/components/base/BaseSubLink';

export const FloatBtnDesktop = React.memo(({ onOpenForm }) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <Fab
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      color="error"
      sx={{
        position: 'fixed',
        bottom: { xs: '10px', sm: '30px', md: '50px' },
        right: { xs: '10px', sm: '30px', md: '50px' },
      }}>
      <PhoneEnabledIcon />
      {!open &&
        <>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
          <span className="pulse-button__rings"></span>
        </>
      }
      <Box
        sx={{
          transition: 'visibility 0.3s 0.3s',
          visibility: open ? 'visible' : 'hidden',
          position: 'absolute',
          bottom: '55px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          paddingBottom: '10px',
        }}
      >
        <BaseSubFab
          Icon={AlternateEmailIcon}
          bgColor="var(--mail-color)"
          onClick={() => router.push(`mailto:${email}`)}
          delay={0.4}
          isOpen={open}
        />
        {/*<BaseSubFab
                    Icon={WhatsAppIcon} bgColor="var(--whatsapp-color)"
                    onClick={() => router.push(`https://wa.me/${phoneWhatsApp}`)}
                    delay={0.4}
                    isOpen={open}
                />*/}
        <BaseSubLink
          Icon={TelegramIcon}
          bgColor="var(--telegram-color)"
          link={telegramLink}
          delay={0.3}
          isOpen={open}
        />
        <BaseSubLink
          Icon={MaxIcon}
          bgColor="white"
          link={maxLink}
          delay={0.2}
          isOpen={open}
        />
        <BaseSubFab
          Icon={CreateOutlinedIcon}
          onClick={onOpenForm}
          delay={0.1}
          isOpen={open}
        />
      </Box>
    </Fab>
  );
});
