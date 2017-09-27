import { NgModule, ApplicationRef, ModuleWithProviders} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {MainService} from './../services/main.service';

//import {GroupModule} from './modules/group.module';

import {MainRoutes} from './main.route';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './../guards/auth.guard';
import {PageNotFoundComponent} from './../page-not-found.component';

@NgModule({
        imports: [MainRoutes],
	declarations: [MainComponent, HomeComponent, PageNotFoundComponent],
	providers: [MainService],
	bootstrap: [MainComponent]
})
export class MainModule{
	// constructor () {
	// 	if()
	// }
}