import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared/material.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';


import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { ListingComponent } from './listing/listing.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ShowStarsComponent } from './show-stars/show-stars.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    EditMovieComponent,
    ShowStarsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
