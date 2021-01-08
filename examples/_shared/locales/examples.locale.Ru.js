import LocaleManager from '../../../lib/Core/localization/LocaleManager.js';
//<umd>
import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import Ru from '../../../lib/Gantt/localization/Ru.js';
import SharedRu from './shared.locale.Ru.js';

const examplesRuLocale = LocaleHelper.mergeLocales(SharedRu, {

    extends : 'Ru',

    Baselines : {
        Start              : 'Начало',
        End                : 'Конец',
        Duration           : 'Длительность',
        Complete           : 'Выполнено',
        baseline           : 'базовая линия',
        'Delayed start by' : 'Задержка старта на',
        'Overrun by'       : 'Переполнен на'
    },
    
    Button : {
        Create           : 'Создайте',
        'Critical paths' : 'Критические пути',
        Edit             : 'Pедактировать',
        'Export to PDF'  : 'Экспорт в PDF',
        Features         : 'Характеристики',
        Settings         : 'Настройки'
    },
    
    DateColumn : {
        Deadline : 'Крайний срок'
    },
    
    Field : {
        'Find tasks by name' : 'Найти задачи по названию',
        'Project start'      : 'Старт проекта'
    },
    
    GanttToolbar : {
        'First select the task you want to edit' : 'Сначала выберите задачу, которую хотите отредактировать',
        'New task'                               : 'Новое задание'
    },
    
    Indicators : {
        Indicators     : 'Индикаторы',
        constraintDate : 'Ограничение'
    },
    
    MenuItem : {
        'Draw dependencies'          : 'Нарисуйте зависимости',
        'Enable cell editing'        : 'Включить редактирование ячеек',
        'Hide schedule'              : 'Скрыть расписание',
        'Highlight non-working time' : 'Выделите нерабочее время',
        'Project lines'              : 'Направления проекта',
        'Show baselines'             : 'Показать базовые показатели',
        'Show progress line'         : 'Показать строку прогресса',
        'Show rollups'               : 'Показать сводки',
        'Task labels'                : 'Ярлыки задач'
    },
    
    Slider : {
        'Animation duration ' : 'Продолжительность анимации',
        'Bar margin'          : 'Маржа бара',
        'Row height'          : 'Высота строки'
    },

    StartDateColumn : {
        'Start date' : 'Дата начала'
    },

    StatusColumn : {
        Status : 'Статус'
    },

    TaskTooltip : {
        'Scheduling Mode' : 'Тип планирования',
        Calendar          : 'Календарь',
        Critical          : 'Критично'
    },

    Tooltip : {
        'Adjust settings'          : 'Отрегулируйте настройки',
        'Collapse all'             : 'Свернуть все',
        'Create new task'          : 'Создать новую задачу',
        'Edit selected task'       : 'Редактировать выбранную задачу',
        'Expand all'               : 'Расширить все',
        'Highlight critical paths' : 'Выделите критические пути',
        'Next time span'           : 'В следующий раз',
        'Previous time span'       : 'Предыдущий промежуток времени',
        'Toggle features'          : 'Переключить функции',
        'Zoom in'                  : 'Приблизить',
        'Zoom out'                 : 'Уменьшить',
        'Zoom to fit'              : 'Увеличить по размеру'
    }
});

LocaleHelper.publishLocale('Ru', Ru);
LocaleHelper.publishLocale('RuExamples', examplesRuLocale);

export default examplesRuLocale;
//</umd>

LocaleManager.extendLocale('Ru', examplesRuLocale);
