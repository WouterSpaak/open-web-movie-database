import { Routes } from '@angular/router';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ListingComponent } from './listing/listing.component';

export const routes: Routes = [
  { path: '', component: ListingComponent },
  { path: 'movie/:id', component: EditMovieComponent }
];
