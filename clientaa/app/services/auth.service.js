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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var system_constants_1 = require("./../common/system.constants");
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        return this.http.post(system_constants_1.SystemConstants.API_URL + 'auths/login', formData).map(function (response) {
            if (response.json().token) {
                console.log(response.json().token);
                localStorage.removeItem(system_constants_1.SystemConstants.CURRENT_TOKEN);
                localStorage.setItem(system_constants_1.SystemConstants.CURRENT_TOKEN, response.json().token);
            }
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem(system_constants_1.SystemConstants.CURRENT_TOKEN);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map