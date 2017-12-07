import { FormGroup } from '@angular/forms';

export class Movie {
  constructor(public title: string, public director: string, public year: number, public rating: number, public id?: number) { }

  setValues(group: FormGroup) {
    this.title = group.get('title').value;
    this.director = group.get('director').value;
    this.year = group.get('year').value;
    this.rating = group.get('rating').value;
  }
}
