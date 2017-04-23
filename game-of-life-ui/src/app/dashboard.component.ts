import { Component } from '@angular/core';
import { DashboardGameBoardComponent } from './dashboard-game-board.component'

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    title = 'Dashboard'
}