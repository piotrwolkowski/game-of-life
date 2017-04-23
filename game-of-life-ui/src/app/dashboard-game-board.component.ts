import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from 'rxjs/Rx';
import { CellStateService } from "./cell-state.service";

@Component({
    selector: 'my-game-board',
    templateUrl: './dashboard-game-board.component.html'
})
export class DashboardGameBoardComponent implements OnInit, OnDestroy {
    
    board = ''
    cells: number[][];
    ticks: number;
    size: number;
    private timer: Observable<number>;
    private sub: Subscription;
    speed: number;

    constructor(private cellStateService: CellStateService) {
        this.size = 12;
        this.ticks = 0;
        this.speed = 1000;
        this.clean();
    }

    ngOnInit() {
        this.timer = Observable.timer(0, this.speed);
    }

    tickerFunc(tick: number) {
        this.drawNext();
        this.ticks = tick;
    }

    drawRandom() {
        this.cellStateService
            .getRandom(this.size)
            .then(res => {
                this.cells = res;
                this.drawCells();
            });
    }

    drawClean() {
        this.cellStateService
            .getClean(this.size)
            .then(res => {
                this.cells = res;
                this.drawCells();
            });
    }

    drawNext() {
        this.cellStateService
            .postNext(this.cells)
            .then(res => {
                this.cells = res;
                this.drawCells();
            });
    }

    drawCells() {
        this.board = '';
        for (let rowIndex in this.cells) {
            this.board += '<row>';
            var cellRow = this.cells[rowIndex];
            for (let colIndex in cellRow) {
                if (cellRow[colIndex] == 1) {
                    this.board += '<div class="cell cell-live"></div>';
                } else {
                    this.board += '<div class="cell cell-dead"></div>';
                }
            }
            this.board += '</row>';
        }
    }

    refreshSpeed(): void {
        if (this.sub != undefined) {
            this.sub.unsubscribe();
            this.timer = Observable.timer(0, this.speed);
            this.sub = this.timer.subscribe(t => this.tickerFunc(t));
        }
    }

    play(): void {
        this.stop();
        this.drawCells();
        this.sub = this.timer.subscribe(t => this.tickerFunc(t));
    }

    stepForward(): void {
        this.stop();
        this.drawNext();
    }

    stop(): void {
        if (this.sub != undefined)
        {
            this.sub.unsubscribe();
        }
    }

    clean(): void {
        this.stop();
        this.drawClean();
    }

    random(): void {
        this.stop();
        this.drawRandom();
    }

    ngOnDestroy() {
        console.log("Destroy timer");
        // unsubscribe here
        this.sub.unsubscribe();
    }
}


// Ideas:
// - add option to provide size of the board
// - calcualte the sidth of the canvas based on the size of the board (e.g. if 12 tails then width = 12 * (50 + 10), where 50 is widith of a square and 10 is total margin of a square)