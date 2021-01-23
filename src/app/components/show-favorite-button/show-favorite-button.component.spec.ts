import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFavoriteButtonComponent } from './show-favorite-button.component';

describe('ShowFavoriteButtonComponent', () => {
  let component: ShowFavoriteButtonComponent;
  let fixture: ComponentFixture<ShowFavoriteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFavoriteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
