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
import { HeroMock, TabMock, HeroComponent, TabComponent, LoadingSkeletonComponent } from 'shared';
import {
   generalStationActions,
   userLoadingSelector,
   userLocationAction,
   userStationsSelector,
   StationStateInterface,
   UserStateInterface,
   ViewService
} from 'global-state';

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
      public view: ViewService
   ) {}

   ngOnInit() {
      this.state.dispatch(userLocationAction.location());
      this.stationStore.dispatch(generalStationActions.stationLocate());
      this.trainData$ = this.state.select(userStationsSelector);
      this.pageLoaded$ = this.state.select(userLoadingSelector);
   }

   /* habomane */
   currentTabSetter(index: number): void {
      this.view.currentTabIndex = index;
   }
}
