import { Component } from '@angular/core';
  
@Component({
    selector: 'my-app',
    template: 
    `
     <nav class="navbar navbar-default">
     <div class="container">
        <ul class="nav navbar-nav">
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
        </ul>
     </div>
     </nav>

     <router-outlet></router-outlet>
     
     <footer>
        <div class="text-center panel panel-default">
          <div class="panel-body">
            {{title}} © - {{year}}
          </div>
        </div>
     </footer>
    `
})
export class AppComponent {
  title = 'Game of Life';
  year = new Date().getUTCFullYear();
}