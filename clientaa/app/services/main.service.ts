import {Http, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {SystemConstants} from './../common/system.constants';
declare var $:any;

@Injectable()

export class MainService {
	public headers:Headers;
	constructor(private http: Http, private router: Router, public authservice : AuthService){
//		this.headers = new Headers('Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8');
//		this.headers.append('Content-Type', 'application/json','Origin', 'X-Requested-With', 'Accept', 'Authorization');
		
	}
	/*==========================
	@ 15/09/2017
	@ method get
	==========================*/
	get(uri: string) {

	}
	
	/*==========================
	@ 15/09/2017
	@ method get
	==========================*/
	
	getsigle (uri: string) {

	}
	/*==========================
	@ 15/09/2017
	@ method post
	==========================*/
	post(uri: string, data: any) {
		this.headers.delete('Authorization');
		this.headers.append('Authorization', 'Bearer' + localStorage.getItem(SystemConstants.CURRENT_TOKEN));
		return this.http.post(SystemConstants.API_URL + uri, data, {headers: this.headers}).map(res => res);
	}

	//============================================================
	public handleError(response :any) {
		if(response.code ==  SystemConstants.E_CODE_TOKEN_ERROR) {
			alert(response.message);
			localStorage.removeItem(SystemConstants.CURRENT_TOKEN);
			this.router.navigate([SystemConstants.URL_LOGIN]);
		}
	}
}