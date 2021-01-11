import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import ganttConfig from './ganttConfig';
import { TaskStoreService } from './services/task-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    tasks: Observable<string[]>;
    ganttConfig = ganttConfig;
    private taskSubscription: Subscription;

    constructor(private taskStoreService: TaskStoreService) {
    }

    ngOnInit() {
        this.tasks = this.taskStoreService.tasks;
        this.loadTask();
        this.taskSubscription = this.taskStoreService.tasks.subscribe(async task => {
            console.log('task: ' + task);
            this.ganttConfig.project.taskStore.json = task;
            await this.ganttConfig.project.commitAsync();
        });

        this.ganttConfig.project.taskStore.on('update', (me, record, operation, modifiedFieldNames, eOpts) => {
            console.log('change: ' + me);
            this.taskStoreService.updateTaskStore(this.ganttConfig.project.taskStore);
        });
    }

    loadTask() {
        this.taskStoreService.readTaskStore('0');
    }

    ngOnDestroy() {
        this.taskSubscription.unsubscribe();
    }

}


