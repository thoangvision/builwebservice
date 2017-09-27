"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var main_service_1 = require("./../../../services/main.service");
var AddGroupComponent = (function () {
    function AddGroupComponent(mainservice) {
        this.mainservice = mainservice;
        this.group = {};
    }
    AddGroupComponent.prototype.save = function (data) {
        var _this = this;
        var dataAarray = this.toAarry(data);
        this.mainservice.post('groups/add', dataAarray).subscribe(function (res) {
            console.log(res);
            _this.mainservice.handleError(res);
        });
    };
    AddGroupComponent.prototype.toAarry = function (data) {
        var formData = new FormData();
        $.each(data, function (index, value) {
            formData.append(index, value);
        });
        return formData;
    };
    return AddGroupComponent;
}());
AddGroupComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './../../views/groups/add.group.component.html'
    }),
    __metadata("design:paramtypes", [main_service_1.MainService])
], AddGroupComponent);
exports.AddGroupComponent = AddGroupComponent;
//# sourceMappingURL=add-group.component.js.map