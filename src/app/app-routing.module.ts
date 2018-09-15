import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchSongComponent } from './search-song/search-song.component';

const routes: Routes = [
  { path: '', component: SearchSongComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
