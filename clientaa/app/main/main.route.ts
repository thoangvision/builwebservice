import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

import {HomeComponent} from './components/home/home.component';

const MainRouting : Routes = [
	{path: 'main', component: MainComponent, children: [
			{path: '', redirectTo: 'home', pathMatch: 'full'},
			{path: 'home', component: HomeComponent},
			{path: 'group', loadChildren: 'app/main/modules/group.module#GroupModule'},
		]
	}
];

export const MainRoutes = RouterModule.forChild(MainRouting);