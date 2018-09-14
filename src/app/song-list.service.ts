import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Song {
  title: string;
  artist: string;
}

const songList = [
  {
    title: 'Heal the World',
    artist: 'Michael Jackson'
  },
  {
    title: 'We Are the World',
    artist: 'Michael Jackson'
  },
  {
    title: 'Vogue',
    artist: 'Madonna'
  },
  {
    title: 'Virtual Insanity',
    artist: 'Jamiroquai'
  }
];

@Injectable({
  providedIn: 'root'
})
export class SongListService {
  private songList: Song[] = songList;
  songList$ = new BehaviorSubject<Song[]>(null);

  constructor() {
    this.next();
  }

  private next(songList?: Song[]) {
    this.songList$.next(songList || this.songList);
  }

  addSong(title, artist) {
    const song = { title, artist };
    if (this.findSong(song) !== -1) {
      console.log('Song already exists: ', title, artist);
      return;
    }
    this.songList.push(song);
    this.next();
  }

  removeSong(song) {
    const index = this.findSong(song);
    if (index === -1) {
      return;
    }
    this.songList.splice(index, 1);
    this.next();
  }

  findSong(songToFind) {
    return this.songList.findIndex(song => {
      return song.title === songToFind.title &&
        song.artist === songToFind.artist;
    });
  }

  searchSong(term: string) {
    if (term.length === 0) {
      return this.next();
    }
    const songListFiltered = this.songList.filter(song => {
      const lowerCaseTerm = term.toLowerCase();
      return song.title.toLowerCase().includes(lowerCaseTerm) ||
        song.artist.toLowerCase().includes(lowerCaseTerm);
    });
    this.next(songListFiltered);
  }
}
