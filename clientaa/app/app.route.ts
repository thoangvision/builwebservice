import {Routes, RouterModule} from '@angular/router';

const appRouting : Routes = [
	{ path: '', redirectTo: 'testt', pathMatch: 'full' },
	{path : 'testt',  loadChildren: './test/test.module#TestModule'},
	{path : 'login',  loadChildren: './login/login.module#LoginModule'},
	{path : 'admin',  loadChildren: './admin/admin.module#AdminModule'},
];
export const AppRoutes = RouterModule.forRoot(appRouting);