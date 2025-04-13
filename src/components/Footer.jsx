import { Box, Link, Typography } from '@mui/material';
import { BaseFooterLink } from '@/components/base/BaseFooterLink';
import SocialBlock from '@/components/SocialBlock';
import { email, phone } from '@/config/default-values';
import { footerList1, footerList2 } from '@/config/footer';

export const Footer = ({ onOpenForm }) => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'var(--light-gray)',
                padding: { xs: '15px', sm: '25px' },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: { xs: '10px', sm: '15px' }
                }}
            >
                <Box>
                    <Typography sx={{
                        fontSize: { xs: '14px', sm: '16px' },
                        fontWeight: 500,
                        color: 'var(--blue)',
                        marginBottom: '5px'
                    }}>О проекте</Typography>

                    {footerList1.map((item) => <BaseFooterLink key={item.id} {...item} />)}
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize: { xs: '14px', sm: '16px' },
                        fontWeight: 500,
                        color: 'var(--blue)',
                        marginBottom: '5px'
                    }}>Услуги</Typography>

                    {footerList2.map((item) => <BaseFooterLink key={item.id} {...item} />)}
                </Box>

                <Box>
                    <Typography sx={{
                        fontSize: { xs: '14px', sm: '16px' },
                        fontWeight: 500,
                        color: 'var(--blue)',
                        marginBottom: '5px'
                    }}>Платная госпитализация:</Typography>

                    <Link href={`tel:${phone}`}
                          sx={{
                              '&:hover': {
                                  textDecoration: 'underline !important',
                                  color: 'var(--red)'
                              }
                          }}
                    >
                        <Typography sx={{
                            fontSize: { xs: '18px', sm: '24px' },
                            fontWeight: 300,
                            color: 'var(--red)',
                        }}>{phone}</Typography>
                    </Link>

                    <Link href={`mailto:${email}`}
                          sx={{
                              '&:hover': {
                                  textDecoration: 'underline !important',
                                  color: 'var(--blue)'
                              }
                          }}
                    >
                        <Typography sx={{
                            fontSize: { xs: '14px', sm: '16px' },
                            fontWeight: 500,
                            color: 'var(--blue)',
                            marginBottom: '5px'
                        }}>{email}</Typography>
                    </Link>

                    <Box
                        sx={{
                            marginTop: { xs: '10px', sm: '15px' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <Link
                            onClick={onOpenForm}
                            sx={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                                color: 'var(--black)',
                                fontWeight: 300,
                                backgroundColor: 'var(--white)',
                                paddingX: '15px',
                                paddingY: '10px',
                                textAlign: 'center'
                            }}
                        >Отправить заявку</Link>

                        <Link
                            onClick={onOpenForm}
                            sx={{
                                cursor: 'pointer',
                                textDecoration: 'none',
                                color: 'var(--black)',
                                fontWeight: 300,
                                backgroundColor: 'var(--white)',
                                paddingX: '15px',
                                paddingY: '10px',
                                textAlign: 'center'
                            }}
                        >Заказать звонок</Link>
                    </Box>

                    <Box sx={{ marginTop: '15px' }}>
                        <SocialBlock />
                    </Box>

                </Box>
            </Box>
            <Typography
                sx={{
                    marginTop: { xs: '20px', sm: '30px' },
                    fontSize: 14,
                    fontWeight: 300,
                    textAlign: 'center'
                }}
            >&copy;2014 - {new Date().getFullYear()} OOO "МСК"</Typography>
        </Box>
    );
};
