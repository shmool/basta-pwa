import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lyrics',
  template: `
    <p class="lyrics">
      {{ lyrics }}
    </p>
  `,
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {
  @Input() lyrics: string;

  constructor() { }

  ngOnInit() {
  }

}
