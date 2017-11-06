import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent, HomeComponent, ContactComponent, CreateContactComponent }  from './components/index';
import { SalesforceService, LoggerService, LOG_LEVEL } from './services/index';
import { SalesforceResolver } from './resolves/index';

import { ContentEditableModelDirective } from './directives/contentEditableModel.directive';
import { GravatarDirective } from './directives/gravatar.directive';

import { NewlineToBreakPipe, KeysPipe } from './pipes/index';
import { FancyGridComponent } from './components/fancy-grid/fancy-grid.component';
import { RootFancyGridComponent } from './components/root-fancy-grid/root-fancy-grid.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        CreateContactComponent,

        ContentEditableModelDirective,
        GravatarDirective,
        NewlineToBreakPipe,
        KeysPipe,
        FancyGridComponent,
        RootFancyGridComponent
    ],
    providers: [
        SalesforceService,
        LoggerService,
        SalesforceResolver,
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private sfdc: SalesforceService, private log: LoggerService) {
        this.sfdc.controller = 'AngularAppController';
        this.log.logLevel = LOG_LEVEL.ALL;
    }
}
