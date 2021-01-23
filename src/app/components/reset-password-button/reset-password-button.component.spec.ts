import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResetPasswordButtonComponent } from './reset-password-button.component';

describe('ResetPasswordButtonComponent', () => {
  let component: ResetPasswordButtonComponent;
  let fixture: ComponentFixture<ResetPasswordButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
