import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from './../services/auth.service';
import {SystemConstants} from './../common/system.constants';

@Component ({
	selector : 'app-login',
	templateUrl : './login.component.html',
	// styleUrls : [],
	providers: [AuthService]
})

export class LoginComponent implements OnInit {
	user: any = {};
	constructor(private auth: AuthService, private router: Router) {

	}
	ngOnInit() {
		
  	}

	login (user: any){
	return this.auth.login(user.email, user.password).subscribe(result => {
			
			this.router.navigate([SystemConstants.URL_MAIN]);
			console.log('Login success');
		},Error => {
			console.log('Login fail');
		});
	}
}