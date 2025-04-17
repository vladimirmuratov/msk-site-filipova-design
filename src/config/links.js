import { createID } from '@/lib/createID';

export const headerServiceLinks = [
    {
        id: createID(),
        label: 'Перевод в другую больницу',
        // path: 'https://transfer.mskdoctor.ru',
        path: '/services/transfer',
        sitePage: true,
    },
    {
        id: createID(),
        label: 'Платная госпитализация',
        // path: 'https://plan-hospital.mskdoctor.ru',
        path: '/services/plan-hospital',
        sitePage: true,
    },
    {
        id: createID(),
        label: 'Экстренная госпитализация',
        // path: 'https://emergency.mskdoctor.ru',
        path: '/services/emergency',
        sitePage: true,
    },
    {
        id: createID(),
        label: 'Госпитализация без полиса ОМС',
        // path: 'https://oms.mskdoctor.ru',
        path: '/services/oms',
        sitePage: true,
    },
    {
        id: createID(),
        label: 'Госпитализация из регионов',
        // path: 'https://region.mskdoctor.ru',
        path: '/services/region',
        sitePage: true,
    },
    {
        id: createID(),
        label: 'Госпитализация в федеральные мед.учреждения',
        // path: 'https://federal.mskdoctor.ru',
        path: '/services/federal',
        sitePage: true,
    },
    {
        id: createID(),
        label: 'Работа с тяжелыми пациентами',
        // path: 'https://patient.mskdoctor.ru',
        path: '/services/patient',
        sitePage: true,
    },
    {
        id: createID(),
        label: 'Патронажная служба',
        // path: 'https://patronage.mskdoctor.ru',
        path: '/services/patronage',
        sitePage: true,
    },
];
