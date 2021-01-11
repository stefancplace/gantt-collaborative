import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { TaskStore } from 'bryntum-gantt/gantt.lite.umd.js';

@Injectable({
    providedIn: 'root'
})
export class TaskStoreService {
    tasks = this.socket.fromEvent<string[]>('TaskStore');

    constructor(private socket: Socket) {
    }

    readTaskStore(id: string) {
        this.socket.emit('readTaskStore', id);
    }

    createTaskStore(task: TaskStore | { task: TaskStore }) {
        this.socket.emit('createTaskStore', task);
    }

    updateTaskStore(taskStore: TaskStore | { taskStore: TaskStore }) {
        this.socket.emit('updateTaskStore', taskStore);
    }
}
