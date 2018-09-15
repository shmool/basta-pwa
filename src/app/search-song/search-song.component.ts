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
      <span class="song-res-title">{{ song.title }} - {{ song.artist }}</span>

      <button mat-raised-button color="accent" class="result-button" (click)="reset()">
        <mat-icon>close</mat-icon>
        Clear
      </button>

      <button mat-raised-button color="primary" class="result-button"
              (click)="addSong(song.title, song.artist)">
        <mat-icon>add</mat-icon>
        Add
      </button>

      <p class="lyrics">
        {{ song.lyrics }}
      </p>
    </div>
  `,
  styleUrls: ['./search-song.component.scss']
})
export class SearchSongComponent implements OnInit {
  songResult$;

  constructor(private searchSongService: SearchSongService, private songListService: SongListService) {
  }

  ngOnInit() {
  }

  searchSong(title, artist) {
    this.songResult$ = this.searchSongService.searchSong(title, artist);
  }

  addSong(title, artist) {
    this.songListService.addSong(title, artist);
  }

  reset() {
    this.songResult$ = null;
  }

}
