import { TestBed } from '@angular/core/testing';

import { TrainsStoreService } from './trains.store.service';

describe('TrainsStoreService', () => {
  let service: TrainsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
