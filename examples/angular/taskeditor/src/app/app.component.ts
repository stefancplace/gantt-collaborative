import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Observable, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Task } from './models/task';
import ganttConfig from './ganttConfig';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    tasks: Observable<string[]>;
    ganttConfig = ganttConfig;
    private taskSubscription: Subscription;

    constructor(private documentService: DocumentService) {
    }

    ngOnInit() {
        this.tasks = this.documentService.tasks;
        this.loadTask();
        this.taskSubscription = this.documentService.tasks.subscribe(async task => {
            console.log('task: ' + task);
            // this.ganttConfig.project.taskStore.add(task);
            this.ganttConfig.project.taskStore.json = task;
            await this.ganttConfig.project.commitAsync();
            console.log(this.ganttConfig.project.taskStore.toJSON());
        });

        this.ganttConfig.project.taskStore.on('update', (me, record, operation, modifiedFieldNames, eOpts) => {
            console.log('change: ' + me);
            this.documentService.editDocument(this.ganttConfig.project.taskStore);
        });


    }

    loadTask() {
        this.documentService.getDocument('0');
    }

    ngOnDestroy() {
        this.taskSubscription.unsubscribe();
    }

}


