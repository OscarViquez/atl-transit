import { TestBed } from '@angular/core/testing';

import { TrainPageService } from './train-page.service';

describe('TrainArrivalsService', () => {
   let service: TrainPageService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(TrainPageService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });
});
