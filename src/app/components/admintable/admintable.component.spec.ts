import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintableComponent } from './admintable.component';

describe('AdmintableComponent', () => {
  let component: AdmintableComponent;
  let fixture: ComponentFixture<AdmintableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmintableComponent]
    });
    fixture = TestBed.createComponent(AdmintableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
