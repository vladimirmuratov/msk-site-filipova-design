import { Box, Typography } from '@mui/material';
import { MessageForm } from '@/components/MessageForm';
import { useEffect, useState } from 'react';
import { BaseModal } from '@/components/base/BaseModal';
import DialogContentText from '@mui/material/DialogContentText';
import { timeOut } from '@/config/default-values';

export const FormBlock = () => {
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        let timeout;

        if (success || failed || blocked) {
            timeout = setTimeout(() => {
                handleCloseAnswerMessage();
            }, timeOut);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [success, failed, blocked]);

    const handleCloseAnswerMessage = () => {
        setSuccess(false);
        setFailed(false);
        setBlocked(false);
    };

    /*
    const onSuccess = () => setSuccess(true);
    const onFailed = () => setFailed(true);
    const onBlock = () => setBlocked(true);
    */

    return (
        <>
            <Box
                id="contact"
                component="section"
                sx={{
                    backgroundColor: 'var(--violet)',
                    padding: { xs: '16px', sm: '32px' },
                    color: 'var(--white)'
                }}
            >
                <Box>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: 24, sm: 28 },
                            fontWeight: 300,
                            textTransform: 'uppercase',
                            lineHeight: 1.3,
                            marginBottom: { xs: '5px', sm: '10px' },
                            width: { xs: '100%', sm: '60%' }
                        }}
                    >
                        ОСТАВИТЬ ЗАЯВКУ
                        НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: 14, sm: 16 },
                            fontWeight: 300,
                            marginBottom: { xs: '10px', sm: '15px' },
                            width: { xs: '100%', sm: '60%' }
                        }}
                    >
                        Мы свяжемся с вами и расскажем какие документы потребуются для организации платной
                        госпитализации.
                    </Typography>
                </Box>

                <MessageForm onFailed={setFailed} onSuccess={setSuccess} onBlock={setBlocked} />

            </Box>

            {success && (
                <BaseModal title="Сообщение отправлено!" open={success} handleClose={handleCloseAnswerMessage}
                           color="var(--blue)">
                    <DialogContentText id="alert-dialog-description" sx={{textAlign: 'center'}}>
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </BaseModal>
            )}

            {failed && (
                <BaseModal title="Ошибка сервера!" open={failed} handleClose={handleCloseAnswerMessage}
                           color="var(--red)">
                    <DialogContentText id="alert-dialog-description" sx={{textAlign: 'center'}}>
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}

            {blocked && (
                <BaseModal title="Ошибка!" open={blocked} handleClose={handleCloseAnswerMessage}
                           color="var(--red)">
                    <DialogContentText id="alert-dialog-description" sx={{textAlign: 'center'}}>
                        Вы заблокированы!
                    </DialogContentText>
                </BaseModal>
            )}

        </>
    );
};
