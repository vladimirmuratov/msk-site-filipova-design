import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Suspense, useEffect, useState } from 'react';
import { BaseModal } from '@/components/base/BaseModal';
import { MessageForm } from '@/components/MessageForm';
import DialogContentText from '@mui/material/DialogContentText';
import { FloatBtnMobile } from '@/components/FloatBtnMobile';
import Header2 from '@/components/Header2';
import { timeOut } from '@/config/default-values';
import { FloatBtnDesktop } from '@/components/FloatBtnDesktop';
import { Metrika } from '@/Metrika';

export const Layout = ({ children }) => {
    const [isOpenForm, setOpenForm] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);
    const [blocked, setBlocked] = useState(false);
    const [isMobile, setMobile] = useState(undefined);

    useEffect(() => {
        const os = navigator.userAgentData.platform;

        if (os === 'Android' || os === 'iOS') {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, []);

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

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    const handleCloseAnswerMessage = () => {
        setSuccess(false);
        setFailed(false);
        setBlocked(false);
    };

    return (
        <>
            <Box
                className="container"
                sx={{
                    minHeight: '100vh',
                    userSelect: 'none', /* ОТКЛЮЧЕНИЕ ВЫДЕЛЕНИЯ ТЕКСТА НА САЙТЕ */
                }}
            >
                <Suspense>
                    <Header2 />
                    {children}
                    <Footer onOpenForm={handleOpenForm} />
                    <Metrika />
                </Suspense>
                {isMobile
                    ? <FloatBtnMobile />
                    : <FloatBtnDesktop onOpenForm={handleOpenForm} />
                }
            </Box>

            <BaseModal open={isOpenForm} handleClose={handleCloseForm} title="Связаться с нами">
                <MessageForm handleClose={handleCloseForm} onSuccess={setSuccess} onFailed={setFailed}
                             onBlock={setBlocked} />
            </BaseModal>

            {success && (
                <BaseModal title="Сообщение отправлено!" open={success} handleClose={handleCloseAnswerMessage}
                           color="var(--blue)">
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center' }}>
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </BaseModal>
            )}

            {failed && (
                <BaseModal title="Ошибка сервера!" open={failed} handleClose={handleCloseAnswerMessage}
                           color="var(--red)">
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center' }}>
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}

            {blocked && (
                <BaseModal title="Ошибка!" open={blocked} handleClose={handleCloseAnswerMessage}
                           color="var(--red)">
                    <DialogContentText id="alert-dialog-description" sx={{ textAlign: 'center' }}>
                        Вы заблокированы!
                    </DialogContentText>
                </BaseModal>
            )}
        </>
    );
};
