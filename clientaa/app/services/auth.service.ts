import {Injectable, Inject} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {SystemConstants} from './../common/system.constants';

@Injectable()

export class  AuthService {
	constructor(@Inject(Http) private http : Http) {

	}

	login(email: string, password: string) {
	    let formData = new FormData();
		    formData.append('email', email);
		    formData.append('password', password);
	    return this.http.post(SystemConstants.API_URL + 'auths/login', formData).map((response: Response) => {
	    	if(response.json().token) {
	    		console.log(response.json().token);
	    		localStorage.removeItem(SystemConstants.CURRENT_TOKEN);
	    		localStorage.setItem(SystemConstants.CURRENT_TOKEN, response.json().token);
	    	}
	    	
	    });
  	}
  	logout(){
  		localStorage.removeItem(SystemConstants.CURRENT_TOKEN);
  	}
}