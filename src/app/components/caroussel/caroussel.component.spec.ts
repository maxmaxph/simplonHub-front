import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousselComponent } from './caroussel.component';

describe('CarousselComponent', () => {
  let component: CarousselComponent;
  let fixture: ComponentFixture<CarousselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarousselComponent]
    });
    fixture = TestBed.createComponent(CarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
