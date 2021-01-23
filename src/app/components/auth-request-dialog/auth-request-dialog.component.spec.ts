import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRequestDialogComponent } from './auth-request-dialog.component';

describe('AuthRequestDialogComponent', () => {
  let component: AuthRequestDialogComponent;
  let fixture: ComponentFixture<AuthRequestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRequestDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
