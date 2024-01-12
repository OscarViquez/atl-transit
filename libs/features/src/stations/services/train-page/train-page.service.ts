/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { AppFacadeService } from '@atl-transit/global-state';
import { combineLatest, map } from 'rxjs';
import { TrainContentInit, TrainPageContentMocks, TrainPageContent } from '../../shared';

@Injectable({
   providedIn: 'root'
})
export class TrainPageService {
   constructor(private facade: AppFacadeService) {}

   initializeData(): TrainContentInit {
      return {
         content: this.setTrainPageContent(),
         data$: combineLatest([
            this.facade.stationDataLoading$, // changed from userLoading$ to stationDetailLoading$
            this.facade.allStationArrivals$
         ]).pipe(map(([loading, trains]) => ({ loading, trains })))
      };
   }

   setTrainPageContent(): TrainPageContent {
      return {
         header: TrainPageContentMocks.header,
         tab: TrainPageContentMocks.tab,
         feedback: TrainPageContentMocks.feedback,
         tiles: TrainPageContentMocks.tiles,
         config: TrainPageContentMocks.config
      };
   }
}
