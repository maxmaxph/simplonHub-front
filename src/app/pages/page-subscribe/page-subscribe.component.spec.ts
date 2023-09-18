import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubscribeComponent } from './page-subscribe.component';

describe('PageSubscribeComponent', () => {
  let component: PageSubscribeComponent;
  let fixture: ComponentFixture<PageSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSubscribeComponent]
    });
    fixture = TestBed.createComponent(PageSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
