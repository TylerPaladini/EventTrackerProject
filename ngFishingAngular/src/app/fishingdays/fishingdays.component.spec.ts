import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingdaysComponent } from './fishingdays.component';

describe('FishingdaysComponent', () => {
  let component: FishingdaysComponent;
  let fixture: ComponentFixture<FishingdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishingdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
