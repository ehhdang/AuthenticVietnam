import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginButtonComponent } from './login-button.component';

describe('LoginButtonComponent', () => {
  let component: LoginButtonComponent;
  let fixture: ComponentFixture<LoginButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
