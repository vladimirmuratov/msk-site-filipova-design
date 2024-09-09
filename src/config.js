export const phone = '+7 (499) 719-81-00'
export const phoneWhatsApp = '+79268158505'
export const phoneTelegram = '+79268158505'
export const phoneViber = '79268158505'
export const address = 'Москва, Мичуринский пр-т, 6.'
export const email = 'moscowsc.post@yandex.ru'

export const timeOut = 3000

export const stepsHospitalization = [
    {
        id: 1,
        icon: '/images/icons-red/list.svg',
        title: 'Заявка на сайте',
        text: 'Вы сообщаете диагноз и направляете нам медицинские документы, на основании диагноза мы подберем подходящую вам по диагнозу клинику.'
    },
    {
        id: 2,
        icon: '/images/icons-red/check.svg',
        title: 'Выбор больницы',
        text: 'Вы выбираете больницу и отделение из предложенного списка.'
    },
    {
        id: 3,
        icon: '/images/icons-red/cross.svg',
        title: 'Подбор лечения',
        text: 'Врачи изучают документы и составляют оптимальную стратегию диагностики и лечения.'
    },
    {
        id: 4,
        icon: '/images/icons-red/dialog.svg',
        title: 'Госпитализация',
        text: 'Заключить договор на платную госпитализацию. Без очереди, ожидания и анализов оформиться в стационар. Мы берем на себя все оформление.'
    },
    {
        id: 5,
        icon: '/images/icons-red/hospital.svg',
        title: 'Лечение',
        text: 'Начать лечение, обследование согласно диагнозу. В кризисных ситуациях или при обострении симптомов неотложная медицинская помощь оказывается врачами мгновенно.'
    },
]

export const headerServiceLinks = [
    {id: 1, label: 'Перевод в другую больницу', path: 'https://transfer.mskdoctor.ru'},
    {
        id: 2,
        label: 'Платная госпитализация',
        // path: 'https://plan-hospital.mskdoctor.ru',
        path: '/services/plan-hospital',
    },
    {id: 3, label: 'Экстренная госпитализация', path: 'https://emergency.mskdoctor.ru'},
    {id: 4, label: 'Госпитализация без полиса ОМС', path: 'https://oms.mskdoctor.ru'},
    {id: 5, label: 'Госпитализация из регионов', path: 'https://region.mskdoctor.ru'},
    {id: 6, label: 'Госпитализация в федеральные мед.учреждения', path: 'https://federal.mskdoctor.ru'},
    {id: 7, label: 'Работа с тяжелыми пациентами', path: 'https://patient.mskdoctor.ru'},
    {id: 8, label: 'Патронажная служба', path: 'https://patronage.mskdoctor.ru'},
]

export const servicesInfo = [
    {
        id: 1,
        icon: '/images/icons-red/hospital.svg',
        title: 'Бесплатно подберем лечение',
        text: 'Отлаженная система взаимодействия медицинскими учреждениями Москвы.'
    },
    {
        id: 2,
        icon: '/images/icons-red/man.svg',
        title: 'Личный контроль качества лечения',
        text: 'Сопровождение пациента до выписки и согласовывание с родственником пациента всех процедур.'
    },
    {
        id: 3,
        icon: '/images/icons-red/sofa.svg',
        title: 'Просто и удобно',
        text: 'Принцип «единого окна» для предоставления высококачественных медицинских услуг и премиального обслуживания.'
    },
    {
        id: 4,
        icon: '/images/icons-red/car.svg',
        title: 'Организуем вашу госпитализацию',
        text: 'Транспортировка собственной бригадой скорой медицинской помощи. Юридическая поддержка, оформление документации, размещение в комфортных условиях с должным уходом и лечением.'
    },
]

export const partners = [
    {
        id: 1,
        logo: '/images/partners/2_1_1x.png',
        imgStyle: {height: '64px', width: 'auto'},
        label: 'ФГБУ «Объединенная больница с поликлиникой» Управление делами Президента Российской Федерации',
        address: 'г. Москва, Мичуринский пр-т д. 6',
        license: 'Лицензия № ЛО41-00110-77/00574611 от 29.11.2018'
    },
    {
        id: 2,
        logo: '/images/partners/ckb.png',
        imgStyle: {height: '64px', width: 'auto'},
        label: 'ФГБУ «Объединенная больница с поликлиникой» Управление делами Президента Российской Федерации',
        address: 'г. Москва, ул. Маршала Тимошенко, д. 15',
        license: 'Лицензия Л041-00110-77/00573728 от 14.12.2020'
    },
    {
        id: 3,
        logo: '/images/partners/3_1_1x.png',
        imgStyle: {height: '64px', width: 'auto'},
        label: '«Клиническая больница» Управления делами Президента Российской Федерации',
        address: 'г. Москва, вн. тер. г. муниципальный округ Метрогородок, ул. Лосиноостровская, д. 45, корп. 2',
        license: 'Лицензия Л041-00110-77/00360660 от 27.06.2019'
    },
    {
        id: 4,
        logo: '/images/partners/4_1_1x.png',
        imgStyle: {height: '56px', width: 'auto'},
        label: 'Городская клиническая больница имени С.С. Юдина',
        address: 'г. Москва, Коломенский пр-д, д. 4',
        license: 'Лицензия Л041-01137-77/00574302 от 15.10.2020'
    },
    {
        id: 5,
        logo: '/images/partners/medsi.png',
        imgStyle: {height: '56px', width: 'auto'},
        label: 'МЕДСИ',
        address: 'г. Москва, Грузинский переулок, дом 3А',
        license: 'Лицензия Л041-01137-77/00370395 от 11.11.2020'
    },
    {
        id: 6,
        logo: '/images/partners/6_1_1x.png',
        imgStyle: {height: '56px', width: 'auto'},
        label: 'Юсуповская больница',
        address: 'г. Москва, ул. Нагорная, д. 17, корп. 6',
        license: 'Лицензия Л041-01137-77/00347724 от 19.03.2020'
    },
    {
        id: 7,
        logo: '/images/partners/volinka.svg',
        imgStyle: {height: '82px', width: 'auto'},
        label: 'ФГБУ «Клиническая больница № 1» Управления делами Президента Российской Федерации (Волынская больница)',
        address: 'г. Москва, ул. Староволынская, д. 10',
        license: 'Лицензия Л041-00110-77/00553430 от 31.03.2020'
    },
    /*{
        id: 8,
        logo: '/images/partners/krasnogorsk.webp',
        imgStyle: {height: '82px', width: 'auto'},
        label: 'Красногорская городская больница',
        address: 'Московская область, г.о. Красногорск, г. Красногорск, б-р Павшинский, д. 9',
        license: 'Лицензия Л041-01162-50/00573964 от 16.12.2020'
    },*/
    {
        id: 16,
        logo: '/images/partners/logo_eramish.png',
        imgStyle: {height: '82px', width: 'auto'},
        label: 'ГКБ имени А. К. Ерамишанцева',
        address: 'г. Москва, ул. Ленская, д. 15',
        license: 'Лицензия Л041-01137-77/00574895 от 20.11.2020'
    },
    {
        id: 9,
        logo: '/images/partners/9_1_1x.png',
        imgStyle: {height: '82px', width: 'auto'},
        label: 'Городская клиническая больница № 67 имени Л. А. Ворохобова',
        address: 'г. Москва, ул. Саляма Адиля, д. 2/44',
        license: 'Лицензия Л0-77-01-019806 от 20.03.2020'
    },
    {
        id: 10,
        logo: '/images/partners/pirogovka.png',
        imgStyle: {height: '100px', width: 'auto'},
        label: 'Первая Градская Больница имени Н.И. Пирогова',
        address: 'г. Москва, Ленинский проспект, д. 8',
        license: 'Лицензия Л017-01137-77/00143187 от 01.04.2014'
    },
    {
        id: 11,
        logo: '/images/partners/11_1_1x.png',
        imgStyle: {height: '100px', width: 'auto'},
        label: 'Городская клиническая больница имени В.В. Виноградова',
        address: 'г. Москва, ул. Вавилова, д. 61',
        license: 'Лицензия Л041-01137-77/00574649 от 30.09.2020'
    },
    {
        id: 12,
        logo: '/images/partners/52clinic.svg',
        imgStyle: {height: '100px', width: 'auto'},
        label: 'Городская клиническая больница №52',
        address: 'г. Москва, ул. Пехотная, д.3',
        license: 'Лицензия Л041-00110-50/00574906 от 13.11.2020'
    },
    {
        id: 13,
        logo: '/images/partners/mknc.svg',
        imgStyle: {height: '90px', width: 'auto'},
        label: 'Московский клинический научный центр имени А.С. Логинова',
        address: 'г. Москва, улица Новогиреевская д.1 корпус 1',
        license: 'Лицензия Л041-01137-77/00563190 от 16.12.2020'
    },
    {
        id: 14,
        logo: '/images/partners/botkin.svg',
        imgStyle: {height: '90px', width: 'auto'},
        label: 'Московский многопрофильный научно-клинический центр имени С.П. Боткина',
        address: 'г. Москва 2-ой Боткинский проезд, 5',
        license: 'Лицензия Л041-01137-77/00590128 от 18.12.2020'
    },
    {
        id: 15,
        logo: '/images/partners/gemo-centr.png',
        imgStyle: {height: '90px', width: 'auto'},
        label: 'ФГБУ «НМИЦ ГЕМАТОЛОГИИ» МИНЗДРАВА РОССИИ',
        address: 'г. Москва, Новый Зыковский проезд, д. 4',
        license: 'Лицензия Л041-00110-77/00553287 от 29.01.2018'
    },
]

export const directions = [
    {id: 1, label: 'Хирургия', img: '/images/directions/1.webp', path: '/directions/surgery'},
    {id: 2, label: 'Травматология и ортопедия', img: '/images/directions/2.webp', path: '/directions/traumatology'},
    {id: 3, label: 'Гинекология', img: '/images/directions/3.webp', path: '/directions/gynecology'},
    {id: 4, label: 'Урология', img: '/images/directions/4.webp', path: '/directions/urology'},
    {id: 5, label: 'Кардиология', img: 'images/directions/5.webp', path: '/directions/cardiology'},
    {id: 6, label: 'Неврология', img: 'images/directions/6.webp', path: '/directions/neurology'},
    {id: 7, label: 'Гастроэнтерология', img: 'images/directions/7.webp', path: '/directions/gastroenterology'},
    {id: 8, label: 'Терапия', img: 'images/directions/8.webp', path: '/directions/therapy'},
    {id: 9, label: 'Сомнология', img: 'images/directions/9.webp', path: '/directions/somnology'},
    {id: 10, label: 'Сосудистая хирургия', img: '/images/directions/10.webp', path: '/directions/vascularsurgery'},
    {id: 11, label: 'Нейрохирургия', img: '/images/directions/11.webp', path: '/directions/neurosurgery'},
    {id: 12, label: 'Пульмонология', img: '/images/directions/12.webp', path: '/directions/pulmonology'},
]

export const services = [
    {
        id: 5,
        label: 'ПЕРЕВОД пациента из одной больницы в другую',
        text: 'Осуществляем грамотный и быстрый перевод пациента из городских и районных больниц в ведомственные и федеральные учреждения. Перевод в другую больницу может быть осуществлен в течение 2 часов с момента подачи Вами заявки по телефону.',
        icon: '/images/icons-blue/5.svg',
        path: 'https://transfer.mskdoctor.ru/'
    },
    {
        id: 1,
        label: 'Платная ПЛАНОВАЯ госпитализация',
        text: 'Круглосуточный call-центр для поддержки пациента и решения любых вопросов. На связи менеджеры с медицинским образованием. Наша Служба гарантирует помощь в госпитализации в оптимальные, а при необходимости, в кратчайшие сроки именно в тот медицинский центр, который подходит вам наилучшим образом.',
        icon: '/images/icons-blue/1.svg',
        // path: 'https://plan-hospital.mskdoctor.ru/',
        path: '/services/plan-hospital'
    },
    {
        id: 2,
        label: 'ЭКСТРЕННАЯ платная госпитализация',
        text: 'Для оперативной транспортировки больных мы имеем парк автомобилей скорой помощи и реанимобилей, укомплектованных современным оборудованием.',
        icon: '/images/icons-blue/2.svg',
        path: 'https://emergency.mskdoctor.ru/'
    },
    {
        id: 3,
        label: 'Платная госпитализация БЕЗ ПОЛИСА ОМС',
        text: 'Мы оперативно организуем платную госпитализацию при отсутствии полиса ОМС.',
        icon: '/images/icons-blue/3.svg',
        path: 'https://oms.mskdoctor.ru/'
    },
    {
        id: 4,
        label: 'Платная госпитализация ИЗ РЕГИОНОВ',
        text: 'Круглосуточный call-центр для поддержки пациента и решения любых вопросов. На связи менеджеры с медицинским образованием. Наша Служба гарантирует помощь в госпитализации в оптимальные, а при необходимости, в кратчайшие сроки именно в тот медицинский центр, который подходит вам наилучшим образом.',
        icon: '/images/icons-blue/4.svg',
        path: 'https://region.mskdoctor.ru/'
    },
    {
        id: 6,
        label: 'Платная госпитализация В ФЕДЕРАЛЬНЫЕ И ВЕДОМСТВЕННЫЕ медицинские учреждения',
        text: 'Мы сотрудничаем со всеми ведущими больницами Москвы и Московской области (кроме детских) и прекрасно знаем их компетенции.',
        icon: '/images/icons-blue/6.svg',
        path: 'https://federal.mskdoctor.ru/'
    },
    {
        id: 7,
        label: 'Работа С ТЯЖЕЛЫМИ пациентами',
        text: 'Отказ от сложных случаев лечения противоречит нашим Принципам. Еcли Вы получили отказ от госпитализации, просто позвоните нам.',
        icon: '/images/icons-blue/7.svg',
        path: 'https://patient.mskdoctor.ru/'
    },
    {
        id: 8,
        label: 'Собственная ПАТРОНАЖНАЯ СЛУЖБА',
        text: 'В день обращения мы подберем для Вас опытную, добрую и порядочную патронажную сестру, обладающую всеми необходимыми медицинскими навыками.',
        icon: '/images/icons-blue/8.svg',
        path: 'https://patronage.mskdoctor.ru/'
    },
]

export const footerList1 = [
    {id: 1, label: 'Миссия', path: '#'},
    {id: 2, label: 'Подбор лечения', path: '#'},
    {id: 3, label: 'Клиники', path: '#partners', target: '_self'},
    {id: 4, label: 'Направления лечения', path: '#direct', target: '_self'},
    {id: 5, label: 'Реквизиты', path: '/requisites', target: '_self'},
]

export const footerList2 = [
    {id: 1, label: 'Перевод пациента из одной больницы в другую', path: 'https://transfer.mskdoctor.ru/'},
    {id: 2, label: 'Плановая платная госпитализация', path: 'https://plan-hospital.mskdoctor.ru/'},
    {id: 3, label: 'Платная госпитализация из регионов на связи 24/7', path: 'https://region.mskdoctor.ru/'},
    {id: 4, label: 'Экстренная платная госпитализация', path: 'https://emergency.mskdoctor.ru/'},
    {id: 5, label: 'Платная госпитализация без полиса омс', path: 'https://oms.mskdoctor.ru/'},
    {id: 6, label: 'Платная госпитализация в федеральные и ведомственные медицинские учреждения', path: 'https://federal.mskdoctor.ru/'},
    {id: 7, label: 'Работа с тяжелыми пациентами', path: 'https://patient.mskdoctor.ru/'},
    {id: 8, label: 'Собственная патронажная служба', path: 'https://patronage.mskdoctor.ru/'},
]
