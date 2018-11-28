import { TestBed } from '@angular/core/testing';

import { FishingdayService } from './fishingday.service';

describe('FishingdayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FishingdayService = TestBed.get(FishingdayService);
    expect(service).toBeTruthy();
  });
});
