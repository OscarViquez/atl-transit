import { TestBed } from '@angular/core/testing';

import { StationDetailsService } from './station-details.service';

describe('StationDetailsService', () => {
  let service: StationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
