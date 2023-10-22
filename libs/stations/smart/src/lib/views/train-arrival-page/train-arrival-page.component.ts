/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { filter, map, Observable, skipWhile, tap } from 'rxjs';
//component import
import { TrainArrivalPage } from '../../models';
import { CardComponent, HeroMock, TabMock } from 'shared';
import { HeroComponent } from 'shared';
import { TabComponent } from 'shared';
import {LoadingSkeletonComponent} from 'shared'
import { select, Store } from '@ngrx/store';
import { arrivalMappingActions, generalStationActions, stationArrivalResponseSelector, stationGeneralSelector, stationMappedArrivalData, userLocationAction, userSelector, userTrainStations } from  'libs/+state/src/lib/state'
import { StationStateInterface, UserStateInterface } from 'libs/+state/src/lib/models';
import { JsonStationInterface, SavedStationsCardComponent, StationInterface, TrainStaion, TrainStationCardComponent } from 'stations-ui';
import { delay } from 'rxjs';
import { TrainUiAdapter, UserAdapter } from 'libs/+state/src/lib/services/adapters';
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
   stationArrivals!: StationInterface[];
   railData$ : Observable<JsonStationInterface[]> = this.stationStore.pipe(select(stationGeneralSelector));
   

   constructor(
      private state: Store<UserStateInterface>, 
      private stationStore: Store<StationStateInterface>) {}

   ngOnInit() {
      this.state.dispatch(userLocationAction.location());
      this.stationStore.dispatch(generalStationActions.stationLocate())

      this.stationStore.select(stationMappedArrivalData).subscribe((mappedData) => {
        this.stationStore.dispatch(arrivalMappingActions.arrivalMappingSuccess({ arrivalsMapped : mappedData}))
        this.stationArrivals = mappedData
      })

      this.state.select(userSelector).subscribe((user) => {
         const mappedUserTrainData = UserAdapter.MapClosestStationToUser(user, this.stationArrivals);
         this.state.dispatch(userTrainStations.userStationMappingSuccess({ stations:  TrainUiAdapter.MapStationsToUi(mappedUserTrainData) }))

      })
      

}
}