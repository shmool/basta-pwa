import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchSongService } from '../search-song.service';
import { switchMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-song-view',
  template: `
    <app-song *ngIf="song$ | async as song"
              [songTitle]="song.title"
              [artist]="song.artist"
              [lyrics]="song.lyrics"></app-song>
  `,
  styleUrls: ['./song-view.component.scss']
})
export class SongViewComponent implements OnInit {
  song$;

  constructor(
    private route: ActivatedRoute,
    private searchSongService: SearchSongService) {
  }

  ngOnInit() {
    this.song$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.searchSongService.searchSong(params.get('title'), params.get('artist'))));
  }

}



