"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Game of Life';
        this.year = new Date().getUTCFullYear();
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n     <nav class=\"navbar navbar-default\">\n     <div class=\"container\">\n        <ul class=\"nav navbar-nav\">\n          <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n          <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\n          <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n        </ul>\n     </div>\n     </nav>\n\n     <router-outlet></router-outlet>\n     \n     <footer>\n        <div class=\"text-center panel panel-default\">\n          <div class=\"panel-body\">\n            {{title}} \u00A9 - {{year}}\n          </div>\n        </div>\n     </footer>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map