import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { RouterModule }     from '@angular/router';
import { AboutComponent }   from "./about.component";
import { DashboardComponent } from "./dashboard.component";
import { AppRoutingModule } from './app-routing.module';
import { DashboardGameBoardComponent } from "./dashboard-game-board.component";
import { HomeComponent }    from './home.component';
import { CellStateService } from './cell-state.service'
import { HttpModule }       from "@angular/http";
import { FormsModule }    from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, AppRoutingModule, HttpModule, FormsModule ],
    declarations: [ AppComponent, DashboardComponent, AboutComponent, DashboardGameBoardComponent, HomeComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ CellStateService ]
})
export class AppModule { }