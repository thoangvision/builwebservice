import {RouterModule, Routes} from '@angular/router';
import {ListGroupComponent} from './list-group.component';
import {AddGroupComponent} from './add-group.component';
const routing : Routes = [
	{path: '', redirectTo: 'list-groups', pathMatch: 'full'},
	{path: 'list-groups', component: ListGroupComponent},
	{path: 'add-groups', component: AddGroupComponent},

];

export const GroupRoute = RouterModule.forChild(routing);