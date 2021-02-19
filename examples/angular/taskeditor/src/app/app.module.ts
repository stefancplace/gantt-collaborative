import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppErrorHandler } from './error.handler';
import { AppComponent } from './app.component';
import { BryntumAngularSharedModule } from 'bryntum-angular-shared';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BryntumAngularSharedModule
    ],
    providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
