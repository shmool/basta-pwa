import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import { SongResponse } from './song-response';

@Injectable({
  providedIn: 'root'
})
export class SearchSongService {

  constructor(private http: HttpClient) {
  }

  searchSong(title, artist) {
    return this.http.get<SongResponse>(`${environment.lyricsApi}${artist}/${title}`,
      { params: { apikey: environment.apikey } })
      .pipe(
        map(response => {
            return {
              title: response.result.track.name,
              artist: response.result.artist.name,
              lyrics: response.result.track.text
            };
          }
        )
      );
  }
}
