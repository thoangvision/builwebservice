import {Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';

import {HomeComponent} from './components/home/home.component';
import {ListGroupComponent} from './components/groups/list-group.component';
import {AddGroupComponent} from './components/groups/add-group.component';
import {EditGroupComponent} from './components/groups/edit-group.component';

import {PageNotFoundComponent} from './../page-not-found.component';

import {AuthGuard} from '../guards/auth.guard';

const MainRouting : Routes = [
	{path: 'main', component: MainComponent, children: [
			{path: '', redirectTo: 'home', pathMatch: 'full'},
			{path: 'home', component: HomeComponent},
			{path: 'group', loadChildren: 'app/main/modules/group.module#GroupModule'},
                        {path: '**', component: PageNotFoundComponent}
		]
	}
];

export const MainRoutes = RouterModule.forChild(MainRouting);