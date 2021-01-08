import { Component, ElementRef, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { WidgetHelper, Fullscreen, Gantt } from 'bryntum-gantt/gantt.lite.umd.js';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    // empty fn by default, fixes #436
    /**
     * @param {?} element
     */
    constructor(element) {
        this.color = 'b-orange b-raised';
        this.click = new EventEmitter();
        this.onAction = (/**
         * @return {?}
         */
        () => { }); // empty fn by default, fixes #436
        this.elementRef = element;
    }
    /**
     * Initializes component
     * @return {?}
     */
    ngOnInit() {
        this.button = (/** @type {?} */ (WidgetHelper.createWidget({
            type: 'button',
            appendTo: this.elementRef.nativeElement,
            cls: this.cls,
            color: this.color,
            icon: this.icon,
            onAction: this.onAction,
            onClick: (/**
             * @param {?} event
             * @return {?}
             */
            (event) => this.click.emit(event)),
            pressed: this.pressed,
            text: this.text,
            toggleable: this.toggleable,
            toggleGroup: this.toggleGroup,
            tooltip: this.tooltip,
            disabled: this.disabled
        })));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.button) {
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            ([name, { currentValue }]) => {
                this.button[name] = currentValue;
            }));
        }
    }
    /**
     * Destroys component
     * @return {?}
     */
    ngOnDestroy() {
        if (this.button) {
            this.button.destroy();
        }
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-button',
                template: ''
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
ButtonComponent.propDecorators = {
    cls: [{ type: Input }],
    color: [{ type: Input }],
    disabled: [{ type: Input }],
    icon: [{ type: Input }],
    pressed: [{ type: Input }],
    text: [{ type: Input }],
    toggleable: [{ type: Input }],
    toggleGroup: [{ type: Input }],
    tooltip: [{ type: Input }],
    click: [{ type: Output }],
    onAction: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullscreenComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.elementRef = element;
    }
    /**
     * Initializes component
     * @return {?}
     */
    ngOnInit() {
        if (!Fullscreen.enabled) {
            return;
        }
        this.button = (/** @type {?} */ (WidgetHelper.createWidget({
            type: 'button',
            appendTo: this.elementRef.nativeElement,
            icon: 'b-icon b-icon-fullscreen',
            tooltip: 'Fullscreen',
            toggleable: true,
            cls: 'b-blue b-raised',
            onToggle: (/**
             * @param {?} __0
             * @return {?}
             */
            ({ pressed }) => {
                if (pressed) {
                    Fullscreen.request(document.documentElement);
                }
                else {
                    Fullscreen.exit();
                }
            })
        })));
        Fullscreen.onFullscreenChange((/**
         * @return {?}
         */
        () => {
            this.button.pressed = Fullscreen.isFullscreen;
        }));
    }
    /**
     * Destroys component
     * @return {?}
     */
    ngOnDestroy() {
        if (this.button) {
            this.button.destroy();
        }
    }
}
FullscreenComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-fullscreen',
                template: ''
            }] }
];
/** @nocollapse */
FullscreenComponent.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GanttComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SliderComponent {
    /**
     * Saves element to have container to render the button to
     * @param {?} element
     */
    constructor(element) {
        this.max = 100;
        this.min = 0;
        this.step = 5;
        this.text = 'Slider';
        this.value = 0;
        this.elementRef = element;
    }
    /**
     * Initializes component
     * @return {?}
     */
    ngOnInit() {
        this.slider = (/** @type {?} */ (WidgetHelper.createWidget({
            type: 'slider',
            appendTo: this.elementRef.nativeElement,
            max: this.max,
            min: this.min,
            onChange: this.onChange,
            showTooltip: this.showTooltip,
            showValue: this.showValue,
            step: this.step,
            text: this.text,
            value: this.value
        })));
    }
    /**
     * Destroys component
     * @return {?}
     */
    ngOnDestroy() {
        if (this.slider) {
            this.slider.destroy();
        }
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-slider',
                template: ''
            }] }
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: ElementRef }
];
SliderComponent.propDecorators = {
    max: [{ type: Input }],
    min: [{ type: Input }],
    onChange: [{ type: Input }],
    showTooltip: [{ type: Input }],
    showValue: [{ type: Input }],
    step: [{ type: Input }],
    text: [{ type: Input }],
    value: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WidgetComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.onWidgetEvents = new EventEmitter();
        this.elementRef = element;
    }
    /**
     * Create and append the underlying widget
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const me = this;
        Object.assign(me.config, {
            appendTo: me.elementRef.nativeElement,
            listeners: me.config.listeners || {
                /**
                 * @param {?} event
                 * @return {?}
                 */
                catchAll(event) {
                    me.onWidgetEvents.emit(event);
                },
                thisObj: me
            }
        });
        // make the widget publicly available
        me.widget = (/** @type {?} */ (WidgetHelper.createWidget(me.config)));
    }
    /**
     * Destroy the component
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const me = this;
        if (me.widget && me.widget.destroy) {
            me.widget.destroy();
        }
    }
}
WidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'bry-widget',
                template: ''
            }] }
];
/** @nocollapse */
WidgetComponent.ctorParameters = () => [
    { type: ElementRef }
];
WidgetComponent.propDecorators = {
    config: [{ type: Input }],
    onWidgetEvents: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BryntumAngularSharedModule {
}
BryntumAngularSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ButtonComponent,
                    FullscreenComponent,
                    GanttComponent,
                    SliderComponent,
                    WidgetComponent
                ],
                imports: [],
                exports: [
                    ButtonComponent,
                    FullscreenComponent,
                    GanttComponent,
                    SliderComponent,
                    WidgetComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BryntumAngularSharedModule, ButtonComponent, FullscreenComponent, GanttComponent, SliderComponent, WidgetComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvZnVsbHNjcmVlbi5jb21wb25lbnQudHMiLCJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvbGliL2dhbnR0LmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gQnV0dG9uIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tZ2FudHQvZ2FudHQubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIEBJbnB1dCgpIGNsczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnYi1vcmFuZ2UgYi1yYWlzZWQnO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBwcmVzc2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b2dnbGVhYmxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRvZ2dsZUdyb3VwOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBvbkFjdGlvbiA9ICgpID0+IHt9OyAvLyBlbXB0eSBmbiBieSBkZWZhdWx0LCBmaXhlcyAjNDM2XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgYXBwZW5kVG8gICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGNscyAgICAgICAgIDogdGhpcy5jbHMsXG4gICAgICAgICAgICBjb2xvciAgICAgICA6IHRoaXMuY29sb3IsXG4gICAgICAgICAgICBpY29uICAgICAgICA6IHRoaXMuaWNvbixcbiAgICAgICAgICAgIG9uQWN0aW9uICAgIDogdGhpcy5vbkFjdGlvbixcbiAgICAgICAgICAgIG9uQ2xpY2sgICAgIDogKGV2ZW50OiBhbnkpID0+IHRoaXMuY2xpY2suZW1pdChldmVudCksXG4gICAgICAgICAgICBwcmVzc2VkICAgICA6IHRoaXMucHJlc3NlZCxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSAgOiB0aGlzLnRvZ2dsZWFibGUsXG4gICAgICAgICAgICB0b2dnbGVHcm91cCA6IHRoaXMudG9nZ2xlR3JvdXAsXG4gICAgICAgICAgICB0b29sdGlwICAgICA6IHRoaXMudG9vbHRpcCxcbiAgICAgICAgICAgIGRpc2FibGVkICAgIDogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KSBhcyBCdXR0b247XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uW25hbWVdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIEZ1bGxzY3JlZW4gYnV0dG9uXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgQnV0dG9uLCBGdWxsc2NyZWVuLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLWdhbnR0L2dhbnR0LmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LWZ1bGxzY3JlZW4nLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLy8gY2xhc3MgdmFyaWFibGVzXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgYnV0dG9uOiBCdXR0b247XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICghRnVsbHNjcmVlbi5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ1dHRvbiA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQoe1xuICAgICAgICAgICAgdHlwZSAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgYXBwZW5kVG8gICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgaWNvbiAgICAgICA6ICdiLWljb24gYi1pY29uLWZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgdG9vbHRpcCAgICA6ICdGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgIHRvZ2dsZWFibGUgOiB0cnVlLFxuICAgICAgICAgICAgY2xzICAgICAgICA6ICdiLWJsdWUgYi1yYWlzZWQnLFxuICAgICAgICAgICAgb25Ub2dnbGUgICA6ICh7IHByZXNzZWQgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIEZ1bGxzY3JlZW4ucmVxdWVzdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEZ1bGxzY3JlZW4uZXhpdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgYXMgQnV0dG9uO1xuXG4gICAgICAgIEZ1bGxzY3JlZW4ub25GdWxsc2NyZWVuQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLnByZXNzZWQgPSBGdWxsc2NyZWVuLmlzRnVsbHNjcmVlbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyohXG4gKlxuICogQnJ5bnR1bSBHYW50dCA0LjAuNiAoVFJJQUwgVkVSU0lPTilcbiAqXG4gKiBDb3B5cmlnaHQoYykgMjAyMCBCcnludHVtIEFCXG4gKiBodHRwczovL2JyeW50dW0uY29tL2NvbnRhY3RcbiAqIGh0dHBzOi8vYnJ5bnR1bS5jb20vbGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IEdhbnR0LCBQcm9qZWN0TW9kZWwgfSBmcm9tICdicnludHVtLWdhbnR0L2dhbnR0LmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LWdhbnR0JyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgR2FudHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIGdhbnR0SW5zdGFuY2U6IEdhbnR0O1xuXG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZ2FudHRJbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgZ2FudHRFbmdpbmUoKSA6IEdhbnR0IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdnYW50dEVuZ2luZSBpcyBkZXByZWNhdGVkLiBVc2UgZ2FudHRJbnN0YW5jZSBpbnN0ZWFkLicpXG4gICAgICAgIHJldHVybiB0aGlzLmdhbnR0SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLy8gYXZhaWxhYmxlIGZlYXR1cmVzXG4gICAgcHJpdmF0ZSBmZWF0dXJlSW5wdXRzID0gW1xuICAgICAgICAnY2VsbEVkaXQnLFxuICAgICAgICAnY2VsbE1lbnUnLFxuICAgICAgICAnY2VsbFRvb2x0aXAnLFxuICAgICAgICAnY29sdW1uRHJhZ1Rvb2xiYXInLFxuICAgICAgICAnY29sdW1uUGlja2VyJyxcbiAgICAgICAgJ2NvbHVtblJlb3JkZXInLFxuICAgICAgICAnY29sdW1uUmVzaXplJyxcbiAgICAgICAgJ2ZpbHRlcicsXG4gICAgICAgICdmaWx0ZXJCYXInLFxuICAgICAgICAnZ3JvdXAnLFxuICAgICAgICAnZ3JvdXBTdW1tYXJ5JyxcbiAgICAgICAgJ2hlYWRlck1lbnUnLFxuICAgICAgICAnbGFiZWxzJyxcbiAgICAgICAgJ21zcEV4cG9ydCcsXG4gICAgICAgICdub25Xb3JraW5nVGltZScsXG4gICAgICAgICdwYW4nLFxuICAgICAgICAncGRmRXhwb3J0JyxcbiAgICAgICAgJ3BlcmNlbnRCYXInLFxuICAgICAgICAncHJvamVjdExpbmVzJyxcbiAgICAgICAgJ3F1aWNrRmluZCcsXG4gICAgICAgICdyZWN1cnJpbmdUaW1lU3BhbnMnLFxuICAgICAgICAncmVnaW9uUmVzaXplJyxcbiAgICAgICAgJ3Jlc291cmNlVGltZVJhbmdlcycsXG4gICAgICAgICdyb2xsdXBzJyxcbiAgICAgICAgJ3NlYXJjaCcsXG4gICAgICAgICdzb3J0JyxcbiAgICAgICAgJ3N0cmlwZScsXG4gICAgICAgICdzdW1tYXJ5JyxcbiAgICAgICAgJ3Rhc2tEcmFnJyxcbiAgICAgICAgJ3Rhc2tEcmFnQ3JlYXRlJyxcbiAgICAgICAgJ3Rhc2tFZGl0JyxcbiAgICAgICAgJ3Rhc2tNZW51JyxcbiAgICAgICAgJ3Rhc2tSZXNpemUnLFxuICAgICAgICAndGFza1Rvb2x0aXAnLFxuICAgICAgICAndGltZUF4aXNIZWFkZXJNZW51JyxcbiAgICAgICAgJ3RpbWVSYW5nZXMnLFxuICAgICAgICAndHJlZSdcbiAgICBdO1xuXG4gICAgLy8gY29uZmlnIG9wdGlvbnNcbiAgICBwcml2YXRlIGNvbmZpZ0lucHV0cyA9IFtcbiAgICAgICAgJ2Fzc2lnbm1lbnRzJyxcbiAgICAgICAgJ2F1dG9IZWlnaHQnLFxuICAgICAgICAnYmFyTWFyZ2luJyxcbiAgICAgICAgJ2NhbGVuZGFycycsXG4gICAgICAgICdjbHMnLFxuICAgICAgICAnY29sdW1uTGluZXMnLFxuICAgICAgICAnY29sdW1ucycsXG4gICAgICAgICdjcnVkTWFuYWdlcicsXG4gICAgICAgICdkZXBlbmRlbmNpZXMnLFxuICAgICAgICAnZGF0YScsXG4gICAgICAgICdkZXBlbmRlbmN5SWRGaWVsZCcsXG4gICAgICAgICdkdXJhdGlvbkRpc3BsYXlQcmVjaXNpb24nLFxuICAgICAgICAnZW1wdHlUZXh0JyxcbiAgICAgICAgJ2VuZERhdGUnLFxuICAgICAgICAnZXZlbnRDb2xvcicsXG4gICAgICAgICdldmVudFN0eWxlJyxcbiAgICAgICAgJ2ZpbGxMYXN0Q29sdW1uJyxcbiAgICAgICAgJ2dhbnR0SWQnLFxuICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgJ21pbldpZHRoJyxcbiAgICAgICAgJ21pbkhlaWdodCcsXG4gICAgICAgICdwcm9qZWN0JyxcbiAgICAgICAgJ3JlYWRPbmx5JyxcbiAgICAgICAgJ3JlZicsXG4gICAgICAgICdyZXNvdXJjZUltYWdlRm9sZGVyUGF0aCcsXG4gICAgICAgICdyZXNvdXJjZXMnLFxuICAgICAgICAncmVzcG9uc2l2ZUxldmVscycsXG4gICAgICAgICdyb3dIZWlnaHQnLFxuICAgICAgICAnc2NoZWR1bGVkRXZlbnROYW1lJyxcbiAgICAgICAgJ3NuYXAnLFxuICAgICAgICAnc3RhcnREYXRlJyxcbiAgICAgICAgJ3N0b3JlJyxcbiAgICAgICAgJ3N0eWxlJyxcbiAgICAgICAgJ3N1YkdyaWRDb25maWdzJyxcbiAgICAgICAgJ3Rhc2tSZW5kZXJlcicsXG4gICAgICAgICd0YXNrcycsXG4gICAgICAgICd0b29sdGlwJyxcbiAgICAgICAgJ3ZpZXdQcmVzZXQnLFxuICAgICAgICAnd2lkdGgnXG4gICAgXTtcblxuICAgIC8vI3JlZ2lvbiBjb25maWdzXG4gICAgQElucHV0KCkgYXNzaWdubWVudHM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGF1dG9IZWlnaHQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYmFyTWFyZ2luOiBudW1iZXI7XG4gICAgQElucHV0KCkgY2FsZW5kYXJzOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBjbHM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2x1bW5MaW5lczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBvYmplY3RbXTtcbiAgICBASW5wdXQoKSBjcnVkTWFuYWdlcjogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY2llczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBkZXBlbmRlbmN5SWRGaWVsZDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGRhdGE6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGR1cmF0aW9uRGlzcGxheVByZWNpc2lvbjogYm9vbGVhbiB8IG51bWJlcjtcbiAgICBASW5wdXQoKSBlbXB0eVRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbmREYXRlOiBhbnk7XG4gICAgQElucHV0KCkgZXZlbnRDb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGV2ZW50U3R5bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBmaWxsTGFzdENvbHVtbjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBnYW50dElkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBwcm9qZWN0OiBQcm9qZWN0TW9kZWw7XG4gICAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW47XG4gICAgQElucHV0KCkgcmVmOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmVzb3VyY2VJbWFnZUZvbGRlclBhdGg6IHN0cmluZztcbiAgICBASW5wdXQoKSByZXNvdXJjZXM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmVMZXZlbHM6IGFueTtcbiAgICBASW5wdXQoKSByb3dIZWlnaHQ6IG51bGwgfCBudW1iZXI7XG4gICAgQElucHV0KCkgc2NoZWR1bGVkRXZlbnROYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc25hcDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdGFydERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBzdG9yZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN0eWxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGFza1JlbmRlcmVyOiBhbnk7XG4gICAgQElucHV0KCkgdGFza3M6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgICBASW5wdXQoKSB2aWV3UHJlc2V0OiBhbnk7XG4gICAgQElucHV0KCkgd2lkdGg6IG51bWJlciB8IHN0cmluZztcbiAgICAvLyNlbmRyZWdpb24gY29uZmlnc1xuXG4gICAgLy8jcmVnaW9uIGZlYXR1cmVzXG4gICAgQElucHV0KCkgY2VsbEVkaXQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY2VsbE1lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY2VsbFRvb2x0aXA6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY29sdW1uRHJhZ1Rvb2xiYXI6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgY29sdW1uUGlja2VyOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNvbHVtblJlb3JkZXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY29sdW1uUmVzaXplOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGZpbHRlcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBmaWx0ZXJCYXI6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgZ3JvdXA6IGJvb2xlYW4gfCBvYmplY3QgfCBzdHJpbmc7XG4gICAgQElucHV0KCkgZ3JvdXBTdW1tYXJ5OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGhlYWRlck1lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgbGFiZWxzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIG1zcEV4cG9ydDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBub25Xb3JraW5nVGltZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBwYW46IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcGRmRXhwb3J0OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHBlcmNlbnRCYXI6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcHJvamVjdExpbmVzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHF1aWNrRmluZDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByZWN1cnJpbmdUaW1lU3BhbnM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVnaW9uUmVzaXplOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlc291cmNlVGltZVJhbmdlczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByb2xsdXBzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHNlYXJjaDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBzb3J0OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN0cmlwZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBzdWJHcmlkQ29uZmlnczogb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN1bW1hcnk6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza0RyYWc6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza0RyYWdDcmVhdGU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza0VkaXQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza01lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGFza1Jlc2l6ZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrVG9vbHRpcDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lQXhpc0hlYWRlck1lbnU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgdGltZVJhbmdlczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0cmVlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIC8vI2VuZHJlZ2lvbiBmZWF0dXJlc1xuXG4gICAgQE91dHB1dCgpIG9uR2FudHRFdmVudHMgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgLy8gR2FudHQgaXMgcmVuZGVyZWQgaW50byB0aGlzIGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdFxuICAgICAgICAgICAgZmVhdHVyZUNvbmZpZyA9IHt9LFxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGFwcGVuZFRvICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA6IHtcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hBbGwoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdhbnR0RXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzT2JqIDogdGhpc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmVhdHVyZXMgIDogZmVhdHVyZUNvbmZpZ1xuICAgICAgICAgICAgfVxuICAgICAgICA7XG5cbiAgICAgICAgLy8gcHJvY2VzcyBjb25maWcgb3B0aW9uc1xuICAgICAgICB0aGlzLmNvbmZpZ0lucHV0cy5mb3JFYWNoKGNvbmZpZ05hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCdnYW50dElkJyA9PT0gY29uZmlnTmFtZSAmJiB0aGlzW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnWydpZCddID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodW5kZWZpbmVkICE9PSB0aGlzW2NvbmZpZ05hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2NvbmZpZ05hbWVdID0gdGhpc1tjb25maWdOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcHJvY2VzcyBmZWF0dXJlc1xuICAgICAgICB0aGlzLmZlYXR1cmVJbnB1dHMuZm9yRWFjaChmZWF0dXJlTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZU5hbWUgaW4gdGhpcykge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVDb25maWdbZmVhdHVyZU5hbWVdID0gdGhpc1tmZWF0dXJlTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgQnJ5bnR1bSBHYW50dFxuICAgICAgICB0aGlzLmdhbnR0SW5zdGFuY2UgPSBuZXcgR2FudHQoY29uZmlnKTtcblxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5nYW50dEluc3RhbmNlKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaGFuZ2VzKS5mb3JFYWNoKChbbmFtZSwgeyBjdXJyZW50VmFsdWUgfV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWUuY29uZmlnSW5wdXRzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmdhbnR0SW5zdGFuY2VbbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lLmZlYXR1cmVJbnB1dHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2FudHRJbnN0YW5jZVtuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gU2xpZGVyIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBTbGlkZXIsIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tZ2FudHQvZ2FudHQubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgZWxlbWVudCB0byBoYXZlIGNvbnRhaW5lciB0byByZW5kZXIgdGhlIGJ1dHRvbiB0b1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHNsaWRlcjogU2xpZGVyO1xuXG4gICAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgbWluOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIG9uQ2hhbmdlOiAoKSA9PiB7fTtcbiAgICBASW5wdXQoKSBzaG93VG9vbHRpcDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93VmFsdWU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gNTtcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnU2xpZGVyJztcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQoe1xuICAgICAgICAgICAgdHlwZSAgICAgICAgOiAnc2xpZGVyJyxcbiAgICAgICAgICAgIGFwcGVuZFRvICAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBtYXggICAgICAgICA6IHRoaXMubWF4LFxuICAgICAgICAgICAgbWluICAgICAgICAgOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG9uQ2hhbmdlICAgIDogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgIHNob3dUb29sdGlwIDogdGhpcy5zaG93VG9vbHRpcCxcbiAgICAgICAgICAgIHNob3dWYWx1ZSAgIDogdGhpcy5zaG93VmFsdWUsXG4gICAgICAgICAgICBzdGVwICAgICAgICA6IHRoaXMuc3RlcCxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdmFsdWUgICAgICAgOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pIGFzIFNsaWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4iLCIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBXaWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFdpZGdldCwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1nYW50dC9nYW50dC5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS13aWRnZXQnLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHdpZGdldDogV2lkZ2V0O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICAgIEBPdXRwdXQoKSBvbldpZGdldEV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHVuZGVybHlpbmcgd2lkZ2V0XG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLmNvbmZpZywge1xuICAgICAgICAgICAgYXBwZW5kVG8gIDogbWUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgbGlzdGVuZXJzIDogbWUuY29uZmlnLmxpc3RlbmVycyB8fCB7XG4gICAgICAgICAgICAgICAgY2F0Y2hBbGwoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5vbldpZGdldEV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNPYmogOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtYWtlIHRoZSB3aWRnZXQgcHVibGljbHkgYXZhaWxhYmxlXG4gICAgICAgIG1lLndpZGdldCA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQobWUuY29uZmlnKSBhcyBXaWRnZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLndpZGdldCAmJiBtZS53aWRnZXQuZGVzdHJveSkge1xuICAgICAgICAgICAgbWUud2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLyoqXG4gKiBCcnludHVtIEFuZ3VsYXIgc2hhcmVkIG1vZHVsZVxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bGxzY3JlZW5Db21wb25lbnQgfSBmcm9tICcuL2Z1bGxzY3JlZW4uY29tcG9uZW50JztcbmltcG9ydCB7IEdhbnR0Q29tcG9uZW50IH0gZnJvbSAnLi9nYW50dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zIDogW1xuICAgICAgICBCdXR0b25Db21wb25lbnQsXG4gICAgICAgIEZ1bGxzY3JlZW5Db21wb25lbnQsXG4gICAgICAgIEdhbnR0Q29tcG9uZW50LFxuICAgICAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgICAgIFdpZGdldENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0cyAgICAgIDogW10sXG4gICAgZXhwb3J0cyAgICAgIDogW1xuICAgICAgICBCdXR0b25Db21wb25lbnQsXG4gICAgICAgIEZ1bGxzY3JlZW5Db21wb25lbnQsXG4gICAgICAgIEdhbnR0Q29tcG9uZW50LFxuICAgICAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgICAgIFdpZGdldENvbXBvbmVudFxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBCcnludHVtQW5ndWxhclNoYXJlZE1vZHVsZSB7fVxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O01BYWEsZUFBZTs7Ozs7SUFrQnhCLFlBQVksT0FBbUI7UUFadEIsVUFBSyxHQUFXLG1CQUFtQixDQUFDO1FBU25DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxhQUFROzs7UUFBRyxTQUFRLEVBQUM7UUFHekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7S0FDN0I7Ozs7O0lBS0QsUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLHNCQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxFQUFVLFFBQVE7WUFDdEIsUUFBUSxFQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUMzQyxHQUFHLEVBQVcsSUFBSSxDQUFDLEdBQUc7WUFDdEIsS0FBSyxFQUFTLElBQUksQ0FBQyxLQUFLO1lBQ3hCLElBQUksRUFBVSxJQUFJLENBQUMsSUFBSTtZQUN2QixRQUFRLEVBQU0sSUFBSSxDQUFDLFFBQVE7WUFDM0IsT0FBTzs7OztZ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