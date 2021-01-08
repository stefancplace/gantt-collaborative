/*!
 *
 * Bryntum Gantt 4.0.6 (TRIAL VERSION)
 *
 * Copyright(c) 2020 Bryntum AB
 * https://bryntum.com/contact
 * https://bryntum.com/license
 *
 */
import { OnInit, OnChanges, ElementRef, EventEmitter, SimpleChanges } from '@angular/core';
import { Gantt, ProjectModel } from 'bryntum-gantt/gantt.lite.umd.js';
export declare class GanttComponent implements OnInit, OnChanges {
    private elementRef;
    ganttInstance: Gantt;
    /**
     * @deprecated in favor of ganttInstance
     */
    readonly ganttEngine: Gantt;
    private featureInputs;
    private configInputs;
    assignments: object[];
    autoHeight: boolean;
    barMargin: number;
    calendars: object[];
    cls: string;
    columnLines: boolean | object;
    columns: object[];
    crudManager: object;
    dependencies: boolean | object;
    dependencyIdField: string;
    data: object[];
    durationDisplayPrecision: boolean | number;
    emptyText: string;
    endDate: any;
    eventColor: string;
    eventStyle: string;
    fillLastColumn: boolean;
    ganttId: string;
    height: number | string;
    minHeight: number | string;
    minWidth: number | string;
    project: ProjectModel;
    readOnly: boolean;
    ref: string;
    resourceImageFolderPath: string;
    resources: object[];
    responsiveLevels: any;
    rowHeight: null | number;
    scheduledEventName: string;
    snap: boolean;
    startDate: any;
    store: object;
    style: string;
    taskRenderer: any;
    tasks: object[];
    tooltip: string;
    viewPreset: any;
    width: number | string;
    cellEdit: boolean | object;
    cellMenu: boolean | object;
    cellTooltip: boolean | object;
    columnDragToolbar: boolean | object;
    columnPicker: boolean;
    columnReorder: boolean;
    columnResize: boolean;
    filter: boolean | object;
    filterBar: boolean | object;
    group: boolean | object | string;
    groupSummary: boolean | object;
    headerMenu: boolean | object;
    labels: boolean | object;
    mspExport: boolean | object;
    nonWorkingTime: boolean;
    pan: boolean | object;
    pdfExport: boolean | object;
    percentBar: boolean | object;
    projectLines: boolean | object;
    quickFind: boolean | object;
    recurringTimeSpans: boolean | object;
    regionResize: boolean | object;
    resourceTimeRanges: boolean | object;
    rollups: boolean | object;
    search: boolean | object;
    sort: boolean | object;
    stripe: boolean | object;
    subGridConfigs: object;
    summary: boolean | object;
    taskDrag: boolean | object;
    taskDragCreate: boolean | object;
    taskEdit: boolean | object;
    taskMenu: boolean | object;
    taskResize: boolean | object;
    taskTooltip: boolean | object;
    timeAxisHeaderMenu: boolean | object;
    timeRanges: boolean | object;
    tree: boolean | object;
    onGanttEvents: EventEmitter<object>;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
