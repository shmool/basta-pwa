import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  template: `
    <span class="song-res-title">{{ songTitle }} - {{ artist }}</span>
    <app-lyrics [lyrics]="lyrics"></app-lyrics>
  `,
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() songTitle;
  @Input() artist;
  @Input() lyrics;

  constructor() { }

  ngOnInit() {
  }

}
