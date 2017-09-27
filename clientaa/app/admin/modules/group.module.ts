import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AdminModule} from './../admin.module';
import {ListGroupComponent} from '../components/groups/list-group.component';
import {AddGroupComponent} from '../components/groups/add-group.component';
import {EditGroupComponent} from '../components/groups/edit-group.component';
import {AuthGuard} from './../../guards/auth.guard';

export const GroupRoutes : Routes = [
	{path: '', redirectTo: 'list-groups', pathMatch: 'full'},
	{path: 'list-groups', component: ListGroupComponent},
	{path: 'add-groups', component: AddGroupComponent},
	{path: 'edit-groups', component: EditGroupComponent}
];



@NgModule ({
    imports: [CommonModule, FormsModule,AdminModule, RouterModule.forChild(GroupRoutes)],
	declarations : [ListGroupComponent, AddGroupComponent, EditGroupComponent],
})

export class GroupModule{

}