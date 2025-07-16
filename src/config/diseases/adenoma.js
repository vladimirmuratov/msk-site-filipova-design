import { createID } from '@/lib/createID';
import { Box } from '@mui/material';

export const adenoma1 = [
    { id: createID(), label: 'Возрастные гормональные изменения' },
    { id: createID(), label: 'Наследственная предрасположенность' },
    { id: createID(), label: 'Малоподвижный образ жизни' },
    { id: createID(), label: 'Избыточный вес, неправильное питание' },
    { id: createID(), label: 'Хронические воспалительные процессы мочеполовой системы' },
];

export const adenoma2 = [
    { id: createID(), label: 'Частое мочеиспускание, особенно ночью (никтурия)' },
    { id: createID(), label: 'Слабый напор струи мочи' },
    { id: createID(), label: 'Ощущение неполного опорожнения мочевого пузыря' },
    { id: createID(), label: 'Задержка мочеиспускания' },
    { id: createID(), label: 'Императивные позывы и недержание' },
];

export const adenoma3 = [
    { id: createID(), label: 'Консультацию уролога' },
    { id: createID(), label: 'Пальцевое ректальное исследование' },
    { id: createID(), label: 'УЗИ предстательной железы' },
    { id: createID(), label: 'Анализ ПСА (простат-специфический антиген)' },
    { id: createID(), label: 'Урофлоуметрию' },
    { id: createID(), label: 'Анализы мочи и крови' },
];

export const adenoma4 = [
    { id: createID(), label: <><Box component="span" sx={{ color: 'var(--red)' }}>Консервативная терапия</Box> — назначение препаратов, снижающих симптомы и замедляющих рост ткани простаты.</> },
    { id: createID(), label: <><Box component="span" sx={{ color: 'var(--red)' }}>Современные малоинвазивные методы</Box> — лазерная вапоризация, трансуретральная резекция простаты (ТУР), эмболизация артерий простаты.</> },
    { id: createID(), label: <><Box component="span" sx={{ color: 'var(--red)' }}>Хирургическое лечение</Box> — проводится при выраженных нарушениях мочеиспускания и неэффективности медикаментозной терапии.</> },
];

export const adenoma5 = [
    { id: createID(), label: 'Опытные врачи-урологи' },
    { id: createID(), label: 'Современное оборудование' },
    { id: createID(), label: 'Индивидуальный подход к каждому пациенту' },
    { id: createID(), label: 'Безопасные и эффективные методики лечения' },
    { id: createID(), label: 'Конфиденциальность и комфорт на всех этапах лечения' },
];
