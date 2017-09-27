import { NgModule} from '@angular/core';

import {MainComponent} from './main.component';
import {HomeComponent} from './components/home/home.component';
import {MainRoutes} from './main.route';


@NgModule({
    imports: [MainRoutes],
	declarations: [MainComponent, HomeComponent],
})
export class MainModule{

}