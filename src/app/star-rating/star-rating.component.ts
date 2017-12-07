import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {

  private _onChange: (value: number) => void;
  private _onTouched: () => void;
  private _touched = false;

  private readonly EMPTY_STAR = 'star_border';
  private readonly FILLED_STAR = 'star';

  value: number;

  @Input() max = 10;
  stars: string[];

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.max).fill(this.EMPTY_STAR);
  }

  writeValue(value: number) {
    this.parseStars(value);
  }

  registerOnChange(fn: (value: number) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }

  parseStars(value: number, hover = false) {
    if (!this._touched) {
      this._onTouched();
      this._touched = true;
    }

    this.stars = Array(this.max).fill(this.EMPTY_STAR).fill(this.FILLED_STAR, 0, value);
    if (!hover) {
      this.value = value;
      this._onChange(value);
    }
  }

}
