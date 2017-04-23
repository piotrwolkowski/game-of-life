"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var about_component_1 = require("./about.component");
var dashboard_component_1 = require("./dashboard.component");
var app_routing_module_1 = require("./app-routing.module");
var dashboard_game_board_component_1 = require("./dashboard-game-board.component");
var home_component_1 = require("./home.component");
var cell_state_service_1 = require("./cell-state.service");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, about_component_1.AboutComponent, dashboard_game_board_component_1.DashboardGameBoardComponent, home_component_1.HomeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [cell_state_service_1.CellStateService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map