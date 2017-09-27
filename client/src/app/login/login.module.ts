import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthService} from './../services/auth.service';
import {SystemConstants} from './../common/system.constants';

export const routes:Routes = [
    {path: 'login', component : LoginComponent},
] ;

@NgModule({
	imports :[ HttpModule, CommonModule, FormsModule, RouterModule.forChild(routes)],
	providers: [AuthService],
	declarations: [LoginComponent]
})
export class LoginModule{
	constructor(private router: Router) {
		if(localStorage.getItem(SystemConstants.CURRENT_TOKEN)) {
			this.router.navigate([SystemConstants.URL_MAIN]);
		}
	}
}