import {Component} from '@angular/core';
import {SystemConstants} from './../../../common/system.constants';
import {MainService} from './../../../services/main.service';
declare var $:any;

@Component ({
	moduleId: module.id,
	templateUrl: './../../views/groups/add.group.component.html'
})

export class AddGroupComponent {
	group = {};
	constructor (private mainservice: MainService) {

	}

	save(data:any){
		let dataAarray = this.toAarry(data);
		this.mainservice.post('groups/add', dataAarray).subscribe((res: any) => {
			console.log(res);
			this.mainservice.handleError(res);
		});
	}

	toAarry(data:any) {
		let formData = new FormData();
		$.each(data, function (index:any, value:any) {
		    formData.append(index, value);
		});
		return formData;
	}
}