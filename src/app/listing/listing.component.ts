import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  get movies() {
    return this.movieService.getMovies();
  }

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }

  edit(id: number) {
    this.router.navigate(['/movie', id]);
  }

}
