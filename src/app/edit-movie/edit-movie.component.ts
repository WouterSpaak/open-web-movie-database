import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movie: Movie;
  form: FormGroup;

  get availableRatings() {
    return this.movies.availableRatings();
  }

  constructor(private route: ActivatedRoute, private router: Router, private movies: MovieService, private fb: FormBuilder) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.movies.getMovie(parseInt(id, 10));

    this.form = this.fb.group({
      title: this.movie.title,
      director: this.movie.director,
      year: this.movie.year,
      rating: this.movie.rating
    });
  }

  save(e: any) {
    e.preventDefault();
    this.movie.setValues(this.form);
    this.router.navigate(['../']);
  }

}
