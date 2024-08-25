import nodemailer from 'nodemailer'
import {Formidable} from 'formidable'

export const config = {
    api: {
        bodyParser: false
    }
}


export default async function handler(req, res) {

    const data = await new Promise((resolve, reject) => {
        const form = new Formidable()

        form.parse(req, (err, fields, files) => {
            if (err) reject({err})
            resolve({err, fields, files})
        })
    })

    // console.log('data', data)
    const filename = Object.keys(data.files)[0]
    const file = data.files[filename][0]
    const filepath = file.filepath
    // console.log('filename', filename)
    // console.log('file', file.filepath)


    //-------- Вариант без FormData ------------------
    /*const message = {
        from: process.env.ADDRESS_FROM,
        to: [process.env.ADDRESS_TO_1, process.env.ADDRESS_TO_2, process.env.ADDRESS_TO_3, process.env.ADDRESS_TO_4],
        subject: `Поступила заявка на звонок: ${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}`,
        html: ` <p>Имя: ${req.body.person}</p>
                <p>Дата рождения: ${req.body.dateBirth ?? 'Нет'}</p>
                <p>Телефон: ${req.body.phone}</p>
                <p>Email: ${req.body.email ?? 'Нет'}</p>
                <p>Информация: ${req.body.info ?? 'Нет'}</p>
                <p>Сообщение пришло с сайта: msk-group-hospital.ru</p>`,
    }*/

    //-------- Вариант с FormData ------------------

    const message = {
        from: process.env.ADDRESS_FROM,
        to: [process.env.ADDRESS_TO_1, process.env.ADDRESS_TO_2, process.env.ADDRESS_TO_3, process.env.ADDRESS_TO_4],
        subject: `Поступила заявка на звонок: ${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}`,
        html: ` <p>Имя: ${data.fields.person[0]}</p>
                <p>Дата рождения: ${data.fields.dateBirth[0] ?? 'Нет'}</p>
                <p>Телефон: ${data.fields.phone[0]}</p>
                <p>Email: ${data.fields.email[0] ?? 'Нет'}</p>
                <p>Информация: ${data.fields.info[0] ?? 'Нет'}</p>
                <p>Сообщение пришло с сайта: msk-group-hospital.ru</p>`,
        attachments: [
            {
                filename: filename,
                path: filepath
            }
        ]
    }

    let transporter = nodemailer.createTransport({
        service: 'mail.ru',
        auth: {
            user: process.env.ADDRESS_FROM,
            pass: process.env.PASSWORD,
        },
    })

    if (req.method === 'POST') {
        transporter.sendMail(message, (err, info) => {

            if (err) {
                res.status(404).json({
                    error: `Connection refused at ${err.address}`
                })
            } else {
                res.status(250).json({
                    success: `Message delivered to ${info.accepted}`
                })
            }
        })
    }

    //-------- Вариант без FormData ------------------

    /*if(req.body.email){
        const message2 = {
            from: process.env.ADDRESS_FROM,
            to: [req.body.email],
            subject: `Вы оставили заявку на звонок на сайте msk-group-hospital.ru ${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}`,
            html: ` <p>Имя: ${req.body.person}</p>
                    <p>Дата рождения: ${req.body.dateBirth ?? 'Нет'}</p>
                    <p>Телефон: ${req.body.phone}</p>
                    <p>Email: ${req.body.email ?? 'Нет'}</p>
                    <p>Информация: ${req.body.info ?? 'Нет'}</p>`,
        }

        transporter.sendMail(message2)
    }*/

    //-------- Вариант с FormData ------------------

    if(data.fields.email[0]){
        const message2 = {
            from: process.env.ADDRESS_FROM,
            to: [data.fields.email[0]],
            subject: `Вы оставили заявку на звонок на сайте msk-group-hospital.ru ${new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}`,
            html: ` <p>Имя: ${data.fields.person[0]}</p>
                    <p>Дата рождения: ${data.fields.dateBirth[0] ?? 'Нет'}</p>
                    <p>Телефон: ${data.fields.phone[0]}</p>
                    <p>Email: ${data.fields.email[0] ?? 'Нет'}</p>
                    <p>Информация: ${data.fields.info[0] ?? 'Нет'}</p>
                  `,
        }

        transporter.sendMail(message2)
    }
}
