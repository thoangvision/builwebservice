import {NgModule}       from '@angular/core';
import {TestComponent} from './test.component';
import {TestRoute} from './test.route';
import {GroupModule} from './groups/group.module';
@NgModule({
	imports : [TestRoute, GroupModule],
    declarations: [TestComponent],
})
export class TestModule {}