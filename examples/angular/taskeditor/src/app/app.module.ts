import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppErrorHandler } from './error.handler';

import { AppComponent } from './app.component';
import { BryntumAngularSharedModule } from 'bryntum-angular-shared';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from "@stomp/ng2-stompjs";
import { myRxStompConfig } from "./my-rx-stomp.config";


const config: SocketIoConfig = {
    url: 'http://localhost:4444', options: {
        withCredentials: false,
    }
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SocketIoModule.forRoot(config),
        BryntumAngularSharedModule
    ],
    providers: [{ provide : ErrorHandler, useClass : AppErrorHandler },{
        provide: InjectableRxStompConfig,
        useValue: myRxStompConfig,
    },
        {
            provide: RxStompService,
            useFactory: rxStompServiceFactory,
            deps: [InjectableRxStompConfig],
        },],
    bootstrap: [AppComponent]
})
export class AppModule {
}
