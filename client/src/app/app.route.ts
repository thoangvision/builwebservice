import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {PageNotFoundComponent} from './page-not-found.component';
const appRouting : Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{path : 'main', loadChildren: './main/main.module#MainModule'},
	{path : 'login', loadChildren: './login/login.module#LoginModule'},
//	{ path: '**', component: PageNotFoundComponent }
];
export const AppRoutes = RouterModule.forRoot(appRouting);