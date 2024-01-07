import { Injectable } from '@angular/core';
import {
   amenitiesByIdSelector,
   generalStationActions,
   generalStationByIdSelector,
   scheduleByIdSelector,
   stationGeneralSelector,
   userLoadingSelector,
   userLocationAction,
   userStationsSelector
} from '../../state';
import { StationState, UserStateInterface } from '../../models';
import { Store, select } from '@ngrx/store';
@Injectable({
   providedIn: 'root'
})
export class AppFacadeService {
   allStationArrivals$ = this.store.pipe(select(userStationsSelector));
   allAmenitiesData$ = this.store.pipe(select(amenitiesByIdSelector));
   selectedStationDetails$ = this.store.pipe(select(generalStationByIdSelector));
   selectedStationSchedule$ = this.store.pipe(select(scheduleByIdSelector));
   userLoading$ = this.store.pipe(select(userLoadingSelector));
   allGeneralStations$ = this.store.pipe(select(stationGeneralSelector));
   currentStation$ = this.store.pipe(select(generalStationByIdSelector))

   constructor(
      private readonly store: Store,
      private user: Store<UserStateInterface>,
      private station: Store<StationState>
   ) {}

   // * When initializing the app, we need to dispatch actions to load the data
   dispatchAppData(): void {
      // * This helps Locates User based on the user's location
      this.user.dispatch(userLocationAction.location());
   }

   // * When visiting the Train Page, we need to dispatch actions to load the data
   dispatchStationsFeature(): void {
      // * This helps Locates stations based on the user's location
      this.station.dispatch(generalStationActions.stationLocate());
   }

   // * When visiting the Bus Page, we need to dispatch actions to load the data
   dispatchBusFeature(): void {
      // * This helps Locates buses
   }

   dispatchTrainMap(): void {
      // * Methods associated with Map Feature goes here
   }

   dispatchSearchModal(): void {
      // * This helps Locates stations based on the user's location
      this.station.dispatch(generalStationActions.stationLocate());
   }
}
