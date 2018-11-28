import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfishingdayComponent } from './addfishingday.component';

describe('AddfishingdayComponent', () => {
  let component: AddfishingdayComponent;
  let fixture: ComponentFixture<AddfishingdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfishingdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfishingdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
