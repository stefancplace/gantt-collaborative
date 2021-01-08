/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Widget
 */
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-gantt/gantt.lite.umd.js';
var WidgetComponent = /** @class */ (function () {
    function WidgetComponent(element) {
        this.onWidgetEvents = new EventEmitter();
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
                 */
                function (event) {
                    me.onWidgetEvents.emit(event);
                },
                thisObj: me
            }
        });
        // make the widget publicly available
        me.widget = (/** @type {?} */ (WidgetHelper.createWidget(me.config)));
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
        { type: Component, args: [{
                    selector: 'bry-widget',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    WidgetComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    WidgetComponent.propDecorators = {
        config: [{ type: Input }],
        onWidgetEvents: [{ type: Output }]
    };
    return WidgetComponent;
}());
export { WidgetComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetComponent.prototype.elementRef;
    /** @type {?} */
    WidgetComponent.prototype.widget;
    /** @type {?} */
    WidgetComponent.prototype.config;
    /** @type {?} */
    WidgetComponent.prototype.onWidgetEvents;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd0RyxPQUFPLEVBQVUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkU7SUFVSSx5QkFBWSxPQUFtQjtRQUtyQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFKbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUtEOztPQUVHOzs7OztJQUNILGtDQUFROzs7O0lBQVI7O1lBQ1UsRUFBRSxHQUFHLElBQUk7UUFFZixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDckIsUUFBUSxFQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN2QyxTQUFTLEVBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUk7Z0JBQy9CLFFBQVE7Ozs7MEJBQUMsS0FBVTtvQkFDZixFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFDRCxPQUFPLEVBQUcsRUFBRTthQUNmO1NBQ0osQ0FBQyxDQUFDO1FBRUgscUNBQXFDO1FBQ3JDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsbUJBQUEsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQVUsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gscUNBQVc7Ozs7SUFBWDs7WUFDVSxFQUFFLEdBQUcsSUFBSTtRQUNmLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNoQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUcsWUFBWTtvQkFDdkIsUUFBUSxFQUFHLEVBQUU7aUJBQ2hCOzs7O2dCQVJzQyxVQUFVOzs7eUJBbUI1QyxLQUFLO2lDQUNMLE1BQU07O0lBZ0NYLHNCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0ExQ1ksZUFBZTs7Ozs7O0lBRXhCLHFDQUErQjs7SUFDL0IsaUNBQXNCOztJQU10QixpQ0FBcUI7O0lBQ3JCLHlDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIFdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgV2lkZ2V0LCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLWdhbnR0L2dhbnR0LmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LXdpZGdldCcsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgd2lkZ2V0OiBXaWRnZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gICAgQE91dHB1dCgpIG9uV2lkZ2V0RXZlbnRzID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgdW5kZXJseWluZyB3aWRnZXRcbiAgICAgKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWUuY29uZmlnLCB7XG4gICAgICAgICAgICBhcHBlbmRUbyAgOiBtZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgOiBtZS5jb25maWcubGlzdGVuZXJzIHx8IHtcbiAgICAgICAgICAgICAgICBjYXRjaEFsbChldmVudDogYW55KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uV2lkZ2V0RXZlbnRzLmVtaXQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpc09iaiA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1ha2UgdGhlIHdpZGdldCBwdWJsaWNseSBhdmFpbGFibGVcbiAgICAgICAgbWUud2lkZ2V0ID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldChtZS5jb25maWcpIGFzIFdpZGdldDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuICAgICAgICBpZiAobWUud2lkZ2V0ICYmIG1lLndpZGdldC5kZXN0cm95KSB7XG4gICAgICAgICAgICBtZS53aWRnZXQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=