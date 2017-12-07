import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {

  private _onChange: (value: number) => void;
  private _onTouched: () => void;

  private readonly EMPTY_STAR = 'star_border';
  private readonly FILLED_STAR = 'star';

  value: number;

  @Input() max = 10;
  stars: string[];

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.max).fill(this.EMPTY_STAR);
  }

  writeValue(value: number | null) {
    if (value) {
      this.value = value;
      this.parseStars(value);
    }
  }

  registerOnChange(fn: (value: number) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }

  parseStars(value: number) {
    this.stars = Array(this.max).fill(this.EMPTY_STAR).fill(this.FILLED_STAR, 0, value);
  }

  setValue(value: number) {
    this.value = value;
    this._onChange(value);
    this._onTouched();
  }

  reset() {
    this.parseStars(this.value);
  }

}
