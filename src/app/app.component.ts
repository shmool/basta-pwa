import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-header></app-header>

    <mat-sidenav-container class="song-book-container">

      <mat-sidenav #sidenav [opened]="sideNavOpened" [mode]="menuMode">
        <app-song-list></app-song-list>
      </mat-sidenav>

      <router-outlet></router-outlet>

    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideNavOpened = true;
  menuMode = 'side';
}
