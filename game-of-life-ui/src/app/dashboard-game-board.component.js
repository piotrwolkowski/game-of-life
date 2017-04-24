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
var Rx_1 = require("rxjs/Rx");
var cell_state_service_1 = require("./cell-state.service");
var DashboardGameBoardComponent = (function () {
    function DashboardGameBoardComponent(cellStateService) {
        this.cellStateService = cellStateService;
        this.board = '';
        this.size = 12;
        this.ticks = 0;
        this.speed = 1000;
        this.clean();
    }
    DashboardGameBoardComponent.prototype.ngOnInit = function () {
        this.timer = Rx_1.Observable.timer(0, this.speed);
    };
    DashboardGameBoardComponent.prototype.tickerFunc = function (tick) {
        this.drawNext();
        this.ticks = tick;
    };
    DashboardGameBoardComponent.prototype.drawRandom = function () {
        var _this = this;
        this.cellStateService
            .getRandom(this.size)
            .then(function (res) {
            _this.cells = res;
            _this.drawCells();
        });
    };
    DashboardGameBoardComponent.prototype.drawClean = function () {
        var _this = this;
        this.cellStateService
            .getClean(this.size)
            .then(function (res) {
            _this.cells = res;
            _this.drawCells();
        });
    };
    DashboardGameBoardComponent.prototype.drawNext = function () {
        var _this = this;
        this.cellStateService
            .postNext(this.cells)
            .then(function (res) {
            _this.cells = res;
            _this.drawCells();
        });
    };
    DashboardGameBoardComponent.prototype.drawCells = function () {
        this.board = '';
        for (var rowIndex in this.cells) {
            this.board += '<row>';
            var cellRow = this.cells[rowIndex];
            for (var colIndex in cellRow) {
                if (cellRow[colIndex] == 1) {
                    this.board += '<div class="cell cell-live"></div>';
                }
                else {
                    this.board += '<div class="cell cell-dead"></div>';
                }
            }
            this.board += '</row>';
        }
    };
    DashboardGameBoardComponent.prototype.refreshSpeed = function () {
        var _this = this;
        this.unsubscribe();
        this.timer = Rx_1.Observable.timer(0, this.speed);
        this.sub = this.timer.subscribe(function (t) { return _this.tickerFunc(t); });
    };
    DashboardGameBoardComponent.prototype.play = function () {
        var _this = this;
        this.stop();
        this.drawCells();
        this.sub = this.timer.subscribe(function (t) { return _this.tickerFunc(t); });
    };
    DashboardGameBoardComponent.prototype.stepForward = function () {
        this.stop();
        this.drawNext();
    };
    DashboardGameBoardComponent.prototype.stop = function () {
        this.unsubscribe();
    };
    DashboardGameBoardComponent.prototype.clean = function () {
        this.stop();
        this.drawClean();
    };
    DashboardGameBoardComponent.prototype.random = function () {
        this.stop();
        this.drawRandom();
    };
    DashboardGameBoardComponent.prototype.ngOnDestroy = function () {
        console.log("Destroy timer");
        // unsubscribe here
        this.unsubscribe();
    };
    DashboardGameBoardComponent.prototype.unsubscribe = function () {
        if (this.sub != undefined) {
            this.sub.unsubscribe();
        }
    };
    return DashboardGameBoardComponent;
}());
DashboardGameBoardComponent = __decorate([
    core_1.Component({
        selector: 'my-game-board',
        templateUrl: './dashboard-game-board.component.html'
    }),
    __metadata("design:paramtypes", [cell_state_service_1.CellStateService])
], DashboardGameBoardComponent);
exports.DashboardGameBoardComponent = DashboardGameBoardComponent;
// Ideas:
// - add option to provide size of the board
// - calcualte the sidth of the canvas based on the size of the board (e.g. if 12 tails then width = 12 * (50 + 10), where 50 is widith of a square and 10 is total margin of a square) 
//# sourceMappingURL=dashboard-game-board.component.js.map