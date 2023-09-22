import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminComponent } from './page-admin.component';

describe('PageAdminComponent', () => {
  let component: PageAdminComponent;
  let fixture: ComponentFixture<PageAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAdminComponent]
    });
    fixture = TestBed.createComponent(PageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
