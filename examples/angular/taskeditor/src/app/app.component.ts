import { Component, OnInit } from '@angular/core';
import ganttConfig from './ganttConfig';

@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : ['./app.component.scss']
})
export class AppComponent implements OnInit{
    ganttConfig = ganttConfig;

    ngOnInit(): void {
    }

}
