/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular wrapper for Bryntum Button widget
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
// Bryntum umd lite bundle comes without polyfills to support Angular's zone.js
import { WidgetHelper } from 'bryntum-gantt/gantt.lite.umd.js';
export class ButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2JyeW50dW0tYW5ndWxhci1zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFHaEksT0FBTyxFQUFVLFlBQVksRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLE1BQU0sT0FBTyxlQUFlOzs7OztJQWtCeEIsWUFBWSxPQUFtQjtRQVp0QixVQUFLLEdBQVcsbUJBQW1CLENBQUM7UUFTbkMsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGFBQVE7OztRQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQyxDQUFDLGtDQUFrQztRQUc1RCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUM5QixDQUFDOzs7OztJQUtELFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFBLFlBQVksQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBSSxFQUFVLFFBQVE7WUFDdEIsUUFBUSxFQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUMzQyxHQUFHLEVBQVcsSUFBSSxDQUFDLEdBQUc7WUFDdEIsS0FBSyxFQUFTLElBQUksQ0FBQyxLQUFLO1lBQ3hCLElBQUksRUFBVSxJQUFJLENBQUMsSUFBSTtZQUN2QixRQUFRLEVBQU0sSUFBSSxDQUFDLFFBQVE7WUFDM0IsT0FBTzs7OztZQUFPLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNwRCxPQUFPLEVBQU8sSUFBSSxDQUFDLE9BQU87WUFDMUIsSUFBSSxFQUFVLElBQUksQ0FBQyxJQUFJO1lBQ3ZCLFVBQVUsRUFBSSxJQUFJLENBQUMsVUFBVTtZQUM3QixXQUFXLEVBQUcsSUFBSSxDQUFDLFdBQVc7WUFDOUIsT0FBTyxFQUFPLElBQUksQ0FBQyxPQUFPO1lBQzFCLFFBQVEsRUFBTSxJQUFJLENBQUMsUUFBUTtTQUM5QixDQUFDLEVBQVUsQ0FBQztJQUNqQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUNyQyxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQzs7Ozs7SUFLRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7OztZQS9ESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFHLFlBQVk7Z0JBQ3ZCLFFBQVEsRUFBRyxFQUFFO2FBQ2hCOzs7O1lBUm1CLFVBQVU7OztrQkFlekIsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBRUwsTUFBTTt1QkFDTixLQUFLOzs7Ozs7O0lBZE4scUNBQStCOzs7OztJQUMvQixpQ0FBdUI7O0lBRXZCLDhCQUFxQjs7SUFDckIsZ0NBQTZDOztJQUM3QyxtQ0FBMkI7O0lBQzNCLCtCQUFzQjs7SUFDdEIsa0NBQTBCOztJQUMxQiwrQkFBc0I7O0lBQ3RCLHFDQUE2Qjs7SUFDN0Isc0NBQTZCOztJQUM3QixrQ0FBeUI7O0lBRXpCLGdDQUF3RDs7SUFDeEQsbUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIHdyYXBwZXIgZm9yIEJyeW50dW0gQnV0dG9uIHdpZGdldFxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBCcnludHVtIHVtZCBsaXRlIGJ1bmRsZSBjb21lcyB3aXRob3V0IHBvbHlmaWxscyB0byBzdXBwb3J0IEFuZ3VsYXIncyB6b25lLmpzXG5pbXBvcnQgeyBCdXR0b24sIFdpZGdldEhlbHBlciB9IGZyb20gJ2JyeW50dW0tZ2FudHQvZ2FudHQubGl0ZS51bWQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvciA6ICdicnktYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZSA6ICcnXG59KVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJpdmF0ZSBidXR0b246IEJ1dHRvbjtcblxuICAgIEBJbnB1dCgpIGNsczogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnYi1vcmFuZ2UgYi1yYWlzZWQnO1xuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBASW5wdXQoKSBwcmVzc2VkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSB0b2dnbGVhYmxlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHRvZ2dsZUdyb3VwOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBvbkFjdGlvbiA9ICgpID0+IHt9OyAvLyBlbXB0eSBmbiBieSBkZWZhdWx0LCBmaXhlcyAjNDM2XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50XG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uID0gV2lkZ2V0SGVscGVyLmNyZWF0ZVdpZGdldCh7XG4gICAgICAgICAgICB0eXBlICAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgYXBwZW5kVG8gICAgOiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgIGNscyAgICAgICAgIDogdGhpcy5jbHMsXG4gICAgICAgICAgICBjb2xvciAgICAgICA6IHRoaXMuY29sb3IsXG4gICAgICAgICAgICBpY29uICAgICAgICA6IHRoaXMuaWNvbixcbiAgICAgICAgICAgIG9uQWN0aW9uICAgIDogdGhpcy5vbkFjdGlvbixcbiAgICAgICAgICAgIG9uQ2xpY2sgICAgIDogKGV2ZW50OiBhbnkpID0+IHRoaXMuY2xpY2suZW1pdChldmVudCksXG4gICAgICAgICAgICBwcmVzc2VkICAgICA6IHRoaXMucHJlc3NlZCxcbiAgICAgICAgICAgIHRleHQgICAgICAgIDogdGhpcy50ZXh0LFxuICAgICAgICAgICAgdG9nZ2xlYWJsZSAgOiB0aGlzLnRvZ2dsZWFibGUsXG4gICAgICAgICAgICB0b2dnbGVHcm91cCA6IHRoaXMudG9nZ2xlR3JvdXAsXG4gICAgICAgICAgICB0b29sdGlwICAgICA6IHRoaXMudG9vbHRpcCxcbiAgICAgICAgICAgIGRpc2FibGVkICAgIDogdGhpcy5kaXNhYmxlZFxuICAgICAgICB9KSBhcyBCdXR0b247XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5idXR0b24pIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNoYW5nZXMpLmZvckVhY2goKFtuYW1lLCB7IGN1cnJlbnRWYWx1ZSB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uW25hbWVdID0gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBjb21wb25lbnRcbiAgICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==