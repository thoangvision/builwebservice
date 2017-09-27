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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var system_constants_1 = require("./../common/system.constants");
var MainService = (function () {
    function MainService(http, router, authservice) {
        //		this.headers = new Headers('Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8');
        //		this.headers.append('Content-Type', 'application/json','Origin', 'X-Requested-With', 'Accept', 'Authorization');
        this.http = http;
        this.router = router;
        this.authservice = authservice;
    }
    /*==========================
    @ 15/09/2017
    @ method get
    ==========================*/
    MainService.prototype.get = function (uri) {
    };
    /*==========================
    @ 15/09/2017
    @ method get
    ==========================*/
    MainService.prototype.getsigle = function (uri) {
    };
    /*==========================
    @ 15/09/2017
    @ method post
    ==========================*/
    MainService.prototype.post = function (uri, data) {
        this.headers.delete('Authorization');
        this.headers.append('Authorization', 'Bearer' + localStorage.getItem(system_constants_1.SystemConstants.CURRENT_TOKEN));
        return this.http.post(system_constants_1.SystemConstants.API_URL + uri, data, { headers: this.headers }).map(function (res) { return res; });
    };
    //============================================================
    MainService.prototype.handleError = function (response) {
        if (response.code == system_constants_1.SystemConstants.E_CODE_TOKEN_ERROR) {
            alert(response.message);
            localStorage.removeItem(system_constants_1.SystemConstants.CURRENT_TOKEN);
            this.router.navigate([system_constants_1.SystemConstants.URL_LOGIN]);
        }
    };
    return MainService;
}());
MainService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, auth_service_1.AuthService])
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map