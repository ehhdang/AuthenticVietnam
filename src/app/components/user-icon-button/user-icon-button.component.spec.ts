import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserIconButtonComponent } from './user-icon-button.component';

describe('UserIconButtonComponent', () => {
  let component: UserIconButtonComponent;
  let fixture: ComponentFixture<UserIconButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIconButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
