/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var GanttComponent = /** @class */ (function () {
    function GanttComponent(element) {
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
    Object.defineProperty(GanttComponent.prototype, "ganttEngine", {
        /**
         * @deprecated in favor of ganttInstance
         */
        get: /**
         * @deprecated in favor of ganttInstance
         * @return {?}
         */
        function () {
            console.warn('ganttEngine is deprecated. Use ganttInstance instead.');
            return this.ganttInstance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GanttComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var featureConfig = {};
        /** @type {?} */
        var config = {
            appendTo: this.elementRef.nativeElement,
            listeners: {
                catchAll: /**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
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
        function (configName) {
            if ('ganttId' === configName && _this[configName]) {
                config['id'] = _this[configName];
            }
            else if (undefined !== _this[configName]) {
                config[configName] = _this[configName];
            }
        }));
        // process features
        this.featureInputs.forEach((/**
         * @param {?} featureName
         * @return {?}
         */
        function (featureName) {
            if (featureName in _this) {
                featureConfig[featureName] = _this[featureName];
            }
        }));
        // create the Bryntum Gantt
        this.ganttInstance = new Gantt(config);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GanttComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var me = this;
        if (me.ganttInstance) {
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
                if (me.configInputs.includes(name)) {
                    me.ganttInstance[name] = currentValue;
                }
                if (me.featureInputs.includes(name)) {
                    me.ganttInstance[name] = currentValue;
                }
            }));
        }
    };
    GanttComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bry-gantt',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    GanttComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return GanttComponent;
}());
export { GanttComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC8iLCJzb3VyY2VzIjpbImxpYi9nYW50dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUdySCxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXRFO0lBMExJLHdCQUFZLE9BQW1COztRQXZLdkIsa0JBQWEsR0FBRztZQUNwQixVQUFVO1lBQ1YsVUFBVTtZQUNWLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsY0FBYztZQUNkLGVBQWU7WUFDZixjQUFjO1lBQ2QsUUFBUTtZQUNSLFdBQVc7WUFDWCxPQUFPO1lBQ1AsY0FBYztZQUNkLFlBQVk7WUFDWixRQUFRO1lBQ1IsV0FBVztZQUNYLGdCQUFnQjtZQUNoQixLQUFLO1lBQ0wsV0FBVztZQUNYLFlBQVk7WUFDWixjQUFjO1lBQ2QsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLFNBQVM7WUFDVCxRQUFRO1lBQ1IsTUFBTTtZQUNOLFFBQVE7WUFDUixTQUFTO1lBQ1QsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixVQUFVO1lBQ1YsVUFBVTtZQUNWLFlBQVk7WUFDWixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixNQUFNO1NBQ1QsQ0FBQzs7UUFHTSxpQkFBWSxHQUFHO1lBQ25CLGFBQWE7WUFDYixZQUFZO1lBQ1osV0FBVztZQUNYLFdBQVc7WUFDWCxLQUFLO1lBQ0wsYUFBYTtZQUNiLFNBQVM7WUFDVCxhQUFhO1lBQ2IsY0FBYztZQUNkLE1BQU07WUFDTixtQkFBbUI7WUFDbkIsMEJBQTBCO1lBQzFCLFdBQVc7WUFDWCxTQUFT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SUFDckMsb0NBQXNDOztJQUN0QyxzQ0FBd0M7O0lBQ3hDLG1DQUFxQzs7SUFDckMsNENBQThDOztJQUM5QyxzQ0FBd0M7O0lBQ3hDLDRDQUE4Qzs7SUFDOUMsaUNBQW1DOztJQUNuQyxnQ0FBa0M7O0lBQ2xDLDhCQUFnQzs7SUFDaEMsZ0NBQWtDOztJQUNsQyx3Q0FBZ0M7O0lBQ2hDLGlDQUFtQzs7SUFDbkMsa0NBQW9DOztJQUNwQyx3Q0FBMEM7O0lBQzFDLGtDQUFvQzs7SUFDcEMsa0NBQW9DOztJQUNwQyxvQ0FBc0M7O0lBQ3RDLHFDQUF1Qzs7SUFDdkMsNENBQThDOztJQUM5QyxvQ0FBc0M7O0lBQ3RDLDhCQUFnQzs7SUFHaEMsdUNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKlxuICogQnJ5bnR1bSBHYW50dCA0LjAuNiAoVFJJQUwgVkVSU0lPTilcbiAqXG4gKiBDb3B5cmlnaHQoYykgMjAyMCBCcnludHVtIEFCXG4gKiBodHRwczovL2JyeW50dW0uY29tL2NvbnRhY3RcbiAqIGh0dHBzOi8vYnJ5bnR1bS5jb20vbGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IEdhbnR0LCBQcm9qZWN0TW9kZWwgfSBmcm9tICdicnludHVtLWdhbnR0L2dhbnR0LmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LWdhbnR0JyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgR2FudHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIGdhbnR0SW5zdGFuY2U6IEdhbnR0O1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZ2FudHRJbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ2FudHRFbmdpbmUoKSA6IEdhbnR0IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdnYW50dEVuZ2luZSBpcyBkZXByZWNhdGVkLiBVc2UgZ2FudHRJbnN0YW5jZSBpbnN0ZWFkLicpXG4gICAgICAgIHJldHVybiB0aGlzLmdhbnR0SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYXZhaWxhYmxlIGZlYXR1cmVzXG4gICAgcHJpdmF0ZSBmZWF0dXJlSW5wdXRzID0gW1xuICAgICAgICAnY2VsbEVkaXQnLFxuICAgICAgICAnY2VsbE1lbnUnLFxuICAgICAgICAnY2VsbFRvb2x0aXAnLFxuICAgICAgICAnY29sdW1uRHJhZ1Rvb2xiYXInLFxuICAgICAgICAnY29sdW1uUGlja2VyJyxcbiAgICAgICAgJ2NvbHVtblJlb3JkZXInLFxuICAgICAgICAnY29sdW1uUmVzaXplJyxcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICdmaWx0ZXJCYXInLFxuICAgICAgICAnZ3JvdXAnLFxuICAgICAgICAnZ3JvdXBTdW1tYXJ5JyxcbiAgICAgICAgJ2hlYWRlck1lbnUnLFxuICAgICAgICAnbGFiZWxzJyxcbiAgICAgICAgJ21zcEV4cG9ydCcsXG4gICAgICAgICdub25Xb3JraW5nVGltZScsXG4gICAgICAgICdwYW4nLFxuICAgICAgICAncGRmRXhwb3J0JyxcbiAgICAgICAgJ3BlcmNlbnRCYXInLFxuICAgICAgICAncHJvamVjdExpbmVzJyxcbiAgICAgICAgJ3F1aWNrRmluZCcsXG4gICAgICAgICdyZWN1cnJpbmdUaW1lU3BhbnMnLFxuICAgICAgICAncmVnaW9uUmVzaXplJyxcbiAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlcycsXG4gICAgICAgICdyb2xsdXBzJyxcbiAgICAgICAgJ3NlYXJjaCcsXG4gICAgICAgICdzb3J0JyxcbiAgICAgICAgJ3N0cmlwZScsXG4gICAgICAgICdzdW1tYXJ5JyxcbiAgICAgICAgJ3Rhc2tEcmFnJyxcbiAgICAgICAgJ3Rhc2tEcmFnQ3JlYXRlJyxcbiAgICAgICAgJ3Rhc2tFZGl0JyxcbiAgICAgICAgJ3Rhc2tNZW51JyxcbiAgICAgICAgJ3Rhc2tSZXNpemUnLFxuICAgICAgICAndGFza1Rvb2x0aXAnLFxuICAgICAgICAndGltZUF4aXNIZWFkZXJNZW51JyxcbiAgICAgICAgJ3RpbWVSYW5nZXMnLFxuICAgICAgICAndHJlZSdcbiAgICBdO1xuXG4gICAgLy8gY29uZmlnIG9wdGlvbnNcbiAgICBwcml2YXRlIGNvbmZpZ0lucHV0cyA9IFtcbiAgICAgICAgJ2Fzc2lnbm1lbnRzJyxcbiAgICAgICAgJ2F1dG9IZWlnaHQnLFxuICAgICAgICAnYmFyTWFyZ2luJyxcbiAgICAgICAgJ2NhbGVuZGFycycsXG4gICAgICAgICdjbHMnLFxuICAgICAgICAnY29sdW1uTGluZXMnLFxuICAgICAgICAnY29sdW1ucycsXG4gICAgICAgICdjcnVkTWFuYWdlcicsXG4gICAgICAgICdkZXBlbmRlbmNpZXMnLFxuICAgICAgICAnZGF0YScsXG4gICAgICAgICdkZXBlbmRlbmN5SWRGaWVsZCcsXG4gICAgICAgICdkdXJhdGlvbkRpc3BsYXlQcmVjaXNpb24nLFxuICAgICAgICAnZW1wdHlUZXh0JyxcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICAnZXZlbnRDb2xvcicsXG4gICAgICAgICdldmVudFN0eWxlJyxcbiAgICAgICAgJ2ZpbGxMYXN0Q29sdW1uJyxcbiAgICAgICAgJ2dhbnR0SWQnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ21pbldpZHRoJyxcbiAgICAgICAgJ21pbkhlaWdodCcsXG4gICAgICAgICdwcm9qZWN0JyxcbiAgICAgICAgJ3JlYWRPbmx5JyxcbiAgICAgICAgJ3JlZicsXG4gICAgICAgICdyZXNvdXJjZUltYWdlRm9sZGVyUGF0aCcsXG4gICAgICAgICdyZXNvdXJjZXMnLFxuICAgICAgICAncmVzcG9uc2l2ZUxldmVscycsXG4gICAgICAgICdyb3dIZWlnaHQnLFxuICAgICAgICAnc2NoZWR1bGVkRXZlbnROYW1lJyxcbiAgICAgICAgJ3NuYXAnLFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgJ3N0b3JlJyxcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ3N1YkdyaWRDb25maWdzJyxcbiAgICAgICAgJ3Rhc2tSZW5kZXJlcicsXG4gICAgICAgICd0YXNrcycsXG4gICAgICAgICd0b29sdGlwJyxcbiAgICAgICAgJ3ZpZXdQcmVzZXQnLFxuICAgICAgICAnd2lkdGgnXG4gICAgXTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgQElucHV0KCkgYXNzaWdubWVudHM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGF1dG9IZWlnaHQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYmFyTWFyZ2luOiBudW1iZXI7XG4gICAgQElucHV0KCkgY2FsZW5kYXJzOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBjbHM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2x1bW5MaW5lczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBjcnVkTWFuYWdlcjogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY2llczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBkZXBlbmRlbmN5SWRGaWVsZDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRhdGE6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGR1cmF0aW9uRGlzcGxheVByZWNpc2lvbjogYm9vbGVhbiB8IG51bWJlcjtcbiAgICBASW5wdXQoKSBlbXB0eVRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmREYXRlOiBhbnk7XG4gICAgQElucHV0KCkgZXZlbnRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGV2ZW50U3R5bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBmaWxsTGFzdENvbHVtbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBnYW50dElkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBwcm9qZWN0OiBQcm9qZWN0TW9kZWw7XG4gICAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcmVmOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmVzb3VyY2VJbWFnZUZvbGRlclBhdGg6IHN0cmluZztcbiAgICBASW5wdXQoKSByZXNvdXJjZXM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmVMZXZlbHM6IGFueTtcbiAgICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bGwgfCBudW1iZXI7XG4gICAgQElucHV0KCkgc2NoZWR1bGVkRXZlbnROYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc25hcDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdGFydERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBzdG9yZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN0eWxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGFza1JlbmRlcmVyOiBhbnk7XG4gICAgQElucHV0KCkgdGFza3M6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgICBASW5wdXQoKSB2aWV3UHJlc2V0OiBhbnk7XG4gICAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICAvLyNlbmRyZWdpb24gY29uZmlnc1xuXG4gICAgLy8jcmVnaW9uIGZlYXR1cmVzXG4gICAgQElucHV0KCkgY2VsbEVkaXQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY2VsbE1lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY2VsbFRvb2x0aXA6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY29sdW1uRHJhZ1Rvb2xiYXI6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY29sdW1uUGlja2VyOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNvbHVtblJlb3JkZXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY29sdW1uUmVzaXplOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBmaWx0ZXJCYXI6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgZ3JvdXA6IGJvb2xlYW4gfCBvYmplY3QgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgZ3JvdXBTdW1tYXJ5OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGhlYWRlck1lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgbGFiZWxzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIG1zcEV4cG9ydDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBub25Xb3JraW5nVGltZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwYW46IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcGRmRXhwb3J0OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHBlcmNlbnRCYXI6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcHJvamVjdExpbmVzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHF1aWNrRmluZDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByZWN1cnJpbmdUaW1lU3BhbnM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVnaW9uUmVzaXplOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlc291cmNlVGltZVJhbmdlczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByb2xsdXBzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHNlYXJjaDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBzb3J0OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN0cmlwZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBzdWJHcmlkQ29uZmlnczogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN1bW1hcnk6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza0RyYWc6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza0RyYWdDcmVhdGU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza0VkaXQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza01lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza1Jlc2l6ZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrVG9vbHRpcDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lQXhpc0hlYWRlck1lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGltZVJhbmdlczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0cmVlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIC8vI2VuZHJlZ2lvbiBmZWF0dXJlc1xuXG4gICAgQE91dHB1dCgpIG9uR2FudHRFdmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgLy8gR2FudHQgaXMgcmVuZGVyZWQgaW50byB0aGlzIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgZmVhdHVyZUNvbmZpZyA9IHt9LFxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGFwcGVuZFRvICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hBbGwoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdhbnR0RXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzT2JqIDogdGhpc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmVhdHVyZXMgIDogZmVhdHVyZUNvbmZpZ1xuICAgICAgICAgICAgfVxuICAgICAgICA7XG5cbiAgICAgICAgLy8gcHJvY2VzcyBjb25maWcgb3B0aW9uc1xuICAgICAgICB0aGlzLmNvbmZpZ0lucHV0cy5mb3JFYWNoKGNvbmZpZ05hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCdnYW50dElkJyA9PT0gY29uZmlnTmFtZSAmJiB0aGlzW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnWydpZCddID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5kZWZpbmVkICE9PSB0aGlzW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2NvbmZpZ05hbWVdID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHJvY2VzcyBmZWF0dXJlc1xuICAgICAgICB0aGlzLmZlYXR1cmVJbnB1dHMuZm9yRWFjaChmZWF0dXJlTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZU5hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVDb25maWdbZmVhdHVyZU5hbWVdID0gdGhpc1tmZWF0dXJlTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgQnJ5bnR1bSBHYW50dFxuICAgICAgICB0aGlzLmdhbnR0SW5zdGFuY2UgPSBuZXcgR2FudHQoY29uZmlnKTtcblxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5nYW50dEluc3RhbmNlKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaGFuZ2VzKS5mb3JFYWNoKChbbmFtZSwgeyBjdXJyZW50VmFsdWUgfV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWUuY29uZmlnSW5wdXRzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmdhbnR0SW5zdGFuY2VbbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lLmZlYXR1cmVJbnB1dHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2FudHRJbnN0YW5jZVtuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19