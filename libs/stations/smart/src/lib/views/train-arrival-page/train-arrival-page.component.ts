/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
//component import
import { TrainArrivalPage } from '../../models';
import { CardComponent, HeroMock, TabMock } from 'shared';
import { HeroComponent } from 'shared';
import { TabComponent } from 'shared';
import {LoadingSkeletonComponent} from 'shared'
import { Store } from '@ngrx/store';
import { generalStationActions, userLocationAction } from  'libs/+state/src/lib/state'
import { StationStateInterface, UserStateInterface } from 'libs/+state/src/lib/models';
import { SavedStationsCardComponent, TrainStaion, TrainStationCardComponent } from 'stations-ui';
@Component({
   selector: 'lib-train-arrival-page',
   standalone: true,
   imports: [
      CommonModule,
      CardComponent,
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
   content: TrainArrivalPage = {
      tab: TabMock,
      header: HeroMock,
   };
   trainData!: TrainStaion[];
   

   constructor(
      private state: Store<UserStateInterface>, 
      private stationStore: Store<StationStateInterface>) {}

    ngOnInit() {
      this.state.dispatch(userLocationAction.location());
      this.stationStore.dispatch(generalStationActions.stationLocate())
      this.state.dispatch(userLocationAction.locateUserFailure({message: 'Yeah I tried'}))
   }
}