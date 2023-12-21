/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { AppFacadeService } from '@atl-transit/global-state';
import { combineLatest, map } from 'rxjs';
import { InitializeTrainPageContent, TrainPageContentMocks, TrainPageContent } from '../../shared';

@Injectable({
   providedIn: 'root'
})
export class TrainPageService {
   constructor(private facade: AppFacadeService) {}

   initializeData(): InitializeTrainPageContent {
      return {
         content: this.setTrainPageContent(),
         data$: combineLatest([
            this.facade.selectPageLoaded(),
            this.facade.selectTrainData()
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
