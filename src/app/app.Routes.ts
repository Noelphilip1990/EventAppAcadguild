import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEventComponentComponent } from './add-event-component/add-event-component.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventListComponentComponent } from './event-list-component/event-list-component.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { ActivateGuard } from './ActivateGuard';
import { ActivateUser } from './ActivateUser';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes =  [
	{ path: '', component: LoginComponent },
	{
		path: 'admin', component: EventListComponentComponent, canActivate: [ActivateGuard],
	children: [
	{ path: 'addsession/:id', component: AddSessionComponent },
	{ path: 'add', component: AddEventComponentComponent },
	{ path: 'edit/:id', component: EditEventComponent }
	]
	},
	{ path: 'user', component: UserProfileComponent, canActivate: [ActivateUser] }
	
];

export const routing = RouterModule.forRoot(routes);