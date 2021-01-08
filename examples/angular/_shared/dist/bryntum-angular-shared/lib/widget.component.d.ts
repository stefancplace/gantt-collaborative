/**
 * Angular wrapper for Bryntum Widget
 */
import { OnInit, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Widget } from 'bryntum-gantt/gantt.lite.umd.js';
export declare class WidgetComponent implements OnInit, OnDestroy {
    private elementRef;
    widget: Widget;
    constructor(element: ElementRef);
    config: any;
    onWidgetEvents: EventEmitter<object>;
    /**
     * Create and append the underlying widget
     */
    ngOnInit(): void;
    /**
     * Destroy the component
     */
    ngOnDestroy(): void;
}
