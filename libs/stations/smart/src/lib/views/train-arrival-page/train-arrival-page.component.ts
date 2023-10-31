/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//component import
import { TrainArrivalPage } from '../../models';
import { HeroMock, TabMock } from 'shared';
import { HeroComponent } from 'shared';
import { TabComponent } from 'shared';
import { LoadingSkeletonComponent } from 'shared';
import { Store } from '@ngrx/store';
import {
   generalStationActions,
   userLoadingSelector,
   userLocationAction,
   userStationsSelector
} from 'libs/+state/src/lib/state';
import { StationStateInterface, UserStateInterface } from 'libs/+state/src/lib/models';
import { ViewService } from 'libs/+state/src/lib/services';
import {
   SavedStationsCardComponent,
   TrainStaion,
   TrainStationCardComponent
} from 'stations-ui';
@Component({
   selector: 'lib-train-arrival-page',
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
