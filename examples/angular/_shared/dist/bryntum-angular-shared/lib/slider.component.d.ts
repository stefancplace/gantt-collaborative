/**
 * Angular wrapper for Bryntum Slider widget
 */
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Slider } from 'bryntum-gantt/gantt.lite.umd.js';
export declare class SliderComponent implements OnInit, OnDestroy {
    /**
     * Saves element to have container to render the button to
     */
    constructor(element: ElementRef);
    private elementRef;
    slider: Slider;
    max: number;
    min: number;
    onChange: () => {};
    showTooltip: boolean;
    showValue: boolean;
    step: number;
    text: string;
    value: number;
    /**
     * Initializes component
     */
    ngOnInit(): void;
    /**
     * Destroys component
     */
    ngOnDestroy(): void;
}
