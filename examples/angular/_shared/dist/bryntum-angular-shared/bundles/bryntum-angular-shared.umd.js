(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('bryntum-gantt/gantt.lite.umd.js')) :
    typeof define === 'function' && define.amd ? define('bryntum-angular-shared', ['exports', '@angular/core', 'bryntum-gantt/gantt.lite.umd.js'], factory) :
    (factory((global['bryntum-angular-shared'] = {}),global.ng.core,global.gantt.lite.umd.js));
}(this, (function (exports,core,gantt_lite_umd_js) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(element) {
            this.color = 'b-orange b-raised';
            this.click = new core.EventEmitter();
            this.onAction = ( /**
             * @return {?}
             */function () { }); // empty fn by default, fixes #436
            this.elementRef = element;
        }
        /**
         * Initializes component
         */
        /**
         * Initializes component
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * Initializes component
         * @return {?}
         */
            function () {
                var _this = this;
                this.button = ( /** @type {?} */(gantt_lite_umd_js.WidgetHelper.createWidget({
                    type: 'button',
                    appendTo: this.elementRef.nativeElement,
                    cls: this.cls,
                    color: this.color,
                    icon: this.icon,
                    onAction: this.onAction,
                    onClick: ( /**
                     * @param {?} event
                     * @return {?}
                     */function (event) { return _this.click.emit(event); }),
                    pressed: this.pressed,
                    text: this.text,
                    toggleable: this.toggleable,
                    toggleGroup: this.toggleGroup,
                    tooltip: this.tooltip,
                    disabled: this.disabled
                })));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ButtonComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                if (this.button) {
                    Object.entries(changes).forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var _b = __read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
                        _this.button[name] = currentValue;
                    }));
                }
            };
        /**
         * Destroys component
         */
        /**
         * Destroys component
         * @return {?}
         */
        ButtonComponent.prototype.ngOnDestroy = /**
         * Destroys component
         * @return {?}
         */
            function () {
                if (this.button) {
                    this.button.destroy();
                }
            };
        ButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bry-button',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        ButtonComponent.propDecorators = {
            cls: [{ type: core.Input }],
            color: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            pressed: [{ type: core.Input }],
            text: [{ type: core.Input }],
            toggleable: [{ type: core.Input }],
            toggleGroup: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            click: [{ type: core.Output }],
            onAction: [{ type: core.Input }]
        };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FullscreenComponent = /** @class */ (function () {
        function FullscreenComponent(element) {
            this.elementRef = element;
        }
        /**
         * Initializes component
         */
        /**
         * Initializes component
         * @return {?}
         */
        FullscreenComponent.prototype.ngOnInit = /**
         * Initializes component
         * @return {?}
         */
            function () {
                var _this = this;
                if (!gantt_lite_umd_js.Fullscreen.enabled) {
                    return;
                }
                this.button = ( /** @type {?} */(gantt_lite_umd_js.WidgetHelper.createWidget({
                    type: 'button',
                    appendTo: this.elementRef.nativeElement,
                    icon: 'b-icon b-icon-fullscreen',
                    tooltip: 'Fullscreen',
                    toggleable: true,
                    cls: 'b-blue b-raised',
                    onToggle: ( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var pressed = _a.pressed;
                        if (pressed) {
                            gantt_lite_umd_js.Fullscreen.request(document.documentElement);
                        }
                        else {
                            gantt_lite_umd_js.Fullscreen.exit();
                        }
                    })
                })));
                gantt_lite_umd_js.Fullscreen.onFullscreenChange(( /**
                 * @return {?}
                 */function () {
                    _this.button.pressed = gantt_lite_umd_js.Fullscreen.isFullscreen;
                }));
            };
        /**
         * Destroys component
         */
        /**
         * Destroys component
         * @return {?}
         */
        FullscreenComponent.prototype.ngOnDestroy = /**
         * Destroys component
         * @return {?}
         */
            function () {
                if (this.button) {
                    this.button.destroy();
                }
            };
        FullscreenComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bry-fullscreen',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        FullscreenComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return FullscreenComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.onGanttEvents = new core.EventEmitter();
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
             */ function () {
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
                         */ function (event) {
                            this.onGanttEvents.emit(event);
                        },
                        thisObj: this
                    },
                    features: featureConfig
                };
                // process config options
                this.configInputs.forEach(( /**
                 * @param {?} configName
                 * @return {?}
                 */function (configName) {
                    if ('ganttId' === configName && _this[configName]) {
                        config['id'] = _this[configName];
                    }
                    else if (undefined !== _this[configName]) {
                        config[configName] = _this[configName];
                    }
                }));
                // process features
                this.featureInputs.forEach(( /**
                 * @param {?} featureName
                 * @return {?}
                 */function (featureName) {
                    if (featureName in _this) {
                        featureConfig[featureName] = _this[featureName];
                    }
                }));
                // create the Bryntum Gantt
                this.ganttInstance = new gantt_lite_umd_js.Gantt(config);
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
                    Object.entries(changes).forEach(( /**
                     * @param {?} __0
                     * @return {?}
                     */function (_a) {
                        var _b = __read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
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
            { type: core.Component, args: [{
                        selector: 'bry-gantt',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        GanttComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        GanttComponent.propDecorators = {
            assignments: [{ type: core.Input }],
            autoHeight: [{ type: core.Input }],
            barMargin: [{ type: core.Input }],
            calendars: [{ type: core.Input }],
            cls: [{ type: core.Input }],
            columnLines: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            crudManager: [{ type: core.Input }],
            dependencies: [{ type: core.Input }],
            dependencyIdField: [{ type: core.Input }],
            data: [{ type: core.Input }],
            durationDisplayPrecision: [{ type: core.Input }],
            emptyText: [{ type: core.Input }],
            endDate: [{ type: core.Input }],
            eventColor: [{ type: core.Input }],
            eventStyle: [{ type: core.Input }],
            fillLastColumn: [{ type: core.Input }],
            ganttId: [{ type: core.Input }],
            height: [{ type: core.Input }],
            minHeight: [{ type: core.Input }],
            minWidth: [{ type: core.Input }],
            project: [{ type: core.Input }],
            readOnly: [{ type: core.Input }],
            ref: [{ type: core.Input }],
            resourceImageFolderPath: [{ type: core.Input }],
            resources: [{ type: core.Input }],
            responsiveLevels: [{ type: core.Input }],
            rowHeight: [{ type: core.Input }],
            scheduledEventName: [{ type: core.Input }],
            snap: [{ type: core.Input }],
            startDate: [{ type: core.Input }],
            store: [{ type: core.Input }],
            style: [{ type: core.Input }],
            taskRenderer: [{ type: core.Input }],
            tasks: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            viewPreset: [{ type: core.Input }],
            width: [{ type: core.Input }],
            cellEdit: [{ type: core.Input }],
            cellMenu: [{ type: core.Input }],
            cellTooltip: [{ type: core.Input }],
            columnDragToolbar: [{ type: core.Input }],
            columnPicker: [{ type: core.Input }],
            columnReorder: [{ type: core.Input }],
            columnResize: [{ type: core.Input }],
            filter: [{ type: core.Input }],
            filterBar: [{ type: core.Input }],
            group: [{ type: core.Input }],
            groupSummary: [{ type: core.Input }],
            headerMenu: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            mspExport: [{ type: core.Input }],
            nonWorkingTime: [{ type: core.Input }],
            pan: [{ type: core.Input }],
            pdfExport: [{ type: core.Input }],
            percentBar: [{ type: core.Input }],
            projectLines: [{ type: core.Input }],
            quickFind: [{ type: core.Input }],
            recurringTimeSpans: [{ type: core.Input }],
            regionResize: [{ type: core.Input }],
            resourceTimeRanges: [{ type: core.Input }],
            rollups: [{ type: core.Input }],
            search: [{ type: core.Input }],
            sort: [{ type: core.Input }],
            stripe: [{ type: core.Input }],
            subGridConfigs: [{ type: core.Input }],
            summary: [{ type: core.Input }],
            taskDrag: [{ type: core.Input }],
            taskDragCreate: [{ type: core.Input }],
            taskEdit: [{ type: core.Input }],
            taskMenu: [{ type: core.Input }],
            taskResize: [{ type: core.Input }],
            taskTooltip: [{ type: core.Input }],
            timeAxisHeaderMenu: [{ type: core.Input }],
            timeRanges: [{ type: core.Input }],
            tree: [{ type: core.Input }],
            onGanttEvents: [{ type: core.Output }]
        };
        return GanttComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SliderComponent = /** @class */ (function () {
        /**
         * Saves element to have container to render the button to
         */
        function SliderComponent(element) {
            this.max = 100;
            this.min = 0;
            this.step = 5;
            this.text = 'Slider';
            this.value = 0;
            this.elementRef = element;
        }
        /**
         * Initializes component
         */
        /**
         * Initializes component
         * @return {?}
         */
        SliderComponent.prototype.ngOnInit = /**
         * Initializes component
         * @return {?}
         */
            function () {
                this.slider = ( /** @type {?} */(gantt_lite_umd_js.WidgetHelper.createWidget({
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
            };
        /**
         * Destroys component
         */
        /**
         * Destroys component
         * @return {?}
         */
        SliderComponent.prototype.ngOnDestroy = /**
         * Destroys component
         * @return {?}
         */
            function () {
                if (this.slider) {
                    this.slider.destroy();
                }
            };
        SliderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bry-slider',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        SliderComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        SliderComponent.propDecorators = {
            max: [{ type: core.Input }],
            min: [{ type: core.Input }],
            onChange: [{ type: core.Input }],
            showTooltip: [{ type: core.Input }],
            showValue: [{ type: core.Input }],
            step: [{ type: core.Input }],
            text: [{ type: core.Input }],
            value: [{ type: core.Input }]
        };
        return SliderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var WidgetComponent = /** @class */ (function () {
        function WidgetComponent(element) {
            this.onWidgetEvents = new core.EventEmitter();
            this.elementRef = element;
        }
        /**
         * Create and append the underlying widget
         */
        /**
         * Create and append the underlying widget
         * @return {?}
         */
        WidgetComponent.prototype.ngOnInit = /**
         * Create and append the underlying widget
         * @return {?}
         */
            function () {
                /** @type {?} */
                var me = this;
                Object.assign(me.config, {
                    appendTo: me.elementRef.nativeElement,
                    listeners: me.config.listeners || {
                        catchAll: /**
                         * @param {?} event
                         * @return {?}
                         */ function (event) {
                            me.onWidgetEvents.emit(event);
                        },
                        thisObj: me
                    }
                });
                // make the widget publicly available
                me.widget = ( /** @type {?} */(gantt_lite_umd_js.WidgetHelper.createWidget(me.config)));
            };
        /**
         * Destroy the component
         */
        /**
         * Destroy the component
         * @return {?}
         */
        WidgetComponent.prototype.ngOnDestroy = /**
         * Destroy the component
         * @return {?}
         */
            function () {
                /** @type {?} */
                var me = this;
                if (me.widget && me.widget.destroy) {
                    me.widget.destroy();
                }
            };
        WidgetComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bry-widget',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        WidgetComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        WidgetComponent.propDecorators = {
            config: [{ type: core.Input }],
            onWidgetEvents: [{ type: core.Output }]
        };
        return WidgetComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BryntumAngularSharedModule = /** @class */ (function () {
        function BryntumAngularSharedModule() {
        }
        BryntumAngularSharedModule.decorators = [
            { type: core.NgModule, args: [{
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
        return BryntumAngularSharedModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BryntumAngularSharedModule = BryntumAngularSharedModule;
    exports.ButtonComponent = ButtonComponent;
    exports.FullscreenComponent = FullscreenComponent;
    exports.GanttComponent = GanttComponent;
    exports.SliderComponent = SliderComponent;
    exports.WidgetComponent = WidgetComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi9mdWxsc2NyZWVuLmNvbXBvbmVudC50cyIsIm5nOi8vYnJ5bnR1bS1hbmd1bGFyLXNoYXJlZC9saWIvZ2FudHQuY29tcG9uZW50LnRzIiwibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi9zbGlkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi93aWRnZXQuY29tcG9uZW50LnRzIiwibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkL2xpYi9icnludHVtLWFuZ3VsYXItc2hhcmVkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBCdXR0b24gd2lkZ2V0XG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IEJ1dHRvbiwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1nYW50dC9nYW50dC5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1idXR0b24nLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xuXG4gICAgQElucHV0KCkgY2xzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdiLW9yYW5nZSBiLXJhaXNlZCc7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByZXNzZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRvZ2dsZWFibGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgdG9nZ2xlR3JvdXA6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIG9uQWN0aW9uID0gKCkgPT4ge307IC8vIGVtcHR5IGZuIGJ5IGRlZmF1bHQsIGZpeGVzICM0MzZcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5idXR0b24gPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgICA6IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgY2xzICAgICAgICAgOiB0aGlzLmNscyxcbiAgICAgICAgICAgIGNvbG9yICAgICAgIDogdGhpcy5jb2xvcixcbiAgICAgICAgICAgIGljb24gICAgICAgIDogdGhpcy5pY29uLFxuICAgICAgICAgICAgb25BY3Rpb24gICAgOiB0aGlzLm9uQWN0aW9uLFxuICAgICAgICAgICAgb25DbGljayAgICAgOiAoZXZlbnQ6IGFueSkgPT4gdGhpcy5jbGljay5lbWl0KGV2ZW50KSxcbiAgICAgICAgICAgIHByZXNzZWQgICAgIDogdGhpcy5wcmVzc2VkLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiB0aGlzLnRleHQsXG4gICAgICAgICAgICB0b2dnbGVhYmxlICA6IHRoaXMudG9nZ2xlYWJsZSxcbiAgICAgICAgICAgIHRvZ2dsZUdyb3VwIDogdGhpcy50b2dnbGVHcm91cCxcbiAgICAgICAgICAgIHRvb2x0aXAgICAgIDogdGhpcy50b29sdGlwLFxuICAgICAgICAgICAgZGlzYWJsZWQgICAgOiB0aGlzLmRpc2FibGVkXG4gICAgICAgIH0pIGFzIEJ1dHRvbjtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2hhbmdlcykuZm9yRWFjaCgoW25hbWUsIHsgY3VycmVudFZhbHVlIH1dKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25bbmFtZV0gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gRnVsbHNjcmVlbiBidXR0b25cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIEZ1bGxzY3JlZW4sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tZ2FudHQvZ2FudHQubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktZnVsbHNjcmVlbicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIEZ1bGxzY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvLyBjbGFzcyB2YXJpYWJsZXNcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCFGdWxsc2NyZWVuLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICBhcHBlbmRUbyAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBpY29uICAgICAgIDogJ2ItaWNvbiBiLWljb24tZnVsbHNjcmVlbicsXG4gICAgICAgICAgICB0b29sdGlwICAgIDogJ0Z1bGxzY3JlZW4nLFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBjbHMgICAgICAgIDogJ2ItYmx1ZSBiLXJhaXNlZCcsXG4gICAgICAgICAgICBvblRvZ2dsZSAgIDogKHsgcHJlc3NlZCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5yZXF1ZXN0KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgRnVsbHNjcmVlbi5leGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBhcyBCdXR0b247XG5cbiAgICAgICAgRnVsbHNjcmVlbi5vbkZ1bGxzY3JlZW5DaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b24ucHJlc3NlZCA9IEZ1bGxzY3JlZW4uaXNGdWxsc2NyZWVuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiFcbiAqXG4gKiBCcnludHVtIEdhbnR0IDQuMC42IChUUklBTCBWRVJTSU9OKVxuICpcbiAqIENvcHlyaWdodChjKSAyMDIwIEJyeW50dW0gQUJcbiAqIGh0dHBzOi8vYnJ5bnR1bS5jb20vY29udGFjdFxuICogaHR0cHM6Ly9icnludHVtLmNvbS9saWNlbnNlXG4gKlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgR2FudHQsIFByb2plY3RNb2RlbCB9IGZyb20gJ2JyeW50dW0tZ2FudHQvZ2FudHQubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktZ2FudHQnLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBHYW50dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgZ2FudHRJbnN0YW5jZTogR2FudHQ7XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBnYW50dEluc3RhbmNlXG4gICAgICovXG4gICAgcHVibGljIGdldCBnYW50dEVuZ2luZSgpIDogR2FudHQge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2dhbnR0RW5naW5lIGlzIGRlcHJlY2F0ZWQuIFVzZSBnYW50dEluc3RhbmNlIGluc3RlYWQuJylcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FudHRJbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyBhdmFpbGFibGUgZmVhdHVyZXNcbiAgICBwcml2YXRlIGZlYXR1cmVJbnB1dHMgPSBbXG4gICAgICAgICdjZWxsRWRpdCcsXG4gICAgICAgICdjZWxsTWVudScsXG4gICAgICAgICdjZWxsVG9vbHRpcCcsXG4gICAgICAgICdjb2x1bW5EcmFnVG9vbGJhcicsXG4gICAgICAgICdjb2x1bW5QaWNrZXInLFxuICAgICAgICAnY29sdW1uUmVvcmRlcicsXG4gICAgICAgICdjb2x1bW5SZXNpemUnLFxuICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgJ2ZpbHRlckJhcicsXG4gICAgICAgICdncm91cCcsXG4gICAgICAgICdncm91cFN1bW1hcnknLFxuICAgICAgICAnaGVhZGVyTWVudScsXG4gICAgICAgICdsYWJlbHMnLFxuICAgICAgICAnbXNwRXhwb3J0JyxcbiAgICAgICAgJ25vbldvcmtpbmdUaW1lJyxcbiAgICAgICAgJ3BhbicsXG4gICAgICAgICdwZGZFeHBvcnQnLFxuICAgICAgICAncGVyY2VudEJhcicsXG4gICAgICAgICdwcm9qZWN0TGluZXMnLFxuICAgICAgICAncXVpY2tGaW5kJyxcbiAgICAgICAgJ3JlY3VycmluZ1RpbWVTcGFucycsXG4gICAgICAgICdyZWdpb25SZXNpemUnLFxuICAgICAgICAncmVzb3VyY2VUaW1lUmFuZ2VzJyxcbiAgICAgICAgJ3JvbGx1cHMnLFxuICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgJ3NvcnQnLFxuICAgICAgICAnc3RyaXBlJyxcbiAgICAgICAgJ3N1bW1hcnknLFxuICAgICAgICAndGFza0RyYWcnLFxuICAgICAgICAndGFza0RyYWdDcmVhdGUnLFxuICAgICAgICAndGFza0VkaXQnLFxuICAgICAgICAndGFza01lbnUnLFxuICAgICAgICAndGFza1Jlc2l6ZScsXG4gICAgICAgICd0YXNrVG9vbHRpcCcsXG4gICAgICAgICd0aW1lQXhpc0hlYWRlck1lbnUnLFxuICAgICAgICAndGltZVJhbmdlcycsXG4gICAgICAgICd0cmVlJ1xuICAgIF07XG5cbiAgICAvLyBjb25maWcgb3B0aW9uc1xuICAgIHByaXZhdGUgY29uZmlnSW5wdXRzID0gW1xuICAgICAgICAnYXNzaWdubWVudHMnLFxuICAgICAgICAnYXV0b0hlaWdodCcsXG4gICAgICAgICdiYXJNYXJnaW4nLFxuICAgICAgICAnY2FsZW5kYXJzJyxcbiAgICAgICAgJ2NscycsXG4gICAgICAgICdjb2x1bW5MaW5lcycsXG4gICAgICAgICdjb2x1bW5zJyxcbiAgICAgICAgJ2NydWRNYW5hZ2VyJyxcbiAgICAgICAgJ2RlcGVuZGVuY2llcycsXG4gICAgICAgICdkYXRhJyxcbiAgICAgICAgJ2RlcGVuZGVuY3lJZEZpZWxkJyxcbiAgICAgICAgJ2R1cmF0aW9uRGlzcGxheVByZWNpc2lvbicsXG4gICAgICAgICdlbXB0eVRleHQnLFxuICAgICAgICAnZW5kRGF0ZScsXG4gICAgICAgICdldmVudENvbG9yJyxcbiAgICAgICAgJ2V2ZW50U3R5bGUnLFxuICAgICAgICAnZmlsbExhc3RDb2x1bW4nLFxuICAgICAgICAnZ2FudHRJZCcsXG4gICAgICAgICdoZWlnaHQnLFxuICAgICAgICAnbWluV2lkdGgnLFxuICAgICAgICAnbWluSGVpZ2h0JyxcbiAgICAgICAgJ3Byb2plY3QnLFxuICAgICAgICAncmVhZE9ubHknLFxuICAgICAgICAncmVmJyxcbiAgICAgICAgJ3Jlc291cmNlSW1hZ2VGb2xkZXJQYXRoJyxcbiAgICAgICAgJ3Jlc291cmNlcycsXG4gICAgICAgICdyZXNwb25zaXZlTGV2ZWxzJyxcbiAgICAgICAgJ3Jvd0hlaWdodCcsXG4gICAgICAgICdzY2hlZHVsZWRFdmVudE5hbWUnLFxuICAgICAgICAnc25hcCcsXG4gICAgICAgICdzdGFydERhdGUnLFxuICAgICAgICAnc3RvcmUnLFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICAnc3ViR3JpZENvbmZpZ3MnLFxuICAgICAgICAndGFza1JlbmRlcmVyJyxcbiAgICAgICAgJ3Rhc2tzJyxcbiAgICAgICAgJ3Rvb2x0aXAnLFxuICAgICAgICAndmlld1ByZXNldCcsXG4gICAgICAgICd3aWR0aCdcbiAgICBdO1xuXG4gICAgLy8jcmVnaW9uIGNvbmZpZ3NcbiAgICBASW5wdXQoKSBhc3NpZ25tZW50czogb2JqZWN0W107XG4gICAgQElucHV0KCkgYXV0b0hlaWdodDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBiYXJNYXJnaW46IG51bWJlcjtcbiAgICBASW5wdXQoKSBjYWxlbmRhcnM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGNsczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbHVtbkxpbmVzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGNvbHVtbnM6IG9iamVjdFtdO1xuICAgIEBJbnB1dCgpIGNydWRNYW5hZ2VyOiBvYmplY3Q7XG4gICAgQElucHV0KCkgZGVwZW5kZW5jaWVzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGRlcGVuZGVuY3lJZEZpZWxkOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGF0YTogb2JqZWN0W107XG4gICAgQElucHV0KCkgZHVyYXRpb25EaXNwbGF5UHJlY2lzaW9uOiBib29sZWFuIHwgbnVtYmVyO1xuICAgIEBJbnB1dCgpIGVtcHR5VGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVuZERhdGU6IGFueTtcbiAgICBASW5wdXQoKSBldmVudENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZXZlbnRTdHlsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZpbGxMYXN0Q29sdW1uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGdhbnR0SWQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5IZWlnaHQ6IG51bWJlciB8IHN0cmluZztcbiAgICBASW5wdXQoKSBtaW5XaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIEBJbnB1dCgpIHByb2plY3Q6IFByb2plY3RNb2RlbDtcbiAgICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSByZWY6IHN0cmluZztcbiAgICBASW5wdXQoKSByZXNvdXJjZUltYWdlRm9sZGVyUGF0aDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJlc291cmNlczogb2JqZWN0W107XG4gICAgQElucHV0KCkgcmVzcG9uc2l2ZUxldmVsczogYW55O1xuICAgIEBJbnB1dCgpIHJvd0hlaWdodDogbnVsbCB8IG51bWJlcjtcbiAgICBASW5wdXQoKSBzY2hlZHVsZWRFdmVudE5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzbmFwOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHN0YXJ0RGF0ZTogYW55O1xuICAgIEBJbnB1dCgpIHN0b3JlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgc3R5bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0YXNrUmVuZGVyZXI6IGFueTtcbiAgICBASW5wdXQoKSB0YXNrczogb2JqZWN0W107XG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZpZXdQcmVzZXQ6IGFueTtcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuICAgIC8vI2VuZHJlZ2lvbiBjb25maWdzXG5cbiAgICAvLyNyZWdpb24gZmVhdHVyZXNcbiAgICBASW5wdXQoKSBjZWxsRWRpdDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjZWxsTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjZWxsVG9vbHRpcDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjb2x1bW5EcmFnVG9vbGJhcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBjb2x1bW5QaWNrZXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY29sdW1uUmVvcmRlcjogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBjb2x1bW5SZXNpemU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZmlsdGVyOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIGZpbHRlckJhcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBncm91cDogYm9vbGVhbiB8IG9iamVjdCB8IHN0cmluZztcbiAgICBASW5wdXQoKSBncm91cFN1bW1hcnk6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgaGVhZGVyTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBsYWJlbHM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgbXNwRXhwb3J0OiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIG5vbldvcmtpbmdUaW1lOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHBhbjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBwZGZFeHBvcnQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcGVyY2VudEJhcjogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSBwcm9qZWN0TGluZXM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcXVpY2tGaW5kOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJlY3VycmluZ1RpbWVTcGFuczogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSByZWdpb25SZXNpemU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgcmVzb3VyY2VUaW1lUmFuZ2VzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHJvbGx1cHM6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgc2VhcmNoOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHNvcnQ6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgQElucHV0KCkgc3RyaXBlOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHN1YkdyaWRDb25maWdzOiBvYmplY3Q7XG4gICAgQElucHV0KCkgc3VtbWFyeTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrRHJhZzogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrRHJhZ0NyZWF0ZTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrRWRpdDogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0YXNrUmVzaXplOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRhc2tUb29sdGlwOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRpbWVBeGlzSGVhZGVyTWVudTogYm9vbGVhbiB8IG9iamVjdDtcbiAgICBASW5wdXQoKSB0aW1lUmFuZ2VzOiBib29sZWFuIHwgb2JqZWN0O1xuICAgIEBJbnB1dCgpIHRyZWU6IGJvb2xlYW4gfCBvYmplY3Q7XG4gICAgLy8jZW5kcmVnaW9uIGZlYXR1cmVzXG5cbiAgICBAT3V0cHV0KCkgb25HYW50dEV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICAvLyBHYW50dCBpcyByZW5kZXJlZCBpbnRvIHRoaXMgZWxlbWVudFxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgICBmZWF0dXJlQ29uZmlnID0ge30sXG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kVG8gIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzIDoge1xuICAgICAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2FudHRFdmVudHMuZW1pdChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXNPYmogOiB0aGlzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlcyAgOiBmZWF0dXJlQ29uZmlnXG4gICAgICAgICAgICB9XG4gICAgICAgIDtcblxuICAgICAgICAvLyBwcm9jZXNzIGNvbmZpZyBvcHRpb25zXG4gICAgICAgIHRoaXMuY29uZmlnSW5wdXRzLmZvckVhY2goY29uZmlnTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoJ2dhbnR0SWQnID09PSBjb25maWdOYW1lICYmIHRoaXNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25maWdbJ2lkJ10gPSB0aGlzW2NvbmZpZ05hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1bmRlZmluZWQgIT09IHRoaXNbY29uZmlnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25maWdbY29uZmlnTmFtZV0gPSB0aGlzW2NvbmZpZ05hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBwcm9jZXNzIGZlYXR1cmVzXG4gICAgICAgIHRoaXMuZmVhdHVyZUlucHV0cy5mb3JFYWNoKGZlYXR1cmVOYW1lID0+IHtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlTmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZUNvbmZpZ1tmZWF0dXJlTmFtZV0gPSB0aGlzW2ZlYXR1cmVOYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBCcnludHVtIEdhbnR0XG4gICAgICAgIHRoaXMuZ2FudHRJbnN0YW5jZSA9IG5ldyBHYW50dChjb25maWcpO1xuXG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmdhbnR0SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtZS5jb25maWdJbnB1dHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuZ2FudHRJbnN0YW5jZVtuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuZmVhdHVyZUlucHV0cy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5nYW50dEluc3RhbmNlW25hbWVdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBTbGlkZXIgd2lkZ2V0XG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFNsaWRlciwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1nYW50dC9nYW50dC5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1zbGlkZXInLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyBlbGVtZW50IHRvIGhhdmUgY29udGFpbmVyIHRvIHJlbmRlciB0aGUgYnV0dG9uIHRvXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgc2xpZGVyOiBTbGlkZXI7XG5cbiAgICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSBtaW46IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgb25DaGFuZ2U6ICgpID0+IHt9O1xuICAgIEBJbnB1dCgpIHNob3dUb29sdGlwOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNob3dWYWx1ZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdGVwOiBudW1iZXIgPSA1O1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICdTbGlkZXInO1xuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdzbGlkZXInLFxuICAgICAgICAgICAgYXBwZW5kVG8gICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIG1heCAgICAgICAgIDogdGhpcy5tYXgsXG4gICAgICAgICAgICBtaW4gICAgICAgICA6IHRoaXMubWluLFxuICAgICAgICAgICAgb25DaGFuZ2UgICAgOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgc2hvd1Rvb2x0aXAgOiB0aGlzLnNob3dUb29sdGlwLFxuICAgICAgICAgICAgc2hvd1ZhbHVlICAgOiB0aGlzLnNob3dWYWx1ZSxcbiAgICAgICAgICAgIHN0ZXAgICAgICAgIDogdGhpcy5zdGVwLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiB0aGlzLnRleHQsXG4gICAgICAgICAgICB2YWx1ZSAgICAgICA6IHRoaXMudmFsdWVcbiAgICAgICAgfSkgYXMgU2xpZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbiIsIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIFdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgV2lkZ2V0LCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLWdhbnR0L2dhbnR0LmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXdpZGdldCcsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgd2lkZ2V0OiBXaWRnZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gICAgQE91dHB1dCgpIG9uV2lkZ2V0RXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgdW5kZXJseWluZyB3aWRnZXRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWUuY29uZmlnLCB7XG4gICAgICAgICAgICBhcHBlbmRUbyAgOiBtZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgOiBtZS5jb25maWcubGlzdGVuZXJzIHx8IHtcbiAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uV2lkZ2V0RXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc09iaiA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1ha2UgdGhlIHdpZGdldCBwdWJsaWNseSBhdmFpbGFibGVcbiAgICAgICAgbWUud2lkZ2V0ID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldChtZS5jb25maWcpIGFzIFdpZGdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUud2lkZ2V0ICYmIG1lLndpZGdldC5kZXN0cm95KSB7XG4gICAgICAgICAgICBtZS53aWRnZXQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCIvKipcbiAqIEJyeW50dW0gQW5ndWxhciBzaGFyZWQgbW9kdWxlXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRnVsbHNjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4vZnVsbHNjcmVlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2FudHRDb21wb25lbnQgfSBmcm9tICcuL2dhbnR0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnMgOiBbXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgRnVsbHNjcmVlbkNvbXBvbmVudCxcbiAgICAgICAgR2FudHRDb21wb25lbnQsXG4gICAgICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICAgICAgV2lkZ2V0Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzICAgICAgOiBbXSxcbiAgICBleHBvcnRzICAgICAgOiBbXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgRnVsbHNjcmVlbkNvbXBvbmVudCxcbiAgICAgICAgR2FudHRDb21wb25lbnQsXG4gICAgICAgIFNsaWRlckNvbXBvbmVudCxcbiAgICAgICAgV2lkZ2V0Q29tcG9uZW50XG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEJyeW50dW1Bbmd1bGFyU2hhcmVkTW9kdWxlIHt9XG5cblxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIldpZGdldEhlbHBlciIsIkNvbXBvbmVudCIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsIkZ1bGxzY3JlZW4iLCJHYW50dCIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxhQXlHZ0IsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9B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