import { TestBed } from '@angular/core/testing';

import { TrainArrivalsService } from './train-arrivals.service';

describe('TrainArrivalsService', () => {
  let service: TrainArrivalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainArrivalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
