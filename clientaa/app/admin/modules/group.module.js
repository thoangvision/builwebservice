"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var admin_module_1 = require("./../admin.module");
var list_group_component_1 = require("../components/groups/list-group.component");
var add_group_component_1 = require("../components/groups/add-group.component");
var edit_group_component_1 = require("../components/groups/edit-group.component");
exports.GroupRoutes = [
    { path: '', redirectTo: 'list-groups', pathMatch: 'full' },
    { path: 'list-groups', component: list_group_component_1.ListGroupComponent },
    { path: 'add-groups', component: add_group_component_1.AddGroupComponent },
    { path: 'edit-groups', component: edit_group_component_1.EditGroupComponent }
];
var GroupModule = (function () {
    function GroupModule() {
    }
    return GroupModule;
}());
GroupModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, admin_module_1.AdminModule, forms_1.FormsModule, router_1.RouterModule.forChild(exports.GroupRoutes)],
        declarations: [list_group_component_1.ListGroupComponent, add_group_component_1.AddGroupComponent, edit_group_component_1.EditGroupComponent],
        providers: []
    })
], GroupModule);
exports.GroupModule = GroupModule;
