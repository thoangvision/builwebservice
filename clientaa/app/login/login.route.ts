import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
const routing : Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent}
];

export const LoginRoute = RouterModule.forChild(routing);