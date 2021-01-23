import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeleteAccountButtonComponent } from './delete-account-button.component';

describe('DeleteAccountButtonComponent', () => {
  let component: DeleteAccountButtonComponent;
  let fixture: ComponentFixture<DeleteAccountButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccountButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
