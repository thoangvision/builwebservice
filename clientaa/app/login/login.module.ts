import {NgModule}       from '@angular/core';
import {LoginComponent} from './login.component';
import {LoginRoute} from './login.route';
@NgModule({
	imports : [LoginRoute],
    declarations: [LoginComponent],
})
export class LoginModule {}