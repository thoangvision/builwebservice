import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test.component';
const routing : Routes = [
	// {path: '', redirectTo: 'testt', pathMatch: 'full'},
	// {path: 'testt', component: TestComponent}
	{path: 'testt', component: TestComponent, children: [
			// {path: '', redirectTo: 'test2', pathMatch: 'full'},
			// {path: 'test2', component: Test2Component},
			{path: 'group', loadChildren: 'client/app/test/groups/group.module#GroupModule'},
		]
	}
];

export const TestRoute = RouterModule.forChild(routing);