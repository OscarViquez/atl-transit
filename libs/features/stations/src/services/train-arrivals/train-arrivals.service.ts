/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
   generalStationActions,
   userStationsSelector,
   StationStateInterface,
   UserStateInterface,
   userLoadingSelector
} from '@atl-transit/global-state';
import { Observable } from 'rxjs';
import { ArrivalPageConfig, TrainStation } from '../../../shared';

interface InitializationData {
   trainData$: Observable<TrainStation[]>;
   pageLoaded$: Observable<boolean>;
}

@Injectable({
   providedIn: 'root'
})
export class TrainArrivalsService {
   constructor(
      private state: Store<UserStateInterface>,
      private stationStore: Store<StationStateInterface>,
   ) {}

   initializeData(): InitializationData {
      this.stationStore.dispatch(generalStationActions.stationLocate());
      return {
         trainData$: this.state.select(userStationsSelector),
         pageLoaded$: this.state.select(userLoadingSelector)
      };
   }

   setConfig(): ArrivalPageConfig {
      return {
         maxStationArrivals: 2,
         maxRailArrivals: 4,
         currentTabIndex: 0
      };
   }
}
