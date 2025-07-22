import React, { memo } from 'react';
import { BaseText } from '@/components/base/BaseText';
import { Box, Link, Typography } from '@mui/material';
import { phone } from '@/config/default-values';

export const BaseCallBlock = memo(({text = 'Запись на консультацию возможна по телефону или через форму на сайте.'}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingY: { xs: '25px', sm: '50px' },
                marginX: { xs: '10px', lg: 0 },
            }}
        >
            <BaseText
                style={{
                    display: 'block',
                    marginBottom: '10px',
                    color: 'var(--red)',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    textWrap: 'balance',
                }}
            >
                {text}
            </BaseText>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                }}
            >
                <img
                    src="/images/icons-red/phone.svg"
                    alt="phone"
                    style={{ width: 40, height: 40, }}
                />
                <Link href={`tel:${phone}`}
                      sx={{
                          '&:hover': {
                              textDecoration: 'underline !important',
                              color: 'var(--red)'
                          }
                      }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '19px', sm: '24px', md: '24px', lg: '28px' },
                            fontWeight: 600,
                            color: 'var(--red)',
                            whiteSpace: 'nowrap',
                            lineHeight: 1.1,
                            textAlign: 'center',
                        }}
                    >
                        {phone}
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
});
