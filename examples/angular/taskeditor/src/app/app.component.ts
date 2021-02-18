import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import ganttConfig from './ganttConfig';
import { RxStompService } from "@stomp/ng2-stompjs";
import { Message } from '@stomp/stompjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ganttConfig = ganttConfig;
    public receivedMessages: string[] = [];
    private topicSubscription: Subscription;

    constructor(private rxStompService: RxStompService) {
    }

    ngOnInit() {
        this.topicSubscription = this.rxStompService
            .watch('/topic/demo')
            .subscribe((message: Message) => {
                this.receivedMessages.push(message.body);
            });
    }

    ngOnDestroy() {
        this.topicSubscription.unsubscribe();
    }

    onSendMessage() {
        const message = `Message generated at ${new Date}`;
        this.rxStompService.publish({destination: '/topic/demo', body: message});
    }
}


