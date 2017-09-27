import { NgModule} from '@angular/core';

import {AdminComponent} from './admin.component';
import {Test2Component} from './test2.component';
import {AdminRoutes} from './admin.route';
import {GroupModule} from './../admin/modules/group.module';

@NgModule({
    imports: [AdminRoutes],
	declarations: [AdminComponent, Test2Component],
	bootstrap: [AdminComponent],
})
export class AdminModule{

}