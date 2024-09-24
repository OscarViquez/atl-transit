import { TestBed } from '@angular/core/testing';

import { BusStoreService } from './bus-store.service';

describe('BusStoreService', () => {
  let service: BusStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
