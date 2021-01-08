/**
 * Angular wrapper for Bryntum Fullscreen button
 */
import { OnInit, OnDestroy, ElementRef } from '@angular/core';
export declare class FullscreenComponent implements OnInit, OnDestroy {
    private elementRef;
    private button;
    constructor(element: ElementRef);
    /**
     * Initializes component
     */
    ngOnInit(): void;
    /**
     * Destroys component
     */
    ngOnDestroy(): void;
}
