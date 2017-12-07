import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStarsComponent } from './show-stars.component';

describe('ShowStarsComponent', () => {
  let component: ShowStarsComponent;
  let fixture: ComponentFixture<ShowStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
