/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Slider widget
 */
import { Component, ElementRef, Input } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-gantt/gantt.lite.umd.js';
export class SliderComponent {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    SliderComponent.prototype.elementRef;
    /** @type {?} */
    SliderComponent.prototype.slider;
    /** @type {?} */
    SliderComponent.prototype.max;
    /** @type {?} */
    SliderComponent.prototype.min;
    /** @type {?} */
    SliderComponent.prototype.onChange;
    /** @type {?} */
    SliderComponent.prototype.showTooltip;
    /** @type {?} */
    SliderComponent.prototype.showValue;
    /** @type {?} */
    SliderComponent.prototype.step;
    /** @type {?} */
    SliderComponent.prototype.text;
    /** @type {?} */
    SliderComponent.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEYsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLE1BQU0sT0FBTyxlQUFlOzs7OztJQUt4QixZQUFZLE9BQW1CO1FBT3RCLFFBQUcsR0FBVyxHQUFHLENBQUM7UUFDbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUloQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQWJ2QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUM5QixDQUFDOzs7OztJQWlCRCxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBQSxZQUFZLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUksRUFBVSxRQUFRO1lBQ3RCLFFBQVEsRUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7WUFDM0MsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO1lBQ3RCLEdBQUcsRUFBVyxJQUFJLENBQUMsR0FBRztZQUN0QixRQUFRLEVBQU0sSUFBSSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFHLElBQUksQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBSyxJQUFJLENBQUMsU0FBUztZQUM1QixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsSUFBSSxFQUFVLElBQUksQ0FBQyxJQUFJO1lBQ3ZCLEtBQUssRUFBUyxJQUFJLENBQUMsS0FBSztTQUMzQixDQUFDLEVBQVUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUtELFdBQVc7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQzs7O1lBbkRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUcsWUFBWTtnQkFDdkIsUUFBUSxFQUFHLEVBQUU7YUFDaEI7Ozs7WUFSbUIsVUFBVTs7O2tCQXNCekIsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzs7Ozs7O0lBVk4scUNBQStCOztJQUMvQixpQ0FBc0I7O0lBRXRCLDhCQUEyQjs7SUFDM0IsOEJBQXlCOztJQUN6QixtQ0FBNEI7O0lBQzVCLHNDQUE4Qjs7SUFDOUIsb0NBQTRCOztJQUM1QiwrQkFBMEI7O0lBQzFCLCtCQUFpQzs7SUFDakMsZ0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gU2xpZGVyIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBTbGlkZXIsIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tZ2FudHQvZ2FudHQubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktc2xpZGVyJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgZWxlbWVudCB0byBoYXZlIGNvbnRhaW5lciB0byByZW5kZXIgdGhlIGJ1dHRvbiB0b1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHVibGljIHNsaWRlcjogU2xpZGVyO1xuXG4gICAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAxMDA7XG4gICAgQElucHV0KCkgbWluOiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIG9uQ2hhbmdlOiAoKSA9PiB7fTtcbiAgICBASW5wdXQoKSBzaG93VG9vbHRpcDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93VmFsdWU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gNTtcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnU2xpZGVyJztcbiAgICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNsaWRlciA9IFdpZGdldEhlbHBlci5jcmVhdGVXaWRnZXQoe1xuICAgICAgICAgICAgdHlwZSAgICAgICAgOiAnc2xpZGVyJyxcbiAgICAgICAgICAgIGFwcGVuZFRvICAgIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICBtYXggICAgICAgICA6IHRoaXMubWF4LFxuICAgICAgICAgICAgbWluICAgICAgICAgOiB0aGlzLm1pbixcbiAgICAgICAgICAgIG9uQ2hhbmdlICAgIDogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICAgIHNob3dUb29sdGlwIDogdGhpcy5zaG93VG9vbHRpcCxcbiAgICAgICAgICAgIHNob3dWYWx1ZSAgIDogdGhpcy5zaG93VmFsdWUsXG4gICAgICAgICAgICBzdGVwICAgICAgICA6IHRoaXMuc3RlcCxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdmFsdWUgICAgICAgOiB0aGlzLnZhbHVlXG4gICAgICAgIH0pIGFzIFNsaWRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNsaWRlci5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG4iXX0=