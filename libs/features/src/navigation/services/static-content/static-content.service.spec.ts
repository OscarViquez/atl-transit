import { TestBed } from '@angular/core/testing';

import { StaticContentService } from './static-content.service';

describe('StaticContentService', () => {
  let service: StaticContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
