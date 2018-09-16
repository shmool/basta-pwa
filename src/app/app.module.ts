import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { SongListComponent } from './song-list/song-list.component';
import { SearchSongComponent } from './search-song/search-song.component';
import { HttpClientModule } from '@angular/common/http';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SongComponent } from './song/song.component';
import { SongViewComponent } from './song-view/song-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SongListComponent,
    SearchSongComponent,
    LyricsComponent,
    SongComponent,
    SongViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
