import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';

import {Test2Component} from './test2.component';

const AdminRouting : Routes = [
	// {path: 'admin', component: AdminComponent, children: [
			// {path: '', redirectTo: 'test2', pathMatch: 'full'},
			// {path: 'test2', component: Test2Component},
			{path: 'group', loadChildren: 'client/app/admin/modules/group.module#GroupModule'},
	// 	]
	// }
]

export const AdminRoutes = RouterModule.forChild(AdminRouting);