/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*!
 *
 * Bryntum Gantt 4.0.6 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { Gantt, ProjectModel } from 'bryntum-gantt/gantt.lite.umd.js';
export class GanttComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        // available features
        this.featureInputs = [
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
        this.configInputs = [
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
        //#endregion features
        this.onGanttEvents = new EventEmitter();
        // Gantt is rendered into this element
        this.elementRef = element;
    }
    /**
     * @deprecated in favor of ganttInstance
     * @return {?}
     */
    get ganttEngine() {
        console.warn('ganttEngine is deprecated. Use ganttInstance instead.');
        return this.ganttInstance;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const featureConfig = {};
        /** @type {?} */
        const config = {
            appendTo: this.elementRef.nativeElement,
            listeners: {
                /**
                 * @param {?} event
                 * @return {?}
                 */
                catchAll(event) {
                    this.onGanttEvents.emit(event);
                },
                thisObj: this
            },
            features: featureConfig
        };
        // process config options
        this.configInputs.forEach((/**
         * @param {?} configName
         * @return {?}
         */
        configName => {
            if ('ganttId' === configName && this[configName]) {
                config['id'] = this[configName];
            }
            else if (undefined !== this[configName]) {
                config[configName] = this[configName];
            }
        }));
        // process features
        this.featureInputs.forEach((/**
         * @param {?} featureName
         * @return {?}
         */
        featureName => {
            if (featureName in this) {
                featureConfig[featureName] = this[featureName];
            }
        }));
        // create the Bryntum Gantt
        this.ganttInstance = new Gantt(config);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const me = this;
        if (me.ganttInstance) {
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([name, { currentValue }]) => {
                if (me.configInputs.includes(name)) {
                    me.ganttInstance[name] = currentValue;
                }
                if (me.featureInputs.includes(name)) {
                    me.ganttInstance[name] = currentValue;
                }
            }));
        }
    }
}
GanttComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-gantt',
                template: ''
            }] }
];
/** @nocollapse */
GanttComponent.ctorParameters = () => [
    { type: ElementRef }
];
GanttComponent.propDecorators = {
    assignments: [{ type: Input }],
    autoHeight: [{ type: Input }],
    barMargin: [{ type: Input }],
    calendars: [{ type: Input }],
    cls: [{ type: Input }],
    columnLines: [{ type: Input }],
    columns: [{ type: Input }],
    crudManager: [{ type: Input }],
    dependencies: [{ type: Input }],
    dependencyIdField: [{ type: Input }],
    data: [{ type: Input }],
    durationDisplayPrecision: [{ type: Input }],
    emptyText: [{ type: Input }],
    endDate: [{ type: Input }],
    eventColor: [{ type: Input }],
    eventStyle: [{ type: Input }],
    fillLastColumn: [{ type: Input }],
    ganttId: [{ type: Input }],
    height: [{ type: Input }],
    minHeight: [{ type: Input }],
    minWidth: [{ type: Input }],
    project: [{ type: Input }],
    readOnly: [{ type: Input }],
    ref: [{ type: Input }],
    resourceImageFolderPath: [{ type: Input }],
    resources: [{ type: Input }],
    responsiveLevels: [{ type: Input }],
    rowHeight: [{ type: Input }],
    scheduledEventName: [{ type: Input }],
    snap: [{ type: Input }],
    startDate: [{ type: Input }],
    store: [{ type: Input }],
    style: [{ type: Input }],
    taskRenderer: [{ type: Input }],
    tasks: [{ type: Input }],
    tooltip: [{ type: Input }],
    viewPreset: [{ type: Input }],
    width: [{ type: Input }],
    cellEdit: [{ type: Input }],
    cellMenu: [{ type: Input }],
    cellTooltip: [{ type: Input }],
    columnDragToolbar: [{ type: Input }],
    columnPicker: [{ type: Input }],
    columnReorder: [{ type: Input }],
    columnResize: [{ type: Input }],
    filter: [{ type: Input }],
    filterBar: [{ type: Input }],
    group: [{ type: Input }],
    groupSummary: [{ type: Input }],
    headerMenu: [{ type: Input }],
    labels: [{ type: Input }],
    mspExport: [{ type: Input }],
    nonWorkingTime: [{ type: Input }],
    pan: [{ type: Input }],
    pdfExport: [{ type: Input }],
    percentBar: [{ type: Input }],
    projectLines: [{ type: Input }],
    quickFind: [{ type: Input }],
    recurringTimeSpans: [{ type: Input }],
    regionResize: [{ type: Input }],
    resourceTimeRanges: [{ type: Input }],
    rollups: [{ type: Input }],
    search: [{ type: Input }],
    sort: [{ type: Input }],
    stripe: [{ type: Input }],
    subGridConfigs: [{ type: Input }],
    summary: [{ type: Input }],
    taskDrag: [{ type: Input }],
    taskDragCreate: [{ type: Input }],
    taskEdit: [{ type: Input }],
    taskMenu: [{ type: Input }],
    taskResize: [{ type: Input }],
    taskTooltip: [{ type: Input }],
    timeAxisHeaderMenu: [{ type: Input }],
    timeRanges: [{ type: Input }],
    tree: [{ type: Input }],
    onGanttEvents: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    GanttComponent.prototype.elementRef;
    /** @type {?} */
    GanttComponent.prototype.ganttInstance;
    /**
     * @type {?}
     * @private
     */
    GanttComponent.prototype.featureInputs;
    /**
     * @type {?}
     * @private
     */
    GanttComponent.prototype.configInputs;
    /** @type {?} */
    GanttComponent.prototype.assignments;
    /** @type {?} */
    GanttComponent.prototype.autoHeight;
    /** @type {?} */
    GanttComponent.prototype.barMargin;
    /** @type {?} */
    GanttComponent.prototype.calendars;
    /** @type {?} */
    GanttComponent.prototype.cls;
    /** @type {?} */
    GanttComponent.prototype.columnLines;
    /** @type {?} */
    GanttComponent.prototype.columns;
    /** @type {?} */
    GanttComponent.prototype.crudManager;
    /** @type {?} */
    GanttComponent.prototype.dependencies;
    /** @type {?} */
    GanttComponent.prototype.dependencyIdField;
    /** @type {?} */
    GanttComponent.prototype.data;
    /** @type {?} */
    GanttComponent.prototype.durationDisplayPrecision;
    /** @type {?} */
    GanttComponent.prototype.emptyText;
    /** @type {?} */
    GanttComponent.prototype.endDate;
    /** @type {?} */
    GanttComponent.prototype.eventColor;
    /** @type {?} */
    GanttComponent.prototype.eventStyle;
    /** @type {?} */
    GanttComponent.prototype.fillLastColumn;
    /** @type {?} */
    GanttComponent.prototype.ganttId;
    /** @type {?} */
    GanttComponent.prototype.height;
    /** @type {?} */
    GanttComponent.prototype.minHeight;
    /** @type {?} */
    GanttComponent.prototype.minWidth;
    /** @type {?} */
    GanttComponent.prototype.project;
    /** @type {?} */
    GanttComponent.prototype.readOnly;
    /** @type {?} */
    GanttComponent.prototype.ref;
    /** @type {?} */
    GanttComponent.prototype.resourceImageFolderPath;
    /** @type {?} */
    GanttComponent.prototype.resources;
    /** @type {?} */
    GanttComponent.prototype.responsiveLevels;
    /** @type {?} */
    GanttComponent.prototype.rowHeight;
    /** @type {?} */
    GanttComponent.prototype.scheduledEventName;
    /** @type {?} */
    GanttComponent.prototype.snap;
    /** @type {?} */
    GanttComponent.prototype.startDate;
    /** @type {?} */
    GanttComponent.prototype.store;
    /** @type {?} */
    GanttComponent.prototype.style;
    /** @type {?} */
    GanttComponent.prototype.taskRenderer;
    /** @type {?} */
    GanttComponent.prototype.tasks;
    /** @type {?} */
    GanttComponent.prototype.tooltip;
    /** @type {?} */
    GanttComponent.prototype.viewPreset;
    /** @type {?} */
    GanttComponent.prototype.width;
    /** @type {?} */
    GanttComponent.prototype.cellEdit;
    /** @type {?} */
    GanttComponent.prototype.cellMenu;
    /** @type {?} */
    GanttComponent.prototype.cellTooltip;
    /** @type {?} */
    GanttComponent.prototype.columnDragToolbar;
    /** @type {?} */
    GanttComponent.prototype.columnPicker;
    /** @type {?} */
    GanttComponent.prototype.columnReorder;
    /** @type {?} */
    GanttComponent.prototype.columnResize;
    /** @type {?} */
    GanttComponent.prototype.filter;
    /** @type {?} */
    GanttComponent.prototype.filterBar;
    /** @type {?} */
    GanttComponent.prototype.group;
    /** @type {?} */
    GanttComponent.prototype.groupSummary;
    /** @type {?} */
    GanttComponent.prototype.headerMenu;
    /** @type {?} */
    GanttComponent.prototype.labels;
    /** @type {?} */
    GanttComponent.prototype.mspExport;
    /** @type {?} */
    GanttComponent.prototype.nonWorkingTime;
    /** @type {?} */
    GanttComponent.prototype.pan;
    /** @type {?} */
    GanttComponent.prototype.pdfExport;
    /** @type {?} */
    GanttComponent.prototype.percentBar;
    /** @type {?} */
    GanttComponent.prototype.projectLines;
    /** @type {?} */
    GanttComponent.prototype.quickFind;
    /** @type {?} */
    GanttComponent.prototype.recurringTimeSpans;
    /** @type {?} */
    GanttComponent.prototype.regionResize;
    /** @type {?} */
    GanttComponent.prototype.resourceTimeRanges;
    /** @type {?} */
    GanttComponent.prototype.rollups;
    /** @type {?} */
    GanttComponent.prototype.search;
    /** @type {?} */
    GanttComponent.prototype.sort;
    /** @type {?} */
    GanttComponent.prototype.stripe;
    /** @type {?} */
    GanttComponent.prototype.subGridConfigs;
    /** @type {?} */
    GanttComponent.prototype.summary;
    /** @type {?} */
    GanttComponent.prototype.taskDrag;
    /** @type {?} */
    GanttComponent.prototype.taskDragCreate;
    /** @type {?} */
    GanttComponent.prototype.taskEdit;
    /** @type {?} */
    GanttComponent.prototype.taskMenu;
    /** @type {?} */
    GanttComponent.prototype.taskResize;
    /** @type {?} */
    GanttComponent.prototype.taskTooltip;
    /** @type {?} */
    GanttComponent.prototype.timeAxisHeaderMenu;
    /** @type {?} */
    GanttComponent.prototype.timeRanges;
    /** @type {?} */
    GanttComponent.prototype.tree;
    /** @type {?} */
    GanttComponent.prototype.onGanttEvents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9nYW50dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR3JILE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPdEUsTUFBTSxPQUFPLGNBQWM7Ozs7SUFxTHZCLFlBQVksT0FBbUI7O1FBdkt2QixrQkFBYSxHQUFHO1lBQ3BCLFVBQVU7WUFDVixVQUFVO1lBQ1YsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2QsZUFBZTtZQUNmLGNBQWM7WUFDZCxRQUFRO1lBQ1IsV0FBVztZQUNYLE9BQU87WUFDUCxjQUFjO1lBQ2QsWUFBWTtZQUNaLFFBQVE7WUFDUixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLEtBQUs7WUFDTCxXQUFXO1lBQ1gsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1lBQ1gsb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsU0FBUztZQUNULFFBQVE7WUFDUixNQUFNO1lBQ04sUUFBUTtZQUNSLFNBQVM7WUFDVCxVQUFVO1lBQ1YsZ0JBQWdCO1lBQ2hCLFVBQVU7WUFDVixVQUFVO1lBQ1YsWUFBWTtZQUNaLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsWUFBWTtZQUNaLE1BQU07U0FDVCxDQUFDOztRQUdNLGlCQUFZLEdBQUc7WUFDbkIsYUFBYTtZQUNiLFlBQVk7WUFDWixXQUFXO1lBQ1gsV0FBVztZQUNYLEtBQUs7WUFDTCxhQUFhO1lBQ2IsU0FBUztZQUNULGFBQWE7WUFDYixjQUFjO1lBQ2QsTUFBTTtZQUNOLG1CQUFtQjtZQUNuQiwwQkFBMEI7WUFD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Qzs7SUFDeEMsNENBQThDOztJQUM5QyxpQ0FBbUM7O0lBQ25DLGdDQUFrQzs7SUFDbEMsOEJBQWdDOztJQUNoQyxnQ0FBa0M7O0lBQ2xDLHdDQUFnQzs7SUFDaEMsaUNBQW1DOztJQUNuQyxrQ0FBb0M7O0lBQ3BDLHdDQUEwQzs7SUFDMUMsa0NBQW9DOztJQUNwQyxrQ0FBb0M7O0lBQ3BDLG9DQUFzQzs7SUFDdEMscUNBQXVDOztJQUN2Qyw0Q0FBOEM7O0lBQzlDLG9DQUFzQzs7SUFDdEMsOEJBQWdDOztJQUdoQyx1Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqXG4gKiBCcnludHVtIEdhbnR0IDQuMC42IChUUklBTCBWRVJTSU9OKVxuICpcbiAqIENvcHlyaWdodChjKSAyMDIwIEJyeW50dW0gQUJcbiAqIGh0dHBzOi8vYnJ5bnR1bS5jb20vY29udGFjdFxuICogaHR0cHM6Ly9icnludHVtLmNvbS9saWNlbnNlXG4gKlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgR2FudHQsIFByb2plY3RNb2RlbCB9IGZyb20gJ2JyeW50dW0tZ2FudHQvZ2FudHQubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktZ2FudHQnLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBHYW50dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgZ2FudHRJbnN0YW5jZTogR2FudHQ7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBnYW50dEluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldCBnYW50dEVuZ2luZSgpIDogR2FudHQge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2dhbnR0RW5naW5lIGlzIGRlcHJlY2F0ZWQuIFVzZSBnYW50dEluc3RhbmNlIGluc3RlYWQuJylcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FudHRJbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBhdmFpbGFibGUgZmVhdHVyZXNcbiAgICBwcml2YXRlIGZlYXR1cmVJbnB1dHMgPSBbXG4gICAgICAgICdjZWxsRWRpdCcsXG4gICAgICAgICdjZWxsTWVudScsXG4gICAgICAgICdjZWxsVG9vbHRpcCcsXG4gICAgICAgICdjb2x1bW5EcmFnVG9vbGJhcicsXG4gICAgICAgICdjb2x1bW5QaWNrZXInLFxuICAgICAgICAnY29sdW1uUmVvcmRlcicsXG4gICAgICAgICdjb2x1bW5SZXNpemUnLFxuICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgJ2ZpbHRlckJhcicsXG4gICAgICAgICdncm91cCcsXG4gICAgICAgICdncm91cFN1bW1hcnknLFxuICAgICAgICAnaGVhZGVyTWVudScsXG4gICAgICAgICdsYWJlbHMnLFxuICAgICAgICAnbXNwRXhwb3J0JyxcbiAgICAgICAgJ25vbldvcmtpbmdUaW1lJyxcbiAgICAgICAgJ3BhbicsXG4gICAgICAgICdwZGZFeHBvcnQnLFxuICAgICAgICAncGVyY2VudEJhcicsXG4gICAgICAgICdwcm9qZWN0TGluZXMnLFxuICAgICAgICAncXVpY2tGaW5kJyxcbiAgICAgICAgJ3JlY3VycmluZ1RpbWVTcGFucycsXG4gICAgICAgICdyZWdpb25SZXNpemUnLFxuICAgICAgICAncmVzb3VyY2VUaW1lUmFuZ2VzJyxcbiAgICAgICAgJ3JvbGx1cHMnLFxuICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgJ3NvcnQnLFxuICAgICAgICAnc3RyaXBlJyxcbiAgICAgICAgJ3N1bW1hcnknLFxuICAgICAgICAndGFza0RyYWcnLFxuICAgICAgICAndGFza0RyYWdDcmVhdGUnLFxuICAgICAgICAndGFza0VkaXQnLFxuICAgICAgICAndGFza01lbnUnLFxuICAgICAgICAndGFza1Jlc2l6ZScsXG4gICAgICAgICd0YXNrVG9vbHRpcCcsXG4gICAgICAgICd0aW1lQXhpc0hlYWRlck1lbnUnLFxuICAgICAgICAndGltZVJhbmdlcycsXG4gICAgICAgICd0cmVlJ1xuICAgIF07XG5cbiAgICAvLyBjb25maWcgb3B0aW9uc1xuICAgIHByaXZhdGUgY29uZmlnSW5wdXRzID0gW1xuICAgICAgICAnYXNzaWdubWVudHMnLFxuICAgICAgICAnYXV0b0hlaWdodCcsXG4gICAgICAgICdiYXJNYXJnaW4nLFxuICAgICAgICAnY2FsZW5kYXJzJyxcbiAgICAgICAgJ2NscycsXG4gICAgICAgICdjb2x1bW5MaW5lcycsXG4gICAgICAgICdjb2x1bW5zJyxcbiAgICAgICAgJ2NydWRNYW5hZ2VyJyxcbiAgICAgICAgJ2RlcGVuZGVuY2llcycsXG4gICAgICAgICdkYXRhJyxcbiAgICAgICAgJ2RlcGVuZGVuY3lJZEZpZWxkJyxcbiAgICAgICAgJ2R1cmF0aW9uRGlzcGxheVByZWNpc2lvbicsXG4gICAgICAgICdlbXB0eVRleHQnLFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgICdldmVudENvbG9yJyxcbiAgICAgICAgJ2V2ZW50U3R5bGUnLFxuICAgICAgICAnZmlsbExhc3RDb2x1bW4nLFxuICAgICAgICAnZ2FudHRJZCcsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICAnbWluV2lkdGgnLFxuICAgICAgICAnbWluSGVpZ2h0JyxcbiAgICAgICAgJ3Byb2plY3QnLFxuICAgICAgICAncmVhZE9ubHknLFxuICAgICAgICAncmVmJyxcbiAgICAgICAgJ3Jlc291cmNlSW1hZ2VGb2xkZXJQYXRoJyxcbiAgICAgICAgJ3Jlc291cmNlcycsXG4gICAgICAgICdyZXNwb25zaXZlTGV2ZWxzJyxcbiAgICAgICAgJ3Jvd0hlaWdodCcsXG4gICAgICAgICdzY2hlZHVsZWRFdmVudE5hbWUnLFxuICAgICAgICAnc25hcCcsXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICAnc3RvcmUnLFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICAnc3ViR3JpZENvbmZpZ3MnLFxuICAgICAgICAndGFza1JlbmRlcmVyJyxcbiAgICAgICAgJ3Rhc2tzJyxcbiAgICAgICAgJ3Rvb2x0aXAnLFxuICAgICAgICAndmlld1ByZXNldCcsXG4gICAgICAgICd3aWR0aCdcbiAgICBdO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICBASW5wdXQoKSBhc3NpZ25tZW50czogb2JqZWN0W107XG4gICAgQElucHV0KCkgYXV0b0hlaWdodDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBiYXJNYXJnaW46IG51bWJlcjtcbiAgICBASW5wdXQoKSBjYWxlbmRhcnM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGNsczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbHVtbkxpbmVzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGNvbHVtbnM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGNydWRNYW5hZ2VyOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZGVwZW5kZW5jaWVzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY3lJZEZpZWxkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGF0YTogb2JqZWN0W107XG4gICAgQElucHV0KCkgZHVyYXRpb25EaXNwbGF5UHJlY2lzaW9uOiBib29sZWFuIHwgbnVtYmVyO1xuICAgIEBJbnB1dCgpIGVtcHR5VGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuZERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBldmVudENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZXZlbnRTdHlsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZpbGxMYXN0Q29sdW1uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGdhbnR0SWQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5IZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByb2plY3Q6IFByb2plY3RNb2RlbDtcbiAgICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSByZWY6IHN0cmluZztcbiAgICBASW5wdXQoKSByZXNvdXJjZUltYWdlRm9sZGVyUGF0aDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJlc291cmNlczogb2JqZWN0W107XG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZUxldmVsczogYW55O1xuICAgIEBJbnB1dCgpIHJvd0hlaWdodDogbnVsbCB8IG51bWJlcjtcbiAgICBASW5wdXQoKSBzY2hlZHVsZWRFdmVudE5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzbmFwOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN0YXJ0RGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIHN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgc3R5bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0YXNrUmVuZGVyZXI6IGFueTtcbiAgICBASW5wdXQoKSB0YXNrczogb2JqZWN0W107XG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZpZXdQcmVzZXQ6IGFueTtcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIC8vI2VuZHJlZ2lvbiBjb25maWdzXG5cbiAgICAvLyNyZWdpb24gZmVhdHVyZXNcbiAgICBASW5wdXQoKSBjZWxsRWRpdDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjZWxsTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjZWxsVG9vbHRpcDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjb2x1bW5EcmFnVG9vbGJhcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjb2x1bW5QaWNrZXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY29sdW1uUmVvcmRlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjb2x1bW5SZXNpemU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGZpbHRlckJhcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBncm91cDogYm9vbGVhbiB8IG9iamVjdCB8IHN0cmluZztcbiAgICBASW5wdXQoKSBncm91cFN1bW1hcnk6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgaGVhZGVyTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBsYWJlbHM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgbXNwRXhwb3J0OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIG5vbldvcmtpbmdUaW1lOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHBhbjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBwZGZFeHBvcnQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcGVyY2VudEJhcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBwcm9qZWN0TGluZXM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcXVpY2tGaW5kOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlY3VycmluZ1RpbWVTcGFuczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByZWdpb25SZXNpemU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVzb3VyY2VUaW1lUmFuZ2VzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJvbGx1cHM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgc2VhcmNoOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHNvcnQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgc3RyaXBlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN1YkdyaWRDb25maWdzOiBvYmplY3Q7XG4gICAgQElucHV0KCkgc3VtbWFyeTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrRHJhZzogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrRHJhZ0NyZWF0ZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrRWRpdDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrUmVzaXplOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRhc2tUb29sdGlwOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRpbWVBeGlzSGVhZGVyTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lUmFuZ2VzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRyZWU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgLy8jZW5kcmVnaW9uIGZlYXR1cmVzXG5cbiAgICBAT3V0cHV0KCkgb25HYW50dEV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICAvLyBHYW50dCBpcyByZW5kZXJlZCBpbnRvIHRoaXMgZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBmZWF0dXJlQ29uZmlnID0ge30sXG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8gIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2FudHRFdmVudHMuZW1pdChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXNPYmogOiB0aGlzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlcyAgOiBmZWF0dXJlQ29uZmlnXG4gICAgICAgICAgICB9XG4gICAgICAgIDtcblxuICAgICAgICAvLyBwcm9jZXNzIGNvbmZpZyBvcHRpb25zXG4gICAgICAgIHRoaXMuY29uZmlnSW5wdXRzLmZvckVhY2goY29uZmlnTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2dhbnR0SWQnID09PSBjb25maWdOYW1lICYmIHRoaXNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25maWdbJ2lkJ10gPSB0aGlzW2NvbmZpZ05hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1bmRlZmluZWQgIT09IHRoaXNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25maWdbY29uZmlnTmFtZV0gPSB0aGlzW2NvbmZpZ05hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwcm9jZXNzIGZlYXR1cmVzXG4gICAgICAgIHRoaXMuZmVhdHVyZUlucHV0cy5mb3JFYWNoKGZlYXR1cmVOYW1lID0+IHtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlTmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZUNvbmZpZ1tmZWF0dXJlTmFtZV0gPSB0aGlzW2ZlYXR1cmVOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBCcnludHVtIEdhbnR0XG4gICAgICAgIHRoaXMuZ2FudHRJbnN0YW5jZSA9IG5ldyBHYW50dChjb25maWcpO1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmdhbnR0SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtZS5jb25maWdJbnB1dHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2FudHRJbnN0YW5jZVtuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuZmVhdHVyZUlucHV0cy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5nYW50dEluc3RhbmNlW25hbWVdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=