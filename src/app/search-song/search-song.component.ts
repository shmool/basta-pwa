import { Component, OnInit } from '@angular/core';
import { SearchSongService } from '../search-song.service';
import { SongListService } from '../song-list.service';

@Component({
  selector: 'app-search-song',
  template: `
    <mat-form-field appearance="outline" class="search-song-field">
      <input matInput #titleInput>
      <button mat-button *ngIf="titleInput.value" matSuffix mat-icon-button aria-label="Clear"
              (click)="titleInput.value=''">
        <mat-icon>close</mat-icon>
      </button>
      <mat-label>title</mat-label>
    </mat-form-field>

    <mat-form-field appearance="outline" class="search-song-field">
      <input matInput #artistInput>
      <button mat-button *ngIf="artistInput.value" matSuffix mat-icon-button aria-label="Clear"
              (click)="artistInput.value=''">
        <mat-icon>close</mat-icon>
      </button>
      <mat-label>artist</mat-label>
    </mat-form-field>

    <ng-template #searchButton>
      <button mat-raised-button color="accent" (click)="searchSong(titleInput.value, artistInput.value)">
        <mat-icon>search</mat-icon>
        Search
      </button>
    </ng-template>

    <div *ngIf="songResult$ | async as song; else searchButton">

      <button mat-raised-button color="accent" class="result-button" (click)="reset()">
        <mat-icon>close</mat-icon>
        Clear
      </button>

      <app-song [songTitle]="song.title" [artist]="song.artist" [lyrics]="song.lyrics"></app-song>

    </div>
  `,
  styleUrls: ['./search-song.component.scss']
})
export class SearchSongComponent implements OnInit {
  songResult$;

  constructor(private searchSongService: SearchSongService) {
  }

  ngOnInit() {
  }

  searchSong(title, artist) {
    this.songResult$ = this.searchSongService.searchSong(title, artist);
  }

  reset() {
    this.songResult$ = null;
  }

}
