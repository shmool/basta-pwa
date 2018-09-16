import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSongComponent } from './search-song/search-song.component';
import { SongViewComponent } from './song-view/song-view.component';

const routes: Routes = [
  { path: '', component: SearchSongComponent },
  { path: 'song/:title/:artist', component: SongViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
