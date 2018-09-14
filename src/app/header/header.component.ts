import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary" role="heading">
      <span>Songbook</span>
    </mat-toolbar>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
