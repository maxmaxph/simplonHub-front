import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInfosComponent } from './page-infos.component';

describe('PageInfosComponent', () => {
  let component: PageInfosComponent;
  let fixture: ComponentFixture<PageInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageInfosComponent]
    });
    fixture = TestBed.createComponent(PageInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
