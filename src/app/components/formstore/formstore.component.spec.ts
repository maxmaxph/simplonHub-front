import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstoreComponent } from './formstore.component';

describe('FormstoreComponent', () => {
  let component: FormstoreComponent;
  let fixture: ComponentFixture<FormstoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormstoreComponent]
    });
    fixture = TestBed.createComponent(FormstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
