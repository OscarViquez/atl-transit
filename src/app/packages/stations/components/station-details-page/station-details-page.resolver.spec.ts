import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { stationDetailsPageResolver } from './station-details-page.resolver';

describe('stationDetailsPageResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => stationDetailsPageResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
