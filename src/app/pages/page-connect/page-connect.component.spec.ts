import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConnectComponent } from './page-connect.component';

describe('PageConnectComponent', () => {
  let component: PageConnectComponent;
  let fixture: ComponentFixture<PageConnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageConnectComponent]
    });
    fixture = TestBed.createComponent(PageConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
