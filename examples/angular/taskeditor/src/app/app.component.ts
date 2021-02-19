import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import ganttConfig from './ganttConfig';
import { WebSocketAPI } from './WebSocketAPI';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ganttConfig = ganttConfig;
    public tasks: string[] = [];
    private taskSubscription: Subscription;

    title = 'angular8-springboot-websocket';

    webSocketAPI: WebSocketAPI;
    greeting: any;
    name: string;
    ngOnInit() {
        this.webSocketAPI = new WebSocketAPI(new AppComponent());
        this.webSocketAPI._connect();
        this.ganttConfig.project.taskStore.on('update', (me, record, operation, modifiedFieldNames, eOpts) => {
            console.log('change: ' + me);
            this.sendMessage(this.ganttConfig.project.taskStore.formattedJSON);
        });
    }

    ngOnDestroy() {
        this.webSocketAPI._disconnect();
    }

    sendMessage(message) {
        this.webSocketAPI._send(message);
    }

    handleMessage(message) {
        console.log("Message Recieved from Server :: " + message);
        this.tasks = JSON.parse(message);
        this.ganttConfig.project.taskStore.json = this.tasks;
        this.ganttConfig.project.commitAsync();

    }

}


