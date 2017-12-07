import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  private readonly EMPTY_STAR = 'star_border';
  private readonly FILLED_STAR = 'star';

  value: number;

  @Input() max = 10;
  stars: string[];

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.max).fill(this.EMPTY_STAR);
  }

  parseStars(value: number, hover = false) {
    this.stars = Array(this.max).fill(this.EMPTY_STAR).fill(this.FILLED_STAR, 0, value);
    if (!hover) {
      this.value = value;
    }
  }

}
