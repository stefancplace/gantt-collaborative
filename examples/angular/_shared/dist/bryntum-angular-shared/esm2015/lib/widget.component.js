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
export class WidgetComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvd2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUd0RyxPQUFPLEVBQVUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPdkUsTUFBTSxPQUFPLGVBQWU7Ozs7SUFLeEIsWUFBWSxPQUFtQjtRQUtyQixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFKbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFRRCxRQUFROztjQUNFLEVBQUUsR0FBRyxJQUFJO1FBRWYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ3JCLFFBQVEsRUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDdkMsU0FBUyxFQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJOzs7OztnQkFDL0IsUUFBUSxDQUFDLEtBQVU7b0JBQ2YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsT0FBTyxFQUFHLEVBQUU7YUFDZjtTQUNKLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxFQUFFLENBQUMsTUFBTSxHQUFHLG1CQUFBLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFVLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFLRCxXQUFXOztjQUNELEVBQUUsR0FBRyxJQUFJO1FBQ2YsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ2hDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRyxZQUFZO2dCQUN2QixRQUFRLEVBQUcsRUFBRTthQUNoQjs7OztZQVJzQyxVQUFVOzs7cUJBbUI1QyxLQUFLOzZCQUNMLE1BQU07Ozs7Ozs7SUFSUCxxQ0FBK0I7O0lBQy9CLGlDQUFzQjs7SUFNdEIsaUNBQXFCOztJQUNyQix5Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBXaWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFdpZGdldCwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1nYW50dC9nYW50dC5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS13aWRnZXQnLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHdpZGdldDogV2lkZ2V0O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICAgIEBPdXRwdXQoKSBvbldpZGdldEV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHVuZGVybHlpbmcgd2lkZ2V0XG4gICAgICovXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLmNvbmZpZywge1xuICAgICAgICAgICAgYXBwZW5kVG8gIDogbWUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgbGlzdGVuZXJzIDogbWUuY29uZmlnLmxpc3RlbmVycyB8fCB7XG4gICAgICAgICAgICAgICAgY2F0Y2hBbGwoZXZlbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5vbldpZGdldEV2ZW50cy5lbWl0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXNPYmogOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtYWtlIHRoZSB3aWRnZXQgcHVibGljbHkgYXZhaWxhYmxlXG4gICAgICAgIG1lLndpZGdldCA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQobWUuY29uZmlnKSBhcyBXaWRnZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgaWYgKG1lLndpZGdldCAmJiBtZS53aWRnZXQuZGVzdHJveSkge1xuICAgICAgICAgICAgbWUud2lkZ2V0LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19