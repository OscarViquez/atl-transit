/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
//component import
import { TrainStaion } from '../../models';
import { TrainStationCardComponent } from '../../components/train-station-card/train-station-card.component';
import { CardComponent, Header, HeroMock, Tab, TabMock } from 'shared';
import { HeroComponent } from 'shared';
import { TabComponent } from 'shared';
import {LoadingSkeletonComponent} from 'shared'
import { SavedStationsCardComponent } from '../../components/saved-stations-card/saved-stations-card.component';
import { Store } from '@ngrx/store';
import { generalStationActions, userLocationAction } from  'libs/+state/src/lib/state'
import { StationStateInterface, UserStateInterface } from 'libs/+state/src/lib/models';
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
   tab: Tab[] = TabMock;
   header: Header = HeroMock;
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
