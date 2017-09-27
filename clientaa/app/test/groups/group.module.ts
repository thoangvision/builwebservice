import {NgModule}       from '@angular/core';
import {ListGroupComponent} from './list-group.component';
import {AddGroupComponent} from './add-group.component';
import {GroupRoute} from './group.route';
@NgModule({
	imports : [GroupRoute],
    declarations: [ListGroupComponent, AddGroupComponent],
})
export class GroupModule {}