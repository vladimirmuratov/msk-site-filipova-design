import {Box} from '@mui/material'
import {Footer} from '@/components/Footer'
import {Suspense, useEffect, useState} from 'react'
import {BaseModal} from '@/components/base/BaseModal'
import {MessageForm} from '@/components/MessageForm'
import DialogContentText from '@mui/material/DialogContentText'
import {timeOut} from '@/config'
import {Metrika} from '@/Metrika'
import {FloatBtn} from '@/components/FloatBtn'
import Header2 from '@/components/Header2'
import Head from 'next/head';

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
            <Head>
                <title>Платная госпитализация 8(499)719-81-00 МСК</title>
                <meta name="description"
                      content="Московская Сервисная Компания, специализирующаяся на экстренной помощи при госпитализации тяжело больных пациентов. Транспортировка в медицинские учреждения Москвы, Московской области. Организация госпитализации в стационарные отделения." />
                <meta name="keywords"
                      content="платная госпитализация, платная палата, гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="yandex-verification" content="7bb2122b277ff1f4" />
                <link rel="canonical" href="https://msk-group-hospital.ru/" />
                <link rel="icon" href="/favicon.png" />
            </Head>
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
