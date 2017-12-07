import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-stars',
  templateUrl: './show-stars.component.html',
  styleUrls: ['./show-stars.component.scss']
})
export class ShowStarsComponent implements OnInit {

  @Input() rating: number;
  @Input() max = 10;
  stars: string[];

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.max).fill('star_border', 0, this.max).fill('star', 0, this.rating);
  }

}
