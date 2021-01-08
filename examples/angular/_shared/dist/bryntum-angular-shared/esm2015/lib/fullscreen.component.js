/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Fullscreen button
 */
import { Component, ElementRef } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { Fullscreen, WidgetHelper } from 'bryntum-gantt/gantt.lite.umd.js';
export class FullscreenComponent {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullscreenComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    FullscreenComponent.prototype.button;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9icnludHVtLWFuZ3VsYXItc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2Z1bGxzY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3pFLE9BQU8sRUFBVSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPbkYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQU01QixZQUFZLE9BQW1CO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBS0QsUUFBUTtRQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQUEsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFJLEVBQVMsUUFBUTtZQUNyQixRQUFRLEVBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO1lBQzFDLElBQUksRUFBUywwQkFBMEI7WUFDdkMsT0FBTyxFQUFNLFlBQVk7WUFDekIsVUFBVSxFQUFHLElBQUk7WUFDakIsR0FBRyxFQUFVLGlCQUFpQjtZQUM5QixRQUFROzs7O1lBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksT0FBTyxFQUFFO29CQUNULFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2lCQUNoRDtxQkFBTTtvQkFDSCxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JCO1lBQ0wsQ0FBQyxDQUFBO1NBQ0osQ0FBQyxFQUFVLENBQUM7UUFFYixVQUFVLENBQUMsa0JBQWtCOzs7UUFBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUNsRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBS0QsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7WUFuREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRyxnQkFBZ0I7Z0JBQzNCLFFBQVEsRUFBRyxFQUFFO2FBQ2hCOzs7O1lBUnNDLFVBQVU7Ozs7Ozs7SUFhN0MseUNBQStCOzs7OztJQUMvQixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgd3JhcHBlciBmb3IgQnJ5bnR1bSBGdWxsc2NyZWVuIGJ1dHRvblxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIEJyeW50dW0gdW1kIGxpdGUgYnVuZGxlIGNvbWVzIHdpdGhvdXQgcG9seWZpbGxzIHRvIHN1cHBvcnQgQW5ndWxhcidzIHpvbmUuanNcbmltcG9ydCB7IEJ1dHRvbiwgRnVsbHNjcmVlbiwgV2lkZ2V0SGVscGVyIH0gZnJvbSAnYnJ5bnR1bS1nYW50dC9nYW50dC5saXRlLnVtZC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JyeS1mdWxsc2NyZWVuJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgRnVsbHNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIC8vIGNsYXNzIHZhcmlhYmxlc1xuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcbiAgICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAoIUZ1bGxzY3JlZW4uZW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idXR0b24gPSBXaWRnZXRIZWxwZXIuY3JlYXRlV2lkZ2V0KHtcbiAgICAgICAgICAgIHR5cGUgICAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGFwcGVuZFRvICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGljb24gICAgICAgOiAnYi1pY29uIGItaWNvbi1mdWxsc2NyZWVuJyxcbiAgICAgICAgICAgIHRvb2x0aXAgICAgOiAnRnVsbHNjcmVlbicsXG4gICAgICAgICAgICB0b2dnbGVhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGNscyAgICAgICAgOiAnYi1ibHVlIGItcmFpc2VkJyxcbiAgICAgICAgICAgIG9uVG9nZ2xlICAgOiAoeyBwcmVzc2VkIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLnJlcXVlc3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBGdWxsc2NyZWVuLmV4aXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIGFzIEJ1dHRvbjtcblxuICAgICAgICBGdWxsc2NyZWVuLm9uRnVsbHNjcmVlbkNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5wcmVzc2VkID0gRnVsbHNjcmVlbi5pc0Z1bGxzY3JlZW47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIGNvbXBvbmVudFxuICAgICAqL1xuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==