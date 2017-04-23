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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var CellStateService = (function () {
    function CellStateService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.cellStateUrl = 'http://localhost:52952/api/cellstate';
    }
    CellStateService.prototype.getClean = function (size) {
        var result = [];
        for (var i = 0; i < size; ++i) {
            result[i] = [];
            for (var j = 0; j < size; ++j) {
                result[i][j] = 0;
            }
        }
        return Promise.resolve(result);
    };
    CellStateService.prototype.getRandom = function (size) {
        var url = this.cellStateUrl + "/rand/" + size;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    CellStateService.prototype.getNext = function (state) {
        var url = this.cellStateUrl + "/next/" + state;
        return this.http.get(url)
            .toPromise()
            .then(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    CellStateService.prototype.postNext = function (state) {
        var url = this.cellStateUrl + "/next";
        var input = JSON.stringify(state);
        return this.http.post(url, input, { headers: this.headers })
            .toPromise()
            .then(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    CellStateService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return CellStateService;
}());
CellStateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CellStateService);
exports.CellStateService = CellStateService;
//# sourceMappingURL=cell-state.service.js.map