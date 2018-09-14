import { Component, OnInit } from '@angular/core';
import { Song, SongListService } from '../song-list.service';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'app-song-list',
  template: `
    <mat-list>
      <mat-list-item>
        <a [routerLink]="['./']">
          <mat-icon class="note-add-icon" color="primary">note_add</mat-icon>
          Add Song
        </a>
      </mat-list-item>
      <mat-divider></mat-divider>

      <mat-list-item>
        <mat-form-field class="search-field" floatLabel="never">
          <input matInput type="text" #searchInput (keyup)="search(searchInput.value)">
          <button mat-button *ngIf="searchInput.value" matSuffix mat-icon-button aria-label="Clear"
                  (click)="searchInput.value=''; search('')">
            <mat-icon>close</mat-icon>
          </button>
          <mat-label>
            <mat-icon>search</mat-icon>
            Search
          </mat-label>
        </mat-form-field>
      </mat-list-item>

      <a [routerLink]="['./']" *ngFor="let song of songList$ | async">
        <mat-list-item>{{ song.title }} - {{ song.artist }}
        </mat-list-item>
      </a>
    </mat-list>
  `,
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  songList$: Observable<Song[]>;

  constructor(private songListService: SongListService) {
    this.songList$ = songListService.songList$;
  }

  ngOnInit() {
  }

  search(term) {
    this.songListService.searchSong(term);
  }

}
