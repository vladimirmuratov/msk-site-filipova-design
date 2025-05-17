import { createID } from '@/lib/createID';

export const diseasesList = [
    {id: createID(), label: 'лечение боли', path: '/diseases/pain'},
    {id: createID(), label: 'реабилитация после инсульта', path: '/diseases/stroke'},
    {id: createID(), label: 'колопроктология', path: '/diseases/proctology'},
    {id: createID(), label: 'экстренная хирургия', path: '/diseases/emergency-surgery'},
    {id: createID(), label: 'пульмонология', path: '/diseases/pulmonology'},
    {id: createID(), label: 'ХОБЛ', path: '/diseases/copd'},
    {id: createID(), label: 'пневмония', path: '/diseases/pneumonia'},
    {id: createID(), label: 'лечение водородом', path: '/diseases/hydrogen'},
    {id: createID(), label: 'гастроэнтерология', /*path: '/diseases/gastro',*/ path: '/directions/gastroenterology'},
]
