import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <mat-sidenav-container class="song-book-container">

      <mat-sidenav #sidenav [opened]="sideNavOpened" [mode]="menuMode">
        <app-song-list></app-song-list>
      </mat-sidenav>

      <div class="main-content">
        <router-outlet></router-outlet>
      </div>

    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavOpened = true;
  menuMode = 'side';
}
