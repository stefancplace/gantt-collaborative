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
    public receivedMessages: string[] = [];
    title = 'angular8-springboot-websocket';

    webSocketAPI: WebSocketAPI;
    greeting: any;
    name: string;
    ngOnInit() {
        this.webSocketAPI = new WebSocketAPI(new AppComponent());
        this.webSocketAPI._connect();
    }

    ngOnDestroy() {
        this.webSocketAPI._disconnect();
    }

    sendMessage() {
        this.webSocketAPI._send("some test");
    }

    handleMessage(message) {
        console.log("Message Recieved from Server :: " + message);
        this.ganttConfig.project.taskStore.json = JSON.parse(message);
    }

}


