import { createID } from '@/lib/createID';

export const footerList1 = [
    { id: createID(), label: 'Миссия', path: '#' },
    { id: createID(), label: 'Подбор лечения', path: '#' },
    { id: createID(), label: 'Клиники', path: '#partners', target: '_self' },
    { id: createID(), label: 'Направления лечения', path: '#direct', target: '_self' },
    { id: createID(), label: 'Реквизиты', path: '/requisites', target: '_self' },
];

export const footerList2 = [
    {
        id: createID(),
        label: 'Перевод пациента из одной больницы в другую',
        // path: 'https://transfer.mskdoctor.ru/',
        path: '/services/transfer',
        target: '_self'
    },
    {
        id: createID(),
        label: 'Плановая платная госпитализация',
        // path: 'https://plan-hospital.mskdoctor.ru/',
        path: '/services/plan-hospital',
        target: '_self'
    },
    {
        id: createID(),
        label: 'Платная госпитализация из регионов',
        // path: 'https://region.mskdoctor.ru/',
        path: '/services/region',
        target: '_self'
    },
    {
        id: createID(),
        label: 'Экстренная платная госпитализация',
        // path: 'https://emergency.mskdoctor.ru/',
        path: '/services/emergency',
        target: '_self'
    },
    {
        id: createID(),
        label: 'Платная госпитализация без полиса ОМС',
        // path: 'https://oms.mskdoctor.ru/',
        path: '/services/oms',
        target: '_self'
    },
    {
        id: createID(),
        label: 'Платная госпитализация в федеральные и ведомственные медицинские учреждения',
        // path: 'https://federal.mskdoctor.ru/',
        path: '/services/federal',
        target: '_self'
    },
    {
        id: createID(),
        label: 'Работа с тяжелыми пациентами',
        // path: 'https://patient.mskdoctor.ru/',
        path: '/services/patient',
        target: '_self'
    },
    {
        id: createID(),
        label: 'Собственная патронажная служба',
        // path: 'https://patronage.mskdoctor.ru/',
        path: '/services/patronage',
        target: '_self'
    },
];
