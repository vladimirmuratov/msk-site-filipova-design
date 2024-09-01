import {Box} from '@mui/material'
import {Footer} from '@/components/Footer'
import {Suspense, useEffect, useState} from 'react'
import {BaseModal} from '@/components/base/BaseModal'
import {MessageForm} from '@/components/MessageForm'
import DialogContentText from '@mui/material/DialogContentText'
import {timeOut} from '@/config'
import {Header2} from '@/components/Header2'
import {Metrika} from '@/Metrika'
import {FloatBtn} from '@/components/FloatBtn'

export const Layout = ({children}) => {
    const [isOpenForm, setOpenForm] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        let timeout

        if (success || failed) {
            timeout = setTimeout(() => {
                handleCloseAnswerMessage()
            }, timeOut)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [success, failed])

    const handleOpenForm = () => {
        setOpenForm(true)
    }

    const handleCloseForm = () => {
        setOpenForm(false)
    }

    const handleCloseAnswerMessage = () => {
        setSuccess(false)
        setFailed(false)
    }

    return (
        <>
            <Box
                className="container"
                sx={{minHeight: '100vh'}}
            >
                <Suspense>
                    <Header2/>
                    {children}
                    <Metrika/>
                    <Footer onOpenForm={handleOpenForm}/>
                </Suspense>
                <FloatBtn handleOpen={handleOpenForm}/>
            </Box>

            <BaseModal open={isOpenForm} handleClose={handleCloseForm} title="Связаться с нами">
                <MessageForm handleClose={handleCloseForm} onSuccess={setSuccess} onFailed={setFailed}/>
            </BaseModal>

            {success && (
                <BaseModal title="Сообщение отправлено!" open={success} handleClose={handleCloseAnswerMessage}
                           color="var(--blue)">
                    <DialogContentText id="alert-dialog-description">
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </BaseModal>
            )}

            {failed && (
                <BaseModal title="Ошибка сервера!" open={failed} handleClose={handleCloseAnswerMessage}
                           color="var(--red)">
                    <DialogContentText id="alert-dialog-description">
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}
        </>
    )
}
