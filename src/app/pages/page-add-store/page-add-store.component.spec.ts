import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddStoreComponent } from './page-add-store.component';

describe('PageAddStoreComponent', () => {
  let component: PageAddStoreComponent;
  let fixture: ComponentFixture<PageAddStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAddStoreComponent]
    });
    fixture = TestBed.createComponent(PageAddStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
