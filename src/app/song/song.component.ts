import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SongListService } from '../song-list.service';

@Component({
  selector: 'app-song',
  template: `
    <button *ngIf="isNewSong()" mat-raised-button color="primary" class="add-song-button"
            (click)="addSong()">
      <mat-icon>add</mat-icon>
      Add
    </button>

    <span class="song-res-title">{{ songTitle }} - {{ artist }}</span>
    <app-lyrics [lyrics]="lyrics"></app-lyrics>
  `,
  styleUrls: ['./song.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongComponent implements OnInit {
  @Input() songTitle: string;
  @Input() artist: string;
  @Input() lyrics: string;

  constructor(private songListService: SongListService) {
  }

  ngOnInit() {
  }

  isNewSong() {
    return this.songListService.findSong({ title: this.songTitle, artist: this.artist }) === -1;
  }

  addSong() {
    this.songListService.addSong(this.songTitle, this.artist);
  }


}
