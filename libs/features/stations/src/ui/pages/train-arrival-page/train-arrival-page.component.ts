/* eslint-disable @nx/enforce-module-boundaries */
// * ANGULAR IMPORTS */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// * NGRX IMPORTS */

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// * LOCAL IMPORTS */
import { StationCardComponent, StationErrorMessageComponent } from '../../components';
import { TrainStaion, GenericTrainErrorMocks } from '../../../shared';

// * LIBS IMPORTS */
import { HeroMock, TabMock, HeroComponent, TabComponent, LoadingSkeletonComponent } from '@atl-transit/shared';
import {
   generalStationActions,
   userStationsSelector,
   StationStateInterface,
   UserStateInterface,
   userLoadingSelector
} from '@atl-transit/global-state';
import { TabToggleService } from '../../../data/services/tab-toggle/tab-toggle.service';

@Component({
   selector: 'lib-train-arrivals-page',
   standalone: true,
   imports: [
      CommonModule,
      StationErrorMessageComponent,
      HeroComponent,
      TabComponent,
      StationCardComponent,
      LoadingSkeletonComponent
   ],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   /* Observables **/
   trainData$!: Observable<TrainStaion[]>;
   pageLoaded$!: Observable<boolean>;

   /* Max Limit of Stations Train Arrivals Cards **/
   maxStationArrivals = 2;
   maxRailArrivals = 4;

   /* Staic Content  **/
   savedErrorMessage = GenericTrainErrorMocks[0];
   staticContentTab = TabMock;
   staticContentHeader = HeroMock;

   constructor(
      private state: Store<UserStateInterface>,
      private stationStore: Store<StationStateInterface>,
      public view: TabToggleService
   ) {}

   ngOnInit() {
      this.stationStore.dispatch(generalStationActions.stationLocate());
      this.trainData$ = this.state.select(userStationsSelector);
      this.pageLoaded$ = this.state.select(userLoadingSelector);
   }

   /* habomane */
   currentTabSetter(index: number): void {
      this.view.currentTabIndex = index;
   }
}
