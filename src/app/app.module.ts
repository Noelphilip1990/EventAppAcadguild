import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule , JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { EventListComponentComponent } from './event-list-component/event-list-component.component';
import { AddEventComponentComponent } from './add-event-component/add-event-component.component';
import {routing} from './app.Routes';
import { EventServiceService } from './event-service.service';
import { OrderByDatePipe } from './order-by-date.pipe';
import { AddSessionComponent } from './add-session/add-session.component';
import { AccordionModule } from 'ng2-bootstrap';
import { ActivateGuard } from './ActivateGuard';
import { ActivateUser } from './ActivateUser';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { EventData } from '../assets/event-data';
import { DropdownModule } from "ng2-dropdown";
@NgModule({
  declarations: [
    AppComponent,
    EventListComponentComponent,
    AddEventComponentComponent,
    OrderByDatePipe,
    AddSessionComponent,
    LoginComponent,
    UserProfileComponent,
    EditEventComponent
  ],
  imports: [
    DropdownModule,
    BrowserModule,
    FormsModule,
    routing,
    AccordionModule.forRoot(),
    InMemoryWebApiModule.forRoot(EventData),
    HttpModule,
    JsonpModule
    
  ],
  providers: [EventServiceService, ActivateGuard, ActivateUser,EventListComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
