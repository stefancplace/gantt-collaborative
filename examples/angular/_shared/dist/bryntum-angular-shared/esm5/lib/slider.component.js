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
        { type: Component, args: [{
                    selector: 'bry-slider',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return SliderComponent;
}());
export { SliderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEYsT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRXZFO0lBT0k7O09BRUc7SUFDSCx5QkFBWSxPQUFtQjtRQU90QixRQUFHLEdBQVcsR0FBRyxDQUFDO1FBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFJaEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFidkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQWNEOztPQUVHOzs7OztJQUNILGtDQUFROzs7O0lBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFBLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxFQUFVLFFBQVE7WUFDdEIsUUFBUSxFQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUMzQyxHQUFHLEVBQVcsSUFBSSxDQUFDLEdBQUc7WUFDdEIsR0FBRyxFQUFXLElBQUksQ0FBQyxHQUFHO1lBQ3RCLFFBQVEsRUFBTSxJQUFJLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFLLElBQUksQ0FBQyxTQUFTO1lBQzVCLElBQUksRUFBVSxJQUFJLENBQUMsSUFBSTtZQUN2QixJQUFJLEVBQVUsSUFBSSxDQUFDLElBQUk7WUFDdkIsS0FBSyxFQUFTLElBQUksQ0FBQyxLQUFLO1NBQzNCLENBQUMsRUFBVSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxQ0FBVzs7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7O2dCQW5ESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFHLFlBQVk7b0JBQ3ZCLFFBQVEsRUFBRyxFQUFFO2lCQUNoQjs7OztnQkFSbUIsVUFBVTs7O3NCQXNCekIsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztJQTZCVixzQkFBQztDQUFBLEFBckRELElBcURDO1NBaERZLGVBQWU7Ozs7OztJQVN4QixxQ0FBK0I7O0lBQy9CLGlDQUFzQjs7SUFFdEIsOEJBQTJCOztJQUMzQiw4QkFBeUI7O0lBQ3pCLG1DQUE0Qjs7SUFDNUIsc0NBQThCOztJQUM5QixvQ0FBNEI7O0lBQzVCLCtCQUEwQjs7SUFDMUIsK0JBQWlDOztJQUNqQyxnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBTbGlkZXIgd2lkZ2V0XG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IFNsaWRlciwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1nYW50dC9nYW50dC5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1zbGlkZXInLFxuICAgIHRlbXBsYXRlIDogJydcbn0pXG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyBlbGVtZW50IHRvIGhhdmUgY29udGFpbmVyIHRvIHJlbmRlciB0aGUgYnV0dG9uIHRvXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwdWJsaWMgc2xpZGVyOiBTbGlkZXI7XG5cbiAgICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDEwMDtcbiAgICBASW5wdXQoKSBtaW46IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgb25DaGFuZ2U6ICgpID0+IHt9O1xuICAgIEBJbnB1dCgpIHNob3dUb29sdGlwOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNob3dWYWx1ZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzdGVwOiBudW1iZXIgPSA1O1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZyA9ICdTbGlkZXInO1xuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdzbGlkZXInLFxuICAgICAgICAgICAgYXBwZW5kVG8gICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIG1heCAgICAgICAgIDogdGhpcy5tYXgsXG4gICAgICAgICAgICBtaW4gICAgICAgICA6IHRoaXMubWluLFxuICAgICAgICAgICAgb25DaGFuZ2UgICAgOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICAgICAgc2hvd1Rvb2x0aXAgOiB0aGlzLnNob3dUb29sdGlwLFxuICAgICAgICAgICAgc2hvd1ZhbHVlICAgOiB0aGlzLnNob3dWYWx1ZSxcbiAgICAgICAgICAgIHN0ZXAgICAgICAgIDogdGhpcy5zdGVwLFxuICAgICAgICAgICAgdGV4dCAgICAgICAgOiB0aGlzLnRleHQsXG4gICAgICAgICAgICB2YWx1ZSAgICAgICA6IHRoaXMudmFsdWVcbiAgICAgICAgfSkgYXMgU2xpZGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5cbiJdfQ==