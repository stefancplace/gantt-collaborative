/*!
 *
 * Bryntum Gantt 4.0.6 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
import { Component, OnInit, OnChanges, ElementRef, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { Gantt, ProjectModel } from 'bryntum-gantt/gantt.lite.umd.js';

@Component({
    selector : 'bry-gantt',
    template : ''
})

export class GanttComponent implements OnInit, OnChanges {

    private elementRef: ElementRef;
    public ganttInstance: Gantt;

    /**
     * @deprecated in favor of ganttInstance
     */
    public get ganttEngine() : Gantt {
        console.warn('ganttEngine is deprecated. Use ganttInstance instead.')
        return this.ganttInstance;
    }

    // available features
    private featureInputs = [
        'cellEdit',
        'cellMenu',
        'cellTooltip',
        'columnDragToolbar',
        'columnPicker',
        'columnReorder',
        'columnResize',
        'filter',
        'filterBar',
        'group',
        'groupSummary',
        'headerMenu',
        'labels',
        'mspExport',
        'nonWorkingTime',
        'pan',
        'pdfExport',
        'percentBar',
        'projectLines',
        'quickFind',
        'recurringTimeSpans',
        'regionResize',
        'resourceTimeRanges',
        'rollups',
        'search',
        'sort',
        'stripe',
        'summary',
        'taskDrag',
        'taskDragCreate',
        'taskEdit',
        'taskMenu',
        'taskResize',
        'taskTooltip',
        'timeAxisHeaderMenu',
        'timeRanges',
        'tree'
    ];

    // config options
    private configInputs = [
        'assignments',
        'autoHeight',
        'barMargin',
        'calendars',
        'cls',
        'columnLines',
        'columns',
        'crudManager',
        'dependencies',
        'data',
        'dependencyIdField',
        'durationDisplayPrecision',
        'emptyText',
        'endDate',
        'eventColor',
        'eventStyle',
        'fillLastColumn',
        'ganttId',
        'height',
        'minWidth',
        'minHeight',
        'project',
        'readOnly',
        'ref',
        'resourceImageFolderPath',
        'resources',
        'responsiveLevels',
        'rowHeight',
        'scheduledEventName',
        'snap',
        'startDate',
        'store',
        'style',
        'subGridConfigs',
        'taskRenderer',
        'tasks',
        'tooltip',
        'viewPreset',
        'width'
    ];

    //#region configs
    @Input() assignments: object[];
    @Input() autoHeight: boolean;
    @Input() barMargin: number;
    @Input() calendars: object[];
    @Input() cls: string;
    @Input() columnLines: boolean | object;
    @Input() columns: object[];
    @Input() crudManager: object;
    @Input() dependencies: boolean | object;
    @Input() dependencyIdField: string;
    @Input() data: object[];
    @Input() durationDisplayPrecision: boolean | number;
    @Input() emptyText: string;
    @Input() endDate: any;
    @Input() eventColor: string;
    @Input() eventStyle: string;
    @Input() fillLastColumn: boolean;
    @Input() ganttId: string;
    @Input() height: number | string;
    @Input() minHeight: number | string;
    @Input() minWidth: number | string;
    @Input() project: ProjectModel;
    @Input() readOnly: boolean;
    @Input() ref: string;
    @Input() resourceImageFolderPath: string;
    @Input() resources: object[];
    @Input() responsiveLevels: any;
    @Input() rowHeight: null | number;
    @Input() scheduledEventName: string;
    @Input() snap: boolean;
    @Input() startDate: any;
    @Input() store: object;
    @Input() style: string;
    @Input() taskRenderer: any;
    @Input() tasks: object[];
    @Input() tooltip: string;
    @Input() viewPreset: any;
    @Input() width: number | string;
    //#endregion configs

    //#region features
    @Input() cellEdit: boolean | object;
    @Input() cellMenu: boolean | object;
    @Input() cellTooltip: boolean | object;
    @Input() columnDragToolbar: boolean | object;
    @Input() columnPicker: boolean;
    @Input() columnReorder: boolean;
    @Input() columnResize: boolean;
    @Input() filter: boolean | object;
    @Input() filterBar: boolean | object;
    @Input() group: boolean | object | string;
    @Input() groupSummary: boolean | object;
    @Input() headerMenu: boolean | object;
    @Input() labels: boolean | object;
    @Input() mspExport: boolean | object;
    @Input() nonWorkingTime: boolean;
    @Input() pan: boolean | object;
    @Input() pdfExport: boolean | object;
    @Input() percentBar: boolean | object;
    @Input() projectLines: boolean | object;
    @Input() quickFind: boolean | object;
    @Input() recurringTimeSpans: boolean | object;
    @Input() regionResize: boolean | object;
    @Input() resourceTimeRanges: boolean | object;
    @Input() rollups: boolean | object;
    @Input() search: boolean | object;
    @Input() sort: boolean | object;
    @Input() stripe: boolean | object;
    @Input() subGridConfigs: object;
    @Input() summary: boolean | object;
    @Input() taskDrag: boolean | object;
    @Input() taskDragCreate: boolean | object;
    @Input() taskEdit: boolean | object;
    @Input() taskMenu: boolean | object;
    @Input() taskResize: boolean | object;
    @Input() taskTooltip: boolean | object;
    @Input() timeAxisHeaderMenu: boolean | object;
    @Input() timeRanges: boolean | object;
    @Input() tree: boolean | object;
    //#endregion features

    @Output() onGanttEvents = new EventEmitter<object>();

    constructor(element: ElementRef) {
        // Gantt is rendered into this element
        this.elementRef = element;
    }

    ngOnInit(): void {

        const
            featureConfig = {},
            config = {
                appendTo  : this.elementRef.nativeElement,
                listeners : {
                    catchAll(event: any) {
                        this.onGanttEvents.emit(event);
                    },
                    thisObj : this
                },
                features  : featureConfig
            }
        ;

        // process config options
        this.configInputs.forEach(configName => {
            if ('ganttId' === configName && this[configName]) {
                config['id'] = this[configName];
            } else if (undefined !== this[configName]) {
                config[configName] = this[configName];
            }
        });

        // process features
        this.featureInputs.forEach(featureName => {
            if (featureName in this) {
                featureConfig[featureName] = this[featureName];
            }
        });

        // create the Bryntum Gantt
        this.ganttInstance = new Gantt(config);

    }

    ngOnChanges(changes: SimpleChanges): void {
        const me = this;

        if (me.ganttInstance) {
            Object.entries(changes).forEach(([name, { currentValue }]) => {
                if (me.configInputs.includes(name)) {
                    me.ganttInstance[name] = currentValue;
                }

                if (me.featureInputs.includes(name)) {
                    me.ganttInstance[name] = currentValue;
                }
            });
        }
    }

}
