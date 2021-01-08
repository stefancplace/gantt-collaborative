/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * Angular wrapper for Bryntum Button widget
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-gantt/gantt.lite.umd.js';
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(element) {
        this.color = 'b-orange b-raised';
        this.click = new EventEmitter();
        this.onAction = (/**
         * @return {?}
         */
        function () { }); // empty fn by default, fixes #436
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
            function (event) { return _this.click.emit(event); }),
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
            Object.entries(changes).forEach((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), name = _b[0], currentValue = _b[1].currentValue;
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
        { type: Component, args: [{
                    selector: 'bry-button',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return ButtonComponent;
}());
export { ButtonComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    ButtonComponent.prototype.button;
    /** @type {?} */
    ButtonComponent.prototype.cls;
    /** @type {?} */
    ButtonComponent.prototype.color;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.icon;
    /** @type {?} */
    ButtonComponent.prototype.pressed;
    /** @type {?} */
    ButtonComponent.prototype.text;
    /** @type {?} */
    ButtonComponent.prototype.toggleable;
    /** @type {?} */
    ButtonComponent.prototype.toggleGroup;
    /** @type {?} */
    ButtonComponent.prototype.tooltip;
    /** @type {?} */
    ButtonComponent.prototype.click;
    /** @type {?} */
    ButtonComponent.prototype.onAction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBR2hJLE9BQU8sRUFBVSxZQUFZLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV2RTtJQXVCSSx5QkFBWSxPQUFtQjtRQVp0QixVQUFLLEdBQVcsbUJBQW1CLENBQUM7UUFTbkMsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGFBQVE7OztRQUFHLGNBQU8sQ0FBQyxFQUFDLENBQUMsa0NBQWtDO1FBRzVELElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxrQ0FBUTs7OztJQUFSO1FBQUEsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBQSxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUksRUFBVSxRQUFRO1lBQ3RCLFFBQVEsRUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDM0MsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO1lBQ3RCLEtBQUssRUFBUyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsUUFBUSxFQUFNLElBQUksQ0FBQyxRQUFRO1lBQzNCLE9BQU87Ozs7WUFBTyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFBO1lBQ3BELE9BQU8sRUFBTyxJQUFJLENBQUMsT0FBTztZQUMxQixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsVUFBVSxFQUFJLElBQUksQ0FBQyxVQUFVO1lBQzdCLFdBQVcsRUFBRyxJQUFJLENBQUMsV0FBVztZQUM5QixPQUFPLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDMUIsUUFBUSxFQUFNLElBQUksQ0FBQyxRQUFRO1NBQzlCLENBQUMsRUFBVSxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQU1DO1FBTEcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQyxFQUF3QjtvQkFBeEIsMEJBQXdCLEVBQXZCLFlBQUksRUFBSSxpQ0FBWTtnQkFDbEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDckMsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxQ0FBVzs7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7O2dCQS9ESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFHLFlBQVk7b0JBQ3ZCLFFBQVEsRUFBRyxFQUFFO2lCQUNoQjs7OztnQkFSbUIsVUFBVTs7O3NCQWV6QixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFFTCxNQUFNOzJCQUNOLEtBQUs7O0lBNENWLHNCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0E1RFksZUFBZTs7Ozs7O0lBRXhCLHFDQUErQjs7Ozs7SUFDL0IsaUNBQXVCOztJQUV2Qiw4QkFBcUI7O0lBQ3JCLGdDQUE2Qzs7SUFDN0MsbUNBQTJCOztJQUMzQiwrQkFBc0I7O0lBQ3RCLGtDQUEwQjs7SUFDMUIsK0JBQXNCOztJQUN0QixxQ0FBNkI7O0lBQzdCLHNDQUE2Qjs7SUFDN0Isa0NBQXlCOztJQUV6QixnQ0FBd0Q7O0lBQ3hELG1DQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciB3cmFwcGVyIGZvciBCcnludHVtIEJ1dHRvbiB3aWRnZXRcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gQnJ5bnR1bSB1bWQgbGl0ZSBidW5kbGUgY29tZXMgd2l0aG91dCBwb2x5ZmlsbHMgdG8gc3VwcG9ydCBBbmd1bGFyJ3Mgem9uZS5qc1xuaW1wb3J0IHsgQnV0dG9uLCBXaWRnZXRIZWxwZXIgfSBmcm9tICdicnludHVtLWdhbnR0L2dhbnR0LmxpdGUudW1kLmpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3IgOiAnYnJ5LWJ1dHRvbicsXG4gICAgdGVtcGxhdGUgOiAnJ1xufSlcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIHByaXZhdGUgYnV0dG9uOiBCdXR0b247XG5cbiAgICBASW5wdXQoKSBjbHM6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nID0gJ2Itb3JhbmdlIGItcmFpc2VkJztcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHJlc3NlZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgdG9nZ2xlYWJsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSB0b2dnbGVHcm91cDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkgb25BY3Rpb24gPSAoKSA9PiB7fTsgLy8gZW1wdHkgZm4gYnkgZGVmYXVsdCwgZml4ZXMgIzQzNlxuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQoe1xuICAgICAgICAgICAgdHlwZSAgICAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGFwcGVuZFRvICAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBjbHMgICAgICAgICA6IHRoaXMuY2xzLFxuICAgICAgICAgICAgY29sb3IgICAgICAgOiB0aGlzLmNvbG9yLFxuICAgICAgICAgICAgaWNvbiAgICAgICAgOiB0aGlzLmljb24sXG4gICAgICAgICAgICBvbkFjdGlvbiAgICA6IHRoaXMub25BY3Rpb24sXG4gICAgICAgICAgICBvbkNsaWNrICAgICA6IChldmVudDogYW55KSA9PiB0aGlzLmNsaWNrLmVtaXQoZXZlbnQpLFxuICAgICAgICAgICAgcHJlc3NlZCAgICAgOiB0aGlzLnByZXNzZWQsXG4gICAgICAgICAgICB0ZXh0ICAgICAgICA6IHRoaXMudGV4dCxcbiAgICAgICAgICAgIHRvZ2dsZWFibGUgIDogdGhpcy50b2dnbGVhYmxlLFxuICAgICAgICAgICAgdG9nZ2xlR3JvdXAgOiB0aGlzLnRvZ2dsZUdyb3VwLFxuICAgICAgICAgICAgdG9vbHRpcCAgICAgOiB0aGlzLnRvb2x0aXAsXG4gICAgICAgICAgICBkaXNhYmxlZCAgICA6IHRoaXMuZGlzYWJsZWRcbiAgICAgICAgfSkgYXMgQnV0dG9uO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjaGFuZ2VzKS5mb3JFYWNoKChbbmFtZSwgeyBjdXJyZW50VmFsdWUgfV0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbltuYW1lXSA9IGN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=