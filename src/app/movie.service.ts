import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable()
export class MovieService {

  private movies: Movie[] = [
    new Movie('Silence of the Lambs', 'Jonathan Demme', 1991, 9, 0),
    new Movie(`Schindler's List`, 'Steven Spielberg', 1993, 8, 1),
    new Movie('Hackers', 'Iain Softley', 1995, 6, 2),
  ];

  constructor() { }

  getMovies() {
    return this.movies;
  }

  availableRatings() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  getMovie(id: number) {
    return this.movies.find(movie => movie.id === id);
  }
}
