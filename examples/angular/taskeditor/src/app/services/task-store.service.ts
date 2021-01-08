import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { TaskStore } from 'bryntum-gantt/gantt.lite.umd.js';

@Injectable({
    providedIn: 'root'
})
export class TaskStoreService {
    tasks = this.socket.fromEvent<string[]>('documents');

    constructor(private socket: Socket) {
    }

    getDocument(id: string) {
        this.socket.emit('getDoc', id);
    }

    newDocument(task: TaskStore | { task: TaskStore }) {
        this.socket.emit('addDoc', task);
    }

    editDocument(taskStore: TaskStore | { taskStore: TaskStore }) {
        this.socket.emit('editDoc', taskStore);
    }
}
