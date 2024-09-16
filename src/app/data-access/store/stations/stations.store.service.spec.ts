import { TestBed } from '@angular/core/testing';

import { StationsStoreService } from './stations.store.service';

describe('StationsStoreService', () => {
  let service: StationsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
