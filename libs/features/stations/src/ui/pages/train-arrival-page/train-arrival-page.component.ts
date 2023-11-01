// * ANGULAR IMPORTS */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// * NGRX IMPORTS */

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// * LOCAL IMPORTS */
import { TrainArrivalPage } from '../../../shared/models/component.interfaces';
import { SavedStationsCardComponent, TrainStationCardComponent } from '../../components';
import { TrainStaion } from '../../../shared';

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
      TrainStationCardComponent,
      HeroComponent,
      TabComponent,
      SavedStationsCardComponent,
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
   staticContent: TrainArrivalPage = {
      tab: TabMock,
      header: HeroMock
   };

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
}
