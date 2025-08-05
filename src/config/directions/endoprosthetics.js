import { createID } from '@/lib/createID';

export const endoprosthetics1 = [
    { id: createID(), label: 'Деформирующий остеоартроз (коксартроз, гонартроз)' },
    { id: createID(), label: 'Асептический некроз головки бедренной кости' },
    { id: createID(), label: 'Посттравматические изменения суставов' },
    { id: createID(), label: 'Врожденные патологии (дисплазия тазобедренного сустава)' },
    { id: createID(), label: 'Последствия неудачных операций или переломов' },
];

export const endoprosthetics2 = [
    { id: createID(), label: 'Роботизированное эндопротезирование суставов', isLink: true, href: '/directions/endoprosthetics/robot' },
    { id: createID(), label: 'Эндопротезирование коленного сустава', isLink: true, href: '/directions/endoprosthetics/knee' },
    { id: createID(), label: 'Эндопротезирование тазобедренного сустава', isLink: true, href: '/directions/endoprosthetics/hip' },
    { id: createID(), label: 'Эндопротезирование плечевого сустава', isLink: false },
    { id: createID(), label: 'Эндопротезирование локтевого сустава', isLink: false },
    { id: createID(), label: 'Эндопротезирование голеностопного сустава', isLink: false },
];

export const endoprosthetics3 = [
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Цементные</span >— закрепляются с помощью специального костного цемента</> },
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Бесцементные</span >— приживаются за счёт роста кости в пористую поверхность импланта</> },
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Гибридные</span> — комбинированный способ</> },
];

export const endoprosthetics4 = [
    { id: createID(), label: 'ЛФК и физиотерапию' },
    { id: createID(), label: 'Медицинский контроль' },
    { id: createID(), label: 'Патронаж на дому (при необходимости)' },
    { id: createID(), label: 'Индивидуальный график восстановления' },
];

export const endoprostheticsKnee1 = [
    { id: createID(), label: 'Деформирующий остеоартроз (гонартроз) 3–4 стадии' },
    { id: createID(), label: 'Ревматоидный артрит и другие воспалительные заболевания' },
    { id: createID(), label: 'Посттравматические деформации коленного сустава' },
    { id: createID(), label: 'Асептический некроз' },
    { id: createID(), label: 'Травмы и последствия неудачных операций' },
];

export const endoprostheticsKnee2 = [
    { id: createID(), label: 'из Москвы и Московской области' },
    { id: createID(), label: 'из регионов России' },
    { id: createID(), label: 'из стран СНГ' },
    { id: createID(), label: 'без полиса ОМС' },
];

export const endoprostheticsKnee3 = [
    { id: createID(), label: 'Подбор профильной клиники и врача-ортопеда' },
    { id: createID(), label: 'Госпитализацию в стационар с высоким уровнем сервиса' },
    { id: createID(), label: 'Медицинскую транспортировку пациента при необходимости' },
    { id: createID(), label: 'Перевод из одной больницы в другую' },
    { id: createID(), label: 'Сопровождение тяжёлых пациентов и собственную патронажную службу' },
];

export const endoprostheticsKnee4 = [
    { id: createID(), label: 'Работаем с проверенными хирургами-ортопедами' },
    { id: createID(), label: 'Операции в федеральных и ведомственных клиниках Москвы' },
    { id: createID(), label: 'Возможна госпитализация без ОМС' },
    { id: createID(), label: 'Круглосуточная поддержка' },
    { id: createID(), label: 'Минимум бюрократии — оформление за 1 день' },
];

export const endoprostheticsHip1 = [
    { id: createID(), label: 'Дегенеративных изменениях (коксартроз)' },
    { id: createID(), label: 'Переломах шейки бедра' },
    { id: createID(), label: 'Асептическом некрозе головки бедренной кости' },
    { id: createID(), label: 'Ревматоидном артрите' },
    { id: createID(), label: 'Ограничении подвижности и постоянных болях' },
];

export const endoprostheticsHip2 = [
    { id: createID(), label: 'Диагностика и консультация врача-ортопеда' },
    { id: createID(), label: 'Выбор эндопротеза — цементный, бесцементный, гибридный' },
    { id: createID(), label: 'Операция под наркозом' },
    { id: createID(), label: 'Ранний подъём и восстановление — уже в первый день после вмешательства' },
    { id: createID(), label: 'Реабилитация — под контролем специалистов в клинике или на дому' },
];

export const endoprostheticsHip3 = [
    { id: createID(), label: 'Устранение боли и скованности' },
    { id: createID(), label: 'Восстановление функции конечности' },
    { id: createID(), label: 'Улучшение качества жизни' },
    { id: createID(), label: 'Современные эндопротезы служат 15–25 лет и более' },
];

export const endoprostheticsHip4 = [
    { id: createID(), label: 'Быстрая организация госпитализации — от 1 дня' },
    { id: createID(), label: 'Возможность лечения без полиса ОМС' },
    { id: createID(), label: 'Работаем с федеральными центрами и НИИ' },
    { id: createID(), label: 'Собственная служба медтранспорта и патронаж' },
    { id: createID(), label: 'Сопровождение на всех этапах — от заявки до реабилитации' },
];

export const endoprostheticsRobot1 = [
    { id: createID(), label: 'Тяжёлых формах артроза и коксартроза' },
    { id: createID(), label: 'Дисплазии суставов' },
    { id: createID(), label: 'Последствий травм' },
    { id: createID(), label: 'Нестабильности сустава' },
    { id: createID(), label: 'Ревизионных операциях после предыдущих вмешательств' },
];

export const endoprostheticsRobot2 = [
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Высокая точность установки эндопротеза</span>. Роботизированные системы учитывают анатомию конкретного пациента и обеспечивают идеальное позиционирование импланта.</> },
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Минимальная травматичность</span>. Меньше повреждение мягких тканей — меньше боли после операции.</> },
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Быстрое восстановление</span>. Пациенты возвращаются к активной жизни на 20–30% быстрее по сравнению с классической операцией.</> },
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Низкий риск осложнений</span>. Благодаря точности роботизированного вмешательства снижается риск смещения протеза, нестабильности или повторной операции.</> },
    { id: createID(), label: <><span style={{color: 'var(--red)'}}>Долговечность импланта</span>. Благодаря идеальной посадке срок службы протеза увеличивается.</> },
];

export const endoprostheticsRobot3 = [
    { id: createID(), label: 'Подбор клиники и специалиста' },
    { id: createID(), label: 'Организация переводов из других медицинских учреждений' },
    { id: createID(), label: 'Госпитализация без ОМС' },
    { id: createID(), label: 'Транспортировка пациентов из других регионов РФ и стран СНГ' },
    { id: createID(), label: 'Помощь тяжёлобольным, сопровождение, патронажная служба' },
];

export const endoprostheticsRobot4 = [
    { id: createID(), label: 'Работаем 24/7, включая экстренные случаи' },
    { id: createID(), label: 'Сотрудничаем с ведущими профильными клиниками' },
    { id: createID(), label: 'Персональный подход, полное сопровождение' },
    { id: createID(), label: 'Оперативная организация лечения без очередей' },
    { id: createID(), label: 'Опыт в госпитализации пациентов любого уровня сложности' },
];
