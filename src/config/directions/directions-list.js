import { createID } from '@/lib/createID';

export const directionsList = [
    { id: createID(), label: 'Хирургия', img: '/images/directions/1.webp', path: '/directions/surgery' },
    {
        id: createID(),
        label: 'Травматология и ортопедия',
        img: '/images/directions/2.webp',
        path: '/directions/traumatology',
    },
    { id: createID(), label: 'Гинекология', img: '/images/directions/3.webp', path: '/directions/gynecology' },
    { id: createID(), label: 'Урология', img: '/images/directions/4.webp', path: '/directions/urology' },
    { id: createID(), label: 'Кардиология', img: 'images/directions/5.webp', path: '/directions/cardiology' },
    { id: createID(), label: 'Неврология', img: 'images/directions/6.webp', path: '/directions/neurology' },
    {
        id: createID(),
        label: 'Гастроэнтерология',
        img: 'images/directions/7.webp',
        path: '/directions/gastroenterology',
    },
    { id: createID(), label: 'Терапия', img: 'images/directions/8.webp', path: '/directions/therapy' },
    { id: createID(), label: 'Сомнология', img: 'images/directions/9.webp', path: '/directions/somnology' },
    {id: createID(), label: 'Пульмонология', img: '/images/directions/12.webp', path: '/directions/pulmonology'},
    {id: createID(), label: 'Колопроктология', img: '/images/directions/13.webp', path: '/directions/proctology'},
    // {id: 10, label: 'Сосудистая хирургия', img: '/images/directions/10.webp', path: '/directions/vascularsurgery'},
    // {id: 11, label: 'Нейрохирургия', img: '/images/directions/11.webp', path: '/directions/neurosurgery'},
];
