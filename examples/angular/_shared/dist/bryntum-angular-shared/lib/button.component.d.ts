/**
 * Angular wrapper for Bryntum Button widget
 */
import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
export declare class ButtonComponent implements OnInit, OnChanges, OnDestroy {
    private elementRef;
    private button;
    cls: string;
    color: string;
    disabled: boolean;
    icon: string;
    pressed: boolean;
    text: string;
    toggleable: boolean;
    toggleGroup: string;
    tooltip: string;
    click: EventEmitter<any>;
    onAction: () => void;
    constructor(element: ElementRef);
    /**
     * Initializes component
     */
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Destroys component
     */
    ngOnDestroy(): void;
}
